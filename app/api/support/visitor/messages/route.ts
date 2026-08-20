import { proxySupport } from "@/lib/support-proxy";

export async function GET(request: Request) {
  return proxySupport("/visitor/messages", request, "GET");
}

export async function POST(request: Request) {
  return proxySupport("/visitor/messages", request, "POST");
}
