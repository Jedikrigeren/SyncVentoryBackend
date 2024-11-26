export const handlePostExample = async (req: Request): Promise<Response> => {
    try {
      const body = await req.json(); // Parse JSON body
      return new Response(`You posted: ${JSON.stringify(body)}`, {
        headers: { "content-type": "application/json" },
      });
    } catch (error) {
      return new Response("Invalid JSON", { status: 400 });
    }
  };
  