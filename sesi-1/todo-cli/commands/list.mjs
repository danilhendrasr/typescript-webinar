import { readJSONData } from "../utils.mjs";

export function listTasks() {
    const data = readJSONData();
    if (!data) console.log("No tasks exists.");
    console.log(data);
}
