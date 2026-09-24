# KaryaRun 1.109.0 vs TeamShastra — Competitive Analysis

**Artifact:** Static reverse analysis of `KaryaRun_1.109.0.apks` + TeamShastra product-of-record marketing copy  
**Date:** 13 Sep 2026  
**Purpose:** Map KaryaRun’s technician workflow depth and identify where it is stronger than TeamShastra today.

---

## 1. Executive verdict

KaryaRun is a **technician-execution-first** field service OS. The Android app (v1.109.0) is built around: *check into a geofence → live-track the duty route → run a rich job card (parts, checklist, signatures, Happy Code) → collect money / deposit cash → get incentives & salary*.

TeamShastra is a **job-to-payment workspace** for Indian SMBs: *work orders → punch attendance → GST invoices / quotes → purchases & expenses / float → AMC & reports*, with an explicit **privacy posture of no all-day GPS**.

| Lens | KaryaRun lead | TeamShastra lead |
|------|----------------|------------------|
| Field accountability | Live GPS, geofence, selfie + face + biometric | Punch-only location; lighter trust model |
| Job close-out | Completion sheet, Happy Code, dual signatures, barcode serials | Photos + completion report PDF (simpler) |
| Parts / van stock | Technician-held fresh & defective deposit loop | Parts less central on marketed mobile surface |
| Technician money | Incentives, advances, salary slips, deposits, UPI QR | GST invoices, collections, float & bank (owner-side money) |
| Owner finance | GST handoff (office/web emphasis) | Purchases, suppliers, CA exports, WhatsApp PDFs |
| Positioning | Paid SaaS from ₹999/mo | Free Starter + web + Android |

**Bottom line for TeamShastra:** KaryaRun’s strongest moat in this APK is **proof + control on the technician phone** (geofence attendance, continuous duty tracking, AI fuel odometer, parts custody, incentive/payroll, job↔office chat). TeamShastra’s strongest counter is **owner-side finance & privacy** (purchases, float/bank, CA GST exports, punch-only GPS, free entry).

---

## 2. APK fingerprint (evidence)

| Field | Value |
|-------|-------|
| File | `KaryaRun_1.109.0.apks` (Play App Bundle splits, ~53 MB archive) |
| Package | `com.karyarun.karyarun_mobile` |
| App name | KaryaRun |
| Version | **1.109.0** (versionCode **279**) |
| SDK | min 26 / target & compile 36 |
| Stack | **Flutter** + Kotlin native tracking (`KaryaRunTrackingService`) + **Tracelet** (`com.ikolvi.tracelet`) |
| Backend | `https://api.karyarun.in` · help `https://help.karyarun.in` |
| Storage / push | Firebase (Messaging, Installations, Storage host `karyarun-mobile.firebasestorage.app`) |
| ML | ML Kit **face detection** + **barcode**; bundled TFLite face/barcode models |
| Local DB | SQLite (`libsqlite3.so`) with location sync (`synced` flag, batch sync, boot HTTP sync) |
| White-label signals | App icons: `default`, `hrl_cares`, `dibanshi_care`; copy “Powered by KaryaRun” |
| Operator (public web) | Human Reasoning Labs Private Limited · Bhubaneswar |

### Language / density splits in the APKS

`base` + `arm64_v8a` + density `xxhdpi` + locales: **en, hi, gu, mr, bn, kn, ta, te**.  
Flutter translation assets also ship **de** and **sk** (UI language picker currently lists en/de/sk in `en.json`; Android locale splits cover more Indian languages).

### Dangerous / operational permissions (selected)

- `ACCESS_FINE_LOCATION`, `ACCESS_BACKGROUND_LOCATION`
- `FOREGROUND_SERVICE` + `FOREGROUND_SERVICE_LOCATION`
- `ACTIVITY_RECOGNITION`, `REQUEST_IGNORE_BATTERY_OPTIMIZATIONS`
- `CAMERA`, `RECORD_AUDIO`, `USE_BIOMETRIC` / `USE_FINGERPRINT`
- Boot receivers for tracking + Tracelet geofence

This permission set matches **duty-time live tracking**, not punch-only attendance.

---

## 3. KaryaRun technician workflow (deep map from in-app copy)

Source of truth for this section: Flutter i18n `assets/translations/en.json` inside `base.apk` (~100 KB of product UI strings).

### 3.1 Day start — attendance as a control gate

