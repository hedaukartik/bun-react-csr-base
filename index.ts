import path from "path";
import { statSync } from "fs";
import { startBuilder } from "./builder";

const PROJECT_ROOT = import.meta.dir;
const PUBLIC_DIR = path.resolve(PROJECT_ROOT, "public");
const BUILD_DIR = path.resolve(PROJECT_ROOT, "build");

const PORT = process.env.PORT || 3000;

// start build
startBuilder(BUILD_DIR);

function serveFromDir(config: {
  directory: string;
  path: string;
}): Response | null {
  let basePath = path.join(config.directory, config.path);
  const suffixes = ["", ".html", "index.html"];

  for (const suffix of suffixes) {
    try {
      const pathWithSuffix = path.join(basePath, suffix);
      const stat = statSync(pathWithSuffix);
      if (stat && stat.isFile()) {
        return new Response(Bun.file(pathWithSuffix));
      }
    } catch (err) {}
  }

  return null;
}

Bun.serve({
  port: PORT,
  fetch(req) {
    let reqPath = new URL(req.url).pathname;

    // check public
    const publicResponse = serveFromDir({
      directory: PUBLIC_DIR,
      path: reqPath,
    });
    if (publicResponse) return publicResponse;

    // check built assets
    const buildResponse = serveFromDir({
      directory: BUILD_DIR,
      path: reqPath,
    });
    if (buildResponse) return buildResponse;

    // finally serve index.html for any other request as its CSR
    const indexResponse = serveFromDir({
      directory: PUBLIC_DIR,
      path: "/index.html",
    });
    if (indexResponse) return indexResponse;

    return new Response("Something went wrong!", {
      status: 404,
    });
  },
});

console.log(
  "React App is running on port " + `${process.env.HOST_URL}:` + PORT
);
