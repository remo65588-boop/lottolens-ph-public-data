import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = path.join(root, "api", "v1");
const snapshotDate = "2026-08-12";

function parseCsv(text) {
  const records = [];
  let record = [];
  let field = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    if (quoted) {
      if (character === '"' && text[index + 1] === '"') {
        field += '"';
        index += 1;
      } else if (character === '"') {
        quoted = false;
      } else {
        field += character;
      }
      continue;
    }

    if (character === '"') quoted = true;
    else if (character === ",") {
      record.push(field);
      field = "";
    } else if (character === "\n") {
      record.push(field.replace(/\r$/, ""));
      if (record.some((value) => value !== "")) records.push(record);
      record = [];
      field = "";
    } else field += character;
  }

  if (field !== "" || record.length > 0) {
    record.push(field.replace(/\r$/, ""));
    records.push(record);
  }
  if (quoted) throw new Error("CSV ended inside a quoted field");

  const [headers, ...rows] = records;
  if (!headers) throw new Error("CSV contains no header row");
  return rows.map((row, rowIndex) => {
    if (row.length !== headers.length) {
      throw new Error(`CSV row ${rowIndex + 2} has ${row.length} fields; expected ${headers.length}`);
    }
    return Object.fromEntries(headers.map((header, columnIndex) => [header, row[columnIndex]]));
  });
}

const stableJson = (value) => `${JSON.stringify(value, null, 2)}\n`;
const sha256 = (text) => createHash("sha256").update(text).digest("hex");

const resultsCsv = await readFile(path.join(root, "data", "verified-pcso-draw-results-snapshot.csv"), "utf8");
const scheduleCsv = await readFile(path.join(root, "data", "pcso-draw-schedule.csv"), "utf8");
const results = parseCsv(resultsCsv);
const schedule = parseCsv(scheduleCsv);

if (results.length !== 13_457) throw new Error(`Expected 13,457 results; found ${results.length}`);
if (schedule.length !== 9) throw new Error(`Expected 9 schedule rows; found ${schedule.length}`);

const dates = results.map(({ draw_date: drawDate }) => drawDate).sort();
const resultPayload = {
  apiVersion: "1.0.0",
  datasetVersion: "2.1.0",
  fixedSnapshot: true,
  snapshotDate,
  recordCount: results.length,
  coverage: { start: dates[0], end: dates.at(-1) },
  disclaimer: "Independent historical snapshot; not an official PCSO database and not a prediction service.",
  methodology: "https://lottolensph.com/research/pcso-results-data-coverage",
  results,
};
const schedulePayload = {
  apiVersion: "1.0.0",
  datasetVersion: "2.1.0",
  fixedSnapshot: true,
  snapshotDate,
  recordCount: schedule.length,
  disclaimer: "Normal draw windows only; holidays, special draws, and official advisories can change the schedule.",
  officialSource: "https://www.pcso.gov.ph/",
  schedule,
};

const resultJson = stableJson(resultPayload);
const scheduleJson = stableJson(schedulePayload);
const metadataPayload = {
  apiVersion: "1.0.0",
  datasetVersion: "2.1.0",
  fixedSnapshot: true,
  snapshotDate,
  resultRecordCount: results.length,
  scheduleRecordCount: schedule.length,
  coverage: resultPayload.coverage,
  games: [...new Set(results.map(({ lottery_slug: slug }) => slug))].sort(),
  endpoints: {
    results: "https://remo65588-boop.github.io/lottolens-ph-public-data/api/v1/results.json",
    schedule: "https://remo65588-boop.github.io/lottolens-ph-public-data/api/v1/schedule.json",
    openapi: "https://remo65588-boop.github.io/lottolens-ph-public-data/api/openapi.yaml",
  },
  sha256: {
    resultsJson: sha256(resultJson),
    scheduleJson: sha256(scheduleJson),
    sourceResultsCsv: sha256(resultsCsv),
    sourceScheduleCsv: sha256(scheduleCsv),
  },
  documentation: "https://remo65588-boop.github.io/lottolens-ph-public-data/api/",
  methodology: "https://lottolensph.com/research/pcso-results-data-coverage",
  license: "https://creativecommons.org/licenses/by/4.0/",
};

await mkdir(outputDirectory, { recursive: true });
await writeFile(path.join(outputDirectory, "results.json"), resultJson);
await writeFile(path.join(outputDirectory, "schedule.json"), scheduleJson);
await writeFile(path.join(outputDirectory, "metadata.json"), stableJson(metadataPayload));

console.log(`Built static API: ${results.length} result rows, ${schedule.length} schedule rows, ${dates[0]} to ${dates.at(-1)}`);