1. Technician opens dashboard → **Check In**.
2. App acquires high-accuracy GPS and evaluates **geofence / zone**.
3. Outside zone → blocked (“You must be at a designated work site”).
4. Inside zone → **selfie** required; ML warns if face not clearly detected.
5. Optional **biometric** confirmation (“Confirm it is you to mark your attendance”).
6. On success, **route tracking** starts (foreground notification: “Tracking your location” / “KaryaRun is tracking your duty route”).
7. Fuel prompt: optional **start odometer** photo for day’s km (AI reads digits).

**Vs TeamShastra:** TeamShastra markets optional location at punch only, offline punch sync, leave, and “today’s board” — **no geofence gate, no selfie/face gate, no continuous duty track**.

### 3.2 Duty time — live tracking stack

App surfaces under More / permissions:

| Capability | What the APK implements |
|------------|-------------------------|
| Live map | “GPS Live Tracking” — real-time position for service centre |
| Trail / timeline | Trail History UI (marked Coming Soon in one place; timeline strings for stops, idle, shift start/end exist) |
| Diagnostics | Engine status, battery benchmark, OEM health, tester checklist |
| Phone setup wizard | Steps to disable battery killers; manufacturer-specific warnings |
| Disclosure | Tracking **starts after check-in and stops at check-out**; not for ads |
| Offline resilience | Check-out can save locally and sync when network returns; location batch sync in native layer |

Native stack: `KaryaRunTrackingService`, Tracelet `LocationService` + `GeofenceBroadcastReceiver`, headless Flutter sync, boot wake receivers.

### 3.3 Jobs — from assignment to billable close

**List / arrange**

- My Jobs with tabs, sort, helper chip, map navigate, call.
- **Arrange my order** — drag-to-reorder personal job sequence (persisted to server).

**Job detail (very deep)**

- Check-in gate: must be on attendance to edit job / add parts / file sheet.
- Custom **work statuses** by role; submit / resubmit for office review; revision needed.
- Sections for customer, equipment/machine, AMC visit / sold AMC, services, parts, photos (typed), checklist, remarks, activity, payments, invoices, completion sheets, defectives, helpers.
- **Parts**: issued-to-you stock, multi-location “take from”, GST/MRP/discount, return to stock on remove.
- **Incentives**: visit / item / AMC incentive breakdown; pending office approval.
- **Payments**: cash / UPI / etc., split payment, collect dues, **Show UPI QR**, multi-company dues warning.
- **Invoicing on phone**: quick raise invoice + full invoice editor (HSN/SAC, cess, place of supply, tax mode, AMC lines).
- **Completion sheet**: Happy Code, TCR No., warranty in/out, barcode serial scan, parts & charges, defective recovery, engineer + customer signatures (saved signatures + biometric to sign), service checklist, satisfaction, create tax invoice from sheet.
- **Job chat** with office: text, photo, voice note, video; urgent flag; delete-for-everyone.

**Create job** in field with custom fields, machine details, payment prompt (full/partial).

### 3.4 Inventory, tools, parts custody

| Module | Behavior |
|--------|----------|
| Inventory | Browse van/stock, pricing (MRP, GST, cess, HSN), stock in/out/transfer |
| My Parts | Fresh vs defective held by tech; deposit some/all; office approval |
| My Tools | Issued tools register; request return to manager |
| Defectives on job | Catalogued defective recovery tied to completion sheet |

This is a **custody chain** (office → tech → job → deposit), not just “log a part used”.

### 3.5 Expenses & fuel AI

- Categories: food, fuel, travel, parts, other; link to job; photo attachments.
- Fuel flow: start/stop odometer photos; **“AI reads the km automatically”**; km × rate auto-calc.
- Expense analytics (by category, daily, monthly, reimbursement status).
- Approval states: draft / pending / approved / rejected / paid.

### 3.6 Earnings, cash control, payroll

| Module | Behavior |
|--------|----------|
| Earnings hero | Visits / items / commission / AMC earned today & month |
| Cash alert | Cash in hand to deposit; office confirmation |
| Deposit methods | Cash, UPI, bank, cheque |
| Advances | Credits given & recovery |
| Salary slips | Base, allowances, multi-type incentives, reimbursements, deductions, attendance days, PDF when marked paid |
| Profile KYC | PAN, UAN, PF, ESI, bank, IFSC, payment mode |

### 3.7 Growth / engagement loops

- **Field Leads**: market visit / prospect with GPS + proof photos → timeline → convert to customer (GST fields).
- **Targets & Rewards**: progress, bonus, **scratch-card rewards**.
- **Sell a Contract**: AMC/rental plans on site (incentive on sold contract).
- **Rent Due**: collect month’s rent on round.
- Leave including **repeating week off**.

### 3.8 Platform UX extras

