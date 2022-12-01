import { deleteTask } from "./commands/deleteTask.mjs";
import { newTask } from "./commands/newTask.mjs";
import { listTasks } from "./commands/listTasks.mjs";
import { updateTask } from "./commands/updateTask.mjs";

const command = process.argv[2];

switch (command) {
    case "list": {
        listTasks();
        process.exit(0);
    }

    case "newTask": {
        if (process.argv.length < 4) {
            console.error("Please provide complete arguments.");
            process.exit(1);
        }

        const newlyCreatedTask = newTask(process.argv[3], process.argv[4]);

        console.log("Success creating a new task.");
        console.log(newlyCreatedTask);

        process.exit(0);
    }

    case "updateTask": {
        if (process.argv.length < 4) {
            console.error("Please give the ID of the task to be deleted.");
            process.exit(1);
        }

        const targetTaskId = process.argv[3];
        const title = process.argv[4];
        const description = process.argv[5];
        const status = process.argv[6];

        const updatedTask = updateTask(targetTaskId, {
            title,
            description,
            status,
        });

        console.log("Success updating task with ID: ", targetTaskId);
        console.log("New Data: ", updatedTask);

        process.exit(0);
    }

    case "deleteTask": {
        if (process.argv.length < 4) {
            console.error("Please give the ID of the task to be deleted.");
            process.exit(1);
        }

        deleteTask(process.argv[3]);
        console.log("Success deleting task with ID: " + process.argv[3]);

        process.exit(0);
    }

    default:
        console.error("Command not recognized.");
}
