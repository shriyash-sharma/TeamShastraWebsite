import { proxySupport } from "@/lib/support-proxy";

// "Request a call": the server records it and alerts TeamShastra staff.
export async function POST(request: Request) {
  return proxySupport("/visitor/callback", request, "POST");
}
