import { appFeatures } from "./features/app";
import { billingFeatures } from "./features/billing";
import { customerFeatures } from "./features/customers";
import { jobFeatures } from "./features/jobs";
import { moneyFeatures } from "./features/money";
import { salaryFeatures } from "./features/salary";
import { teamFeatures } from "./features/team";
import type { FeatureGroup, FeatureLanding } from "./types";

/** Every /features/<slug> page, in hub order. */
export const featureLandings: FeatureLanding[] = [
  ...jobFeatures,
  ...teamFeatures,
  ...salaryFeatures,
  ...billingFeatures,
  ...moneyFeatures,
  ...customerFeatures,
  ...appFeatures
];

export const featureGroups: FeatureGroup[] = [
  "Jobs & field work",
  "Team & attendance",
  "Salary",
  "Billing & GST",
  "Stock, purchases & money",
  "Customers",
  "App & setup"
];

const featureLandingMap = new Map(featureLandings.map((feature) => [feature.slug, feature]));

export function getFeatureLanding(slug: string): FeatureLanding | undefined {
  return featureLandingMap.get(slug);
}

export function featureLandingPath(slug: string): string {
  return `/features/${slug}`;
}
