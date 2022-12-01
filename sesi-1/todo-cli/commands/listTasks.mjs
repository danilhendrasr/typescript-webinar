import { readData } from "../utils.mjs";

export function listTasks() {
    const tasks = readData();
    for (const task of tasks) {
        console.log("ID: ", task.id);
        console.log("Title: ", task.title);
        console.log("Description: ", task.description);
        console.log("Status: ", task.status);
        console.log("");
    }
}
