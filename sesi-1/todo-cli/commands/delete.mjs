import { readJSONData, writeData } from "../utils.mjs";

export function deleteTask(id) {
    const data = readJSONData();
    if (data.findIndex((task) => task.id === id) === -1)
        throw new Error("Task does not exists.");
    writeData(data.filter((task) => task.id !== id));
}
