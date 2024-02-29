import { watch } from "fs";

export function startBuilder(BUILD_DIR: string) {
  let build = 0;

  async function runBuild() {
    await Bun.build({
      entrypoints: ["./src/index.tsx"],
      outdir: BUILD_DIR,
      minify: true,
      splitting: true,
    });
  }

  const srcWatcher = watch(
    `${import.meta.dir}/src`,
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

  if (build === 0) {
    runBuild();
    build = 1;
  }
}
