import { serve } from "https://deno.land/std@0.201.0/http/server.ts";

const PORT = 8000;

const handler = (req: Request): Response => {
  return new Response("Hello, Syncventory!", {
    headers: { "content-type": "text/plain" },
  });
};

console.log(`Server is running on http://localhost:${PORT}/`);
serve(handler, { port: PORT });
