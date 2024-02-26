import path from "path";
import { watch } from "fs";

const PORT = process.env.PORT || 3000;
const BUILD_PATH = "./build";
let build = 0;

function runBuild() {
  Bun.build({
    entrypoints: ["./src/index.tsx"],
    outdir: BUILD_PATH,
    minify: true,
    splitting: true,
  });
}

const srcWatcher = watch(
  `${import.meta.dir}/src`,
  { recursive: true },
  (event, filename) => {
    runBuild();
    console.log(`Detected ${event} in ${filename}`);
  }
);

process.on("SIGINT", () => {
  srcWatcher.close();
  process.exit(0);
});

if (build === 0) {
  runBuild();
  build = 1;
}

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
