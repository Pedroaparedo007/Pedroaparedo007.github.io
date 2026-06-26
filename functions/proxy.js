export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  // Extract the target URL from the query parameter (e.g., /proxy?url=https://example.com)
  const targetUrl = url.searchParams.get('url');
  
  if (!targetUrl) {
    return new Response('Missing "url" parameter.', { status: 400 });
  }

  try {
    // Clone the original request headers to bypass security checks
    const newHeaders = new Headers(context.request.headers);
    newHeaders.set('Host', new URL(targetUrl).host);

    // Fetch the target website content through Cloudflare's servers
    const response = await fetch(targetUrl, {
      method: context.request.method,
      headers: newHeaders,
      body: context.request.body
    });

    // Return the response back to the user
    return response;
  } catch (error) {
    return new Response('Proxy Error: ' + error.message, { status: 500 });
  }
}
