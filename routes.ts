import { handleGetExample } from "./routes/getExample.ts";
import { handlePostExample } from "./routes/postExample.ts";

export const router = (req: Request): Response | Promise<Response> => {
  const url = new URL(req.url);
  const pathname = url.pathname;

  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  // Handle GET requests
  if (req.method === "GET" && pathname === "/example-get") {
    return handleGetExample(req);
  }

  // Handle POST requests
  if (req.method === "POST" && pathname === "/example-post") {
    return handlePostExample(req);
  }

  // Default 404 response
  return new Response("Not Found", { status: 404 });
};