- Per-user language override vs workspace default.
- White-label **app icon** chooser.
- In-app **Report a problem** with screenshot + connection logs (PII stripped claim).
- Forced app update prompt; tenant **billing blocked** / account disabled screens.

---

## 4. TeamShastra product-of-record (comparison baseline)

From TeamShastra marketing site product truth (`lib/site.ts` / features), not SEO expansion pages:

1. Work orders — assign, status, comments, before/after photos, today’s board, completion report PDF  
2. Attendance & leave — check-in/out with **optional** location; **offline** punches; **no all-day GPS**  
3. Customers & AMC — directory, due visits, optional **customer portal**  
4. GST invoices & quotations — WhatsApp PDFs, **CA-ready GST workbooks** (not portal filing)  
5. Purchases & suppliers — payables next to sales  
6. Expenses, cash float, bank balances  
7. Reports — jobs, technician performance, revenue  
8. Languages — EN / HI / GU / MR / BN  
9. Surfaces — **Android + web**; multi-company workspace; roles owner/manager/technician  

Tagline: **“From Job to Payment, All in One Place.”**

---

## 5. Feature matrix (KaryaRun APK strength vs TeamShastra)

Legend: **KR+** = KaryaRun clearly stronger in analyzed APK · **TS+** = TeamShastra stronger in marketed product · **≈** = both have a version · **?** = not evidenced in this APK (may exist on KaryaRun web).

| Capability | KaryaRun 1.109.0 | TeamShastra | Edge |
|------------|-------------------|-------------|------|
| Geofenced check-in | Required zone + map distance | Not in core product truth | **KR+** |
| Selfie + face detect attendance | Yes + warning retake | No | **KR+** |
| Biometric attendance / sign | Yes | No | **KR+** |
| Live duty GPS / route | Yes (Tracelet + FG service) | Explicitly no all-day GPS | **KR+** (control) / **TS+** (privacy) |
| Tracking diagnostics / OEM setup | Deep | N/A | **KR+** |
| Job board / assign / photos | Yes | Yes | ≈ |
| Drag personal job order | Yes | Not marketed | **KR+** |
| Helpers on job | Yes | Not marketed | **KR+** |
| Completion sheet depth | Happy Code, TCR, dual sign, barcode, checklist | Completion report PDF | **KR+** |
| Job↔office chat (voice/video) | Yes | Push + in-app chat (lighter) | **KR+** |
| Tax invoice on phone | Quick + editor (HSN, cess) | GST invoices (web+app) | ≈ / slight **TS+** on CA export story |
| Quotations | ? | Yes | **TS+** |
| UPI QR collect on job | Yes | Payments / WhatsApp PDF | **KR+** field collect |
| Purchases / suppliers | ? (not in tech app) | Yes | **TS+** |
| Cash float / bank balances | Tech cash deposit loop | Owner float + bank | different; **TS+** owner finance |
| Van / tech inventory custody | Fresh/defective deposit | Weaker in marketed mobile | **KR+** |
| Tools register | Yes | No | **KR+** |
| AI odometer fuel | Yes | Standard expenses | **KR+** |
| Incentives + salary slips | Yes | Not marketed | **KR+** |
| Targets / scratch rewards | Yes | No | **KR+** |
| Field leads with GPS proof | Yes | Customers focus | **KR+** sales field |
| Sell AMC/contract on site | Yes | AMC due visits + portal | different; **KR+** sell motion / **TS+** portal |
| Offline | Location + checkout queue | Attendance offline (core) | ≈ different scopes |
| Web admin | Yes (public site) | First-class | **TS+** packaging |
| Free tier | Paid from ₹999 | Starter free | **TS+** |
| Customer portal | ? | Yes | **TS+** |
| Indian languages | APK splits: 8 locales | 5 languages marketed | **KR+** locale count |
| White-label icons | Yes | No | **KR+** |

---

## 6. KaryaRun strong points (prioritized for TeamShastra)

### P0 — Existential differentiators (why buyers pick KaryaRun)

1. **Geofence + selfie + biometric attendance** — attendance becomes *proof of presence*, not trust.  
2. **Duty-time live tracking with OEM-hardened pipeline** — Tracelet, background location, battery opt-out wizard, health chip, boot sync. Addresses “technicians are invisible between dispatch and invoice.”  
3. **Completion sheet as legal/service artifact** — Happy Code, dual signatures, serial barcode, warranty, defective recovery, office approval.  
4. **Parts custody** — issued / used / defective / deposit-with-approval closes the “van stock vanishes” pain.  
5. **Technician P&L loop** — collect → cash-in-hand → deposit confirm; incentives → salary slip. Aligns tech behavior with company money.

### P1 — Depth that raises switching cost

