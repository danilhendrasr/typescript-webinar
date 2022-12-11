import { elements } from "./constants";
import { Task } from "./types";
import axios from "axios";

window.onload = async function () {
    const tasksData = await axios.get("http://localhost:3000/tasks");

    for (const task of tasksData.data.data) {
        const newTaskEl = document.createElement("li");
        newTaskEl.innerText = task.title + " ";
        newTaskEl.setAttribute("class", "task-item");
        newTaskEl.setAttribute("data-task-id", task.id);

        const deleteTaskBtn = document.createElement("button");
        deleteTaskBtn.innerText = "x";
        deleteTaskBtn.setAttribute("class", "delete-task-btn");
        deleteTaskBtn.setAttribute("data-task-id", task.id);

        deleteTaskBtn.addEventListener("click", async function () {
            const targetTaskIdx = tasksData.data.data.findIndex(
                (_task: Task) => _task.id === task.id
            );
            if (targetTaskIdx === -1) {
                alert("Task does not exists.");
                return;
            }

            await axios.delete(`http://localhost:3000/tasks/${task.id}`);

            const taskElements = document.getElementsByClassName("task-item");
            elements.tasksContainer?.removeChild(taskElements[targetTaskIdx]);
        });

        newTaskEl.appendChild(deleteTaskBtn);

        elements.tasksContainer?.appendChild(newTaskEl);
    }

    elements.newTaskBtn?.addEventListener("click", function () {
        if (elements.newTaskFrmWrapper) {
            elements.newTaskFrmWrapper.style.display = "block";
        }
    });

    elements.newTaskFrmCancelBtn?.addEventListener("click", function () {
        if (elements.newTaskFrmWrapper) {
            elements.newTaskFrmWrapper.style.display = "none";
        }
    });

    elements.newTaskFrm?.addEventListener("submit", async function (e) {
        e.preventDefault();
        const title = elements.newTaskTitle.value;
        const description = elements.newTaskDescription.value;

        if (!title) {
            alert("New task requires a title.");
            return;
        }

        await axios.post("http://localhost:3000/tasks", {
            title: title,
            description: description,
        });

        const newTaskEl = document.createElement("li");
        newTaskEl.innerText = title;
        elements.tasksContainer?.appendChild(newTaskEl);

        alert("New task is successfully added.");
    });
};
