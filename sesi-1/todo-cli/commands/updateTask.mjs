import { readData, writeData } from "../utils.mjs";

export function updateTask(id, newTaskData) {
    const tasks = readData();
    const targetTaskIdx = tasks.findIndex((task) => task.id === id);

    if (targetTaskIdx === -1) {
        console.error("Task with ID: " + process.argv[3] + " cannot be found.");
        process.exit(1);
    }

    const targetTask = tasks[targetTaskIdx];

    if (newTaskData.title && newTaskData.title !== "null") {
        targetTask.title = newTaskData.title;
    }

    if (newTaskData.description && newTaskData.description !== "null") {
        targetTask.description = newTaskData.description;
    }

    if (
        newTaskData.status &&
        (newTaskData.status === "open" ||
            newTaskData.status === "in progress" ||
            newTaskData.status === "finished")
    ) {
        targetTask.status = newTaskData.status;
    }

    writeData(tasks);
    return targetTask;
}
