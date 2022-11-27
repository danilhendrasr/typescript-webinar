import { program } from "commander";
import { listTasks } from "./commands/list.mjs";

program.command("list").description("List all tasks.").action(listTasks);

program
    .command("add")
    .description("Add new task")
    .action(() => console.log("Add new task."));

program
    .command("update")
    .description("Update a task.")
    .action(() => console.log("update"));

program
    .command("delete")
    .description("Delete a task")
    .action(() => console.log("Delete a task"));

program.parse();
