import { proxySupport } from "@/lib/support-proxy";

export async function POST(request: Request) {
  return proxySupport("/visitor/start", request, "POST");
}
