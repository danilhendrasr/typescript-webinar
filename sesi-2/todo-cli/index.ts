import { readData, writeData } from "./utils.mjs";
import { v4 as uuidv4 } from "uuid";

const command = process.argv[2];

switch (command) {
    case "list": {
        const data = readData();
        for (const task of data) {
            console.log("ID: ", task.id);
            console.log("Title: ", task.title);
            console.log("Description: ", task.description);
            console.log("Status: ", task.status);
        }
        break;
    }

    case "addNew": {
        if (process.argv.length < 4) {
            console.error("Please insert valid data.");
            process.exit(1);
        }

        const title = process.argv[3];
        const description = process.argv[4];

        const newTask = {
            id: uuidv4(),
            title: title,
            description: description,
            status: "open",
        };

        const tasks = readData();
        tasks.push(newTask);
        writeData(JSON.stringify(tasks));
        console.log("New task inserted.");
        break;
    }

    case "update": {
        if (process.argv.length < 4) {
            console.error("Please provide task ID.");
            process.exit(1);
        }

        const tasks = readData();
        const targetTaskIdx = tasks.findIndex(
            (task) => task.id === process.argv[3]
        );

        if (targetTaskIdx === -1) {
            console.error(
                "Task with ID: " + process.argv[3] + " cannot be found."
            );
            process.exit(1);
        }

        const title = process.argv[4];
        const description = process.argv[5];
        const status = process.argv[6];

        if (title && title !== "null") {
            tasks[targetTaskIdx].title = title;
        }

        if (description && description !== "null") {
            tasks[targetTaskIdx].description = description;
        }

        if (status && status !== "null") {
            tasks[targetTaskIdx].status = status;
        }

        writeData(JSON.stringify(tasks));
        console.log("Successfully updated a task with ID: " + process.argv[3]);
        break;
    }

    case "delete": {
        if (process.argv.length < 4) {
            console.error("Please provide task ID.");
            process.exit(1);
        }

        const tasks = readData();
        const targetTaskIdx = tasks.findIndex(
            (task) => task.id === process.argv[3]
        );

        if (targetTaskIdx === -1) {
            console.error(
                "Task with ID: " + process.argv[3] + " cannot be found."
            );
            process.exit(1);
        }

        tasks.splice(targetTaskIdx, 1);
        writeData(JSON.stringify(tasks));
        console.log("Task deleted succesfully.");

        break;
    }

    default:
        console.log("Command not recognized.");
}
