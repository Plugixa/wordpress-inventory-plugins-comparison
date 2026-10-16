// Regenerates the table between the markers in README.md from the same data the site uses.
// Run with `npm run readme`.
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "yaml";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://plugixa.github.io/wordpress-inventory-plugins-comparison";
const START = "<!-- generated:start -->";
const END = "<!-- generated:end -->";

const read = (file: string) => parse(readFileSync(path.join(root, file), "utf8"));
const prose = read("src/i18n/en/products.yaml");

const products = readdirSync(path.join(root, "src/data/products"))
  .map((f) => read(`src/data/products/${f}`))
  .sort((a, b) => a.order - b.order);

type Tier = { name: string; price: number; period: "year" | "lifetime"; sites: string };

// The "Paid from" cell. Plugins differ: some are free only (no tiers), some sell only
// lifetime licences, some mix yearly and lifetime plans.
function paidFrom(tiers: Tier[], currency: "USD" | "EUR"): string {
  const symbol = currency === "EUR" ? "€" : "$";
  if (!tiers.length) return "Free only";
  // Yearly first, so plugins compare like for like; a lifetime price is shown only when no yearly plan exists.
  const yearly = tiers.filter((t) => t.period === "year").map((t) => t.price);
  if (yearly.length) return `${symbol}${Math.min(...yearly)}/yr`;
  return `${symbol}${Math.min(...tiers.map((t) => t.price))} once`;
}

const rows = products.map((p) => {
  const statsFile = path.join(root, `src/data/wporg/${p.slug}.json`);
  // A plugin not yet on wordpress.org has no stats file and is listed as new.
  const stats = existsSync(statsFile) ? JSON.parse(readFileSync(statsFile, "utf8")) : { active_installs: 0, num_ratings: 0 };
  const installs = stats.active_installs < 10 ? "new" : `${stats.active_installs.toLocaleString("en")}+`;
  const rating = stats.num_ratings ? `${stats.rating} (${stats.num_ratings})` : "–";
  return `| [${p.name}](${SITE}/plugins/${p.slug}/) | ${prose[p.slug].award} | ${installs} | ${rating} | ${paidFrom(p.pricing.tiers, p.pricing.currency)} |`;
});

const table = [
  "| Plugin | Best for | Active installs | Rating (count) | Paid from |",
  "|---|---|---|---|---|",
  ...rows,
].join("\n");

const file = path.join(root, "README.md");
const readme = readFileSync(file, "utf8");
const before = readme.slice(0, readme.indexOf(START) + START.length);
const after = readme.slice(readme.indexOf(END));
writeFileSync(file, `${before}\n${table}\n${after}`);
console.log(`README table updated with ${rows.length} plugins.`);
