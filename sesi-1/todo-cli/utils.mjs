import { readFileSync } from "fs";

export function readJSONData() {
    return JSON.parse(readFileSync("./data.json"));
}
