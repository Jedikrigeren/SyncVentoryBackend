export const handleGetExample = (req: Request): Response => {
    return new Response("This is a GET route!", {
      headers: { "content-type": "text/plain" },
    });
  };
  