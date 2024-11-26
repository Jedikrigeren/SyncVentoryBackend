export const handlePostExample = async (req: Request): Promise<Response> => {
    try {
      const { method, url } = req;
      const timestamp = new Date().toISOString();
      console.log(`[${timestamp}] ${method} request received for: ${url}`);


      const body = await req.json(); // Parse JSON body
      console.log("Parsed JSON body:", body);
      
      return new Response(`You posted: ${JSON.stringify(body)}`, {
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    } catch (error) {
      return new Response("Invalid JSON", { status: 400 });
    }
  };
  