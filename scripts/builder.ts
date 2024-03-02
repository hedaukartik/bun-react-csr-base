import { watch } from "fs";

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
