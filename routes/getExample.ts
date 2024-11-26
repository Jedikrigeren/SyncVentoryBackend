export const handleGetExample = (req: Request): Response => {
    // Log function to capture request details
    const { method, url } = req;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${method} request received for: ${url}`);
    return new Response("This is a GET route!", {
      headers: {
        "content-type": "text/plain",
        "Access-Control-Allow-Origin": "*", // Allow all origins
      },
    });
  };
  