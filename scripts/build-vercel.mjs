import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const source = path.resolve("04-presentation/final-submission-website/dist");
const output = path.resolve(".vercel-dist");
const origin = String(process.env.UPGRADE_GUIDE_API_ORIGIN || "").replace(/\/$/, "");

if (!/^https:\/\/[a-z0-9.-]+$/i.test(origin)) {
  throw new Error(
    "Set UPGRADE_GUIDE_API_ORIGIN to the Render origin only, for example https://upgrade-guide.onrender.com",
  );
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(source, output, { recursive: true, force: true });

const configPath = path.join(output, "chatbot", "config.js");
const template = await readFile(configPath, "utf8");
await writeFile(
  configPath,
  template.replace("__UPGRADE_GUIDE_API_ORIGIN__", origin),
  "utf8",
);

console.log(`Prepared Vercel frontend with API origin ${origin}`);
