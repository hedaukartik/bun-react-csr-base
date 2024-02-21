import path from "path";

const PORT = process.env.PORT || 3000;
const BUILD_PATH = "./build/";

Bun.serve({
  port: PORT,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/")
      return new Response(Bun.file(BUILD_PATH + "index.html"));

    if (
      url.pathname &&
      Bun.file(BUILD_PATH + path.normalize(url.pathname)).size > 0
    ) {
      return new Response(Bun.file(BUILD_PATH + path.normalize(url.pathname)));
    }

    return new Response("404, file not found");
  },
});

console.log("React App is running on port " + "http://localhost:" + PORT);
