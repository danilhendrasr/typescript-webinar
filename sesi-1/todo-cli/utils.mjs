import { readFileSync, writeFileSync } from "fs";
import path from "path";

export function readJSONData() {
    return JSON.parse(readFileSync("./data.json"));
}

export function writeData(data) {
    const toWrite = JSON.stringify(data);
    writeFileSync(path.resolve("./data.json"), toWrite);
}
