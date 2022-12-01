import { readFileSync, writeFileSync } from "fs";

// Read data from data.json
export function readData() {
    return JSON.parse(readFileSync("./data.json"));
}

// Write to data.json
export function writeData(data) {
    const toWrite = JSON.stringify(data);
    writeFileSync("./data.json", toWrite);
}
