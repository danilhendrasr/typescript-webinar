import { readData, writeData } from "../utils.mjs";
import { v4 as uuidv4 } from "uuid";

export function newTask(title, description) {
    const tasks = readData();
    const newTask = {
        id: uuidv4(),
        title: title,
        description: description ?? "",
        status: "open",
    };

    tasks.push(newTask);

    writeData(tasks);
    return newTask;
}
