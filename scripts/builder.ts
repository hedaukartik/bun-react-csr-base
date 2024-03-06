import { watch } from "fs";
import type { BunPlugin } from "bun";
const sass = await import("sass");

const path = "./build/styles.css";

await Bun.write(path, "", { createPath: true });

let totalCompiledCSS = "";

const sassPlugin: BunPlugin = {
  name: "sass",
  setup(build) {
    build.onLoad({ filter: /\.scss$/ }, async (args) => {
      const compiledCSS = sass.compile(args.path, { style: "compressed" });
      totalCompiledCSS = totalCompiledCSS.concat(compiledCSS.css);
      await Bun.write(path, totalCompiledCSS);
      return {
        contents: compiledCSS.css,
        loader: "file",
      };
    });
  },
};

export function startBuilder({
  BUILD_DIR,
  PORT,
}: {
  BUILD_DIR: string;
  PORT: string | number;
}) {
  let build = 0;

  async function runBuild() {
    await Bun.build({
      entrypoints: ["./src/index.tsx"],
      outdir: BUILD_DIR,
      minify: true,
      splitting: true,
      publicPath: "./",
      plugins: [sassPlugin],
    });

    console.log(
      "React App is running on port " + `${process.env.HOST_URL}:` + PORT
    );
  }

  if (process.env.NODE_ENV === "development") {
    const srcWatcher = watch(
      `./src`,
      { recursive: true },
      async (event, filename) => {
        totalCompiledCSS = "";
        await runBuild();
        console.log(`Detected ${event} in ${filename}`);
      }
    );

    process.on("SIGINT", () => {
      srcWatcher.close();
      process.exit(0);
    });
  }

  if (build === 0) {
    runBuild();
    build = 1;
  }
}
