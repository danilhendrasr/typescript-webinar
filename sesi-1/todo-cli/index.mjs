import { program } from "commander";
import { addNewTask } from "./commands/add.mjs";
import { deleteTask } from "./commands/delete.mjs";
import { listTasks } from "./commands/list.mjs";
import { updateTask } from "./commands/update.mjs";

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
    .argument("<id>", "The ID of the task to be updated")
    .argument("[title]", "The new title, fill with undefined if not changed.")
    .argument("[description]", "The new description")
    .action((id, title, description) => updateTask(id, title, description));

program
    .command("delete")
    .description("Delete a task")
    .argument("<id>", "The ID of the task to be deleted.")
    .action((id) => deleteTask(id));

program.parse();
