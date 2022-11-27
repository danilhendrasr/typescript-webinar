import { program } from "commander";
import { addNewTask } from "./commands/add.mjs";
import { deleteTask } from "./commands/delete.mjs";
import { listTasks } from "./commands/list.mjs";

program.command("list").description("List all tasks.").action(listTasks);

program
    .command("add")
    .description("Add new task")
    .argument("<title>", "Title of the new task.")
    .argument("[description]", "Description of the new task.")
    .action((title, description) => addNewTask(title, description));

program
    .command("update")
    .description("Update a task.")
    .action(() => console.log("update"));

program
    .command("delete")
    .description("Delete a task")
    .argument("<id>", "The ID of the task to be deleted.")
    .action((id) => deleteTask(id));

program.parse();
