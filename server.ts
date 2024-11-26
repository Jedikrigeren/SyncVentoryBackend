import { router } from "./routes.ts";

const PORT = 8000;

console.log(`Server is running on http://localhost:${PORT}/`);

// Use the router to handle all requests
Deno.serve({ port: PORT }, router);
