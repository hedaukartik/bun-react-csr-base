import path from "path";

const PORT = process.env.PORT || 3000;
const BUILD_PATH = "./build";

Bun.serve({
  port: PORT,
  fetch(req) {
    const url = new URL(req.url);
    if (
      url.pathname &&
      url.pathname !== "/" &&
      Bun.file(BUILD_PATH + path.normalize(url.pathname)).size > 0
    ) {
      return new Response(Bun.file(BUILD_PATH + path.normalize(url.pathname)));
    }
    /*
     * All other routes will be manage by react-router-dom further
     * Also 404, file not found will be handled by react-react-dom with respect to CSR
     */

    return new Response(Bun.file(BUILD_PATH + "/index.html"));
  },
});

console.log(
  "React App is running on port " + `${process.env.HOST_URL}:` + PORT
);