6. Job-scoped **office chat** with media (voice/video) replaces WhatsApp threads per job.  
7. **AI odometer** fuel claims reduce fake km disputes.  
8. **Field leads** with GPS/photo proof extend FSM into field sales.  
9. **Targets + scratch rewards** gamify productivity.  
10. **On-site contract / rent collection** motions for AMC/rental businesses.  
11. **White-label app icon** for multi-brand / authorized service centres.

### P2 — Platform maturity signals

12. Version cadence at **1.109.0** / code 279 — mature iteration.  
13. Forced updates, tenant billing lock, in-app problem reports with diagnostics.  
14. Public INR prepaid packaging (Starter/Growth/Business) — clear commercial motion.

---

## 7. Where TeamShastra still wins (and should lean harder)

1. **Privacy-first attendance** — a real buying criterion for SMBs wary of “spy apps”; KaryaRun’s permission set is heavy.  
2. **Owner finance completeness** — purchases, suppliers, float, bank, CA GST workbooks, WhatsApp invoice share.  
3. **Web + Android as equal citizens** — KaryaRun marketing is platform-wide, but this APK is clearly the field endpoint; TeamShastra can own “owner runs business from web.”  
4. **Free Starter** — lower land; KaryaRun is prepaid SaaS.  
5. **Customer portal** — external customer visibility.  
6. Simpler mental model for CCTV/electrical SMBs: *job → invoice → money* without GPS ops overhead.

---

## 8. Workflow gap summary (TeamShastra → catch-up options)

If TeamShastra wants parity with KaryaRun’s *field control* story, the APK implies these product bets (ordered):

| Priority | Gap | Notes |
|----------|-----|-------|
| 1 | Optional geofence zones for punch | Keep default privacy; enterprise toggle |
| 2 | Optional selfie / face check at punch | Same gated approach |
| 3 | Duty tracking opt-in per company | Must not break “no all-day GPS” default FAQ |
| 4 | Structured completion sheet + signatures | Beyond photo report PDF |
| 5 | Technician parts custody + defective return | Especially for appliance / CCTV spares |
| 6 | Field payment QR + deposit confirmation | Complements existing collections |
| 7 | Job thread with voice | Reduce WhatsApp leakage |
| 8 | Incentive visibility for techs | Even if payroll stays external |

Do **not** blindly copy continuous GPS if brand promise is privacy — productize it as an **opt-in control pack**.

---

## 9. Commercial / GTM notes

| | KaryaRun | TeamShastra |
|--|-----------|-------------|
| Price | From ₹999/mo + 18% GST (public) | Starter free; Growth TBD; Enterprise contact |
| Trial | 14-day, no card | Free Starter / signup |
| Verticals | HVAC, pest, RO, elevator, fire, solar, FM, CCTV, electrical, plumbing… | Core: CCTV, electrical, maintenance, home services (+ broad SEO) |
| Narrative | Kill WhatsApp/Excel blind spots with GPS proof | Job to payment in one India-native workspace |

Competitive messaging implication: against KaryaRun, TeamShastra should **not** claim geofence/live-track parity until shipped. Lean into **finance + privacy + free start**; treat KaryaRun as the “control & proof” rival.

---

## 10. Method & limits

**Analyzed**

- Unpacked `.apks` → `base.apk` + ABI/locale splits  
- Androguard manifest (package, version, permissions, services, receivers)  
- Flutter `en.json` feature surface (~25 modules)  
- Native strings in `libapp.so` / DEX (API hosts, Tracelet, geofence, selfie, sync)  
- Public site `https://karyarun.in/` for packaging/positioning  
- TeamShastra website product-of-record (`lib/site.ts`, features)

**Not analyzed**

- Runtime API traffic or auth  
- KaryaRun web admin feature parity byte-for-byte  
- TeamShastra closed-source mobile/web app binaries in this pass  
- Legal/compliance review of continuous tracking  

Strings and permissions show **intent and shipped UI**; they do not prove every tenant has every module enabled.

---

## 11. One-page cheat sheet

**KaryaRun is stronger at:** geofence attendance, live duty GPS, completion/legal job sheet, parts & tools custody, tech incentives/payroll, AI fuel, field leads, job chat, UPI QR, gamified targets.

**TeamShastra is stronger at:** punch-only privacy, purchases/suppliers, float & bank, CA GST exports, customer portal, free entry, web+Android owner workspace simplicity.

**Strategic read:** Same category (India FSM), different centre of gravity — KaryaRun **controls the technician**; TeamShastra **closes the owner’s books**. Closing the gap means optional control modules without abandoning the privacy/finance brand.
