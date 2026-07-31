const worker = {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.includes("text/html")) return response;

    const headers = new Headers(response.headers);
    headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
    headers.set("CDN-Cache-Control", "no-store");
    headers.set("Cloudflare-CDN-Cache-Control", "no-store");
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};

export default worker;
