import { readJSONData, writeData } from "../utils.mjs";
import { v4 as uuidv4 } from "uuid";

export function addNewTask(title, description) {
    const data = readJSONData();
    const newTask = {
        id: uuidv4(),
        title: title,
        description: description,
    };

    data.push(newTask);
    writeData(data);
}
