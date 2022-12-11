import express, { Request } from "express";
import { TaskObject, TaskStatus } from "./types";
import { v4 as uuidv4 } from "uuid";
import { DataSource } from "typeorm";
import { Task } from "./entities/task.entity";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const dataSource = new DataSource({
    type: "sqlite",
    database: "test.db",
    entities: [Task],
    logging: true,
    synchronize: true,
});

dataSource
    .initialize()
    .then(() => {
        console.log("Data source initialized.");
    })
    .catch(() => {
        console.error("Failed initializing data source.");
    });

app.get("/tasks", async function (_req, res) {
    const data = await dataSource.getRepository(Task).find();
    res.send({ data: data });
});

app.get("/tasks/:id", async function (req, res) {
    const targetTask = await dataSource
        .getRepository(Task)
        .findOneBy({ id: req.params.id });

    if (!targetTask) {
        res.status(404).send({
            message: `Task with ID: ${req.params.id} cannot be found.`,
        });
    }

    res.send({ data: targetTask });
});

app.post(
    "/tasks",
    async function (req: Request<any, any, Omit<TaskObject, "id">>, res) {
        const { title, description, status } = req.body;
        if (!title || !status) {
            res.status(400).send({ message: "Invalid body." });
        }

        const newTask: Task = {
            id: uuidv4(),
            title: title,
            description: description,
            status: TaskStatus.OPEN,
        };

        const insertedTask = await dataSource.getRepository(Task).save(newTask);

        res.send({
            data: insertedTask,
            message: "Successfully created the task.",
        });
    }
);

app.put(
    "/tasks/:id",
    async function (req: Request<any, any, Omit<TaskObject, "id">>, res) {
        const targetTask = await dataSource
            .getRepository(Task)
            .findOneBy({ id: req.params.id });

        if (!targetTask) {
            res.status(404).send({
                message: `Task with ID: ${req.params.id} cannot be found.`,
            });

            return;
        }

        const { title, description, status } = req.body;

        if (title) {
            targetTask.title = title;
        }

        if (description) {
            targetTask.description = description;
        }

        if (status) {
            targetTask.status = status;
        }

        try {
            await dataSource.getRepository(Task).save(targetTask);

            res.send({
                data: targetTask,
                message: `Successfully updated task with ID: ${req.params.id}`,
            });
        } catch {
            res.status(500).send({
                message:
                    "Something's wrong with us, try again in a few minutes.",
            });
        }
    }
);

app.delete("/tasks/:id", async function (req, res) {
    const targetTask = await dataSource
        .getRepository(Task)
        .findOneBy({ id: req.params.id });

    if (!targetTask) {
        res.status(404).send({
            message: `Task with ID: ${req.params.id} cannot be found.`,
        });

        return;
    }

    try {
        await dataSource.getRepository(Task).delete(req.params.id);
        res.send({ message: `Success.` });
    } catch {
        res.status(500).send({
            message: "Something's wrong with us, try again in a few minutes.",
        });
    }
});

app.listen(3000, () => {
    console.log("Server running at port 3000.");
});
