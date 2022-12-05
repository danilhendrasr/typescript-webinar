import { readFileSync, writeFileSync } from "fs";

export function readData() {
    return JSON.parse(readFileSync("./data.json"));
}

export function writeData(data) {
    writeFileSync("./data.json", data);
}
