import { readJSONData, writeData } from "../utils.mjs";

export function updateTask(id, title, description) {
    const data = readJSONData();
    const targetTaskIdx = data.findIndex((task) => task.id === id);

    if (targetTaskIdx === -1) throw new Error("Task does not exists.");
    if (title && title !== "undefined") data[targetTaskIdx].title = title;
    if (description && description !== "undefined")
        data[targetTaskIdx].description = description;

    writeData(data);
}
