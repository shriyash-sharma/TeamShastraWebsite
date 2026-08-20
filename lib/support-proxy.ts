const BACKEND =
  process.env.SUPPORT_API_BASE_URL ??
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "https://api.teamshastra.com";

export async function proxySupport(
  path: string,
  request: Request,
  method: string
): Promise<Response> {
  const url = new URL(request.url);
  const target = `${BACKEND.replace(/\/$/, "")}/api/v1/support${path}${url.search}`;
  const headers = new Headers();
  const contentType = request.headers.get("content-type");
  if (contentType) headers.set("content-type", contentType);
  const session = request.headers.get("x-visitor-session");
  if (session) headers.set("x-visitor-session", session);

  const init: RequestInit = { method, headers };
  if (method !== "GET" && method !== "HEAD") {
    init.body = await request.text();
  }

  try {
    const resp = await fetch(target, init);
    const body = await resp.text();
    return new Response(body, {
      status: resp.status,
      headers: {
        "content-type": resp.headers.get("content-type") ?? "application/json"
      }
    });
  } catch {
    return new Response(JSON.stringify({ detail: "Support is temporarily unavailable." }), {
      status: 502,
      headers: { "content-type": "application/json" }
    });
  }
}
