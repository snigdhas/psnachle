import * as esbuild from "esbuild";
import * as process from "process";
import { sentryEsbuildPlugin } from "@sentry/esbuild-plugin";

const ctx = await esbuild.context({
  sourcemap: true,
  minify: true,
  bundle: true,
  entryPoints: ["src/app.tsx"],
  loader: {
    ".webp": "file",
  },
  outdir: "static",
  target: "es2020",
  plugins: [
    sentryEsbuildPlugin({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      authToken: process.env.SENTRY_AUTH_TOKEN,
      org: "snigdhas",
      project: "psnache",
    }),
  ],
});

if (process.argv.includes("--watch")) {
  await ctx.watch();
} else {
  await ctx.rebuild();
  await ctx.dispose();
}
