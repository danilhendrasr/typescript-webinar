import { readData, writeData } from "../utils.mjs";

export function deleteTask(id) {
    const tasks = readData();
    const targetTaskIdx = tasks.findIndex((task) => task.id === id);

    if (targetTaskIdx === -1) {
        console.error("Task with ID: " + id + " cannot be found.");
        process.exit(1);
    }

    tasks.splice(targetTaskIdx, 1);
    writeData(tasks);
}
