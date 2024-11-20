import { Task } from "./Task";
import { addDays, format } from "date-fns";

export let taskArray = JSON.parse(localStorage.getItem("task")) || [];

const taskLogic = (form) => {
    if (form) {
        let formData;
        formData = new FormData(form);
        formData = Object.fromEntries(formData);
        const taskSection = document.querySelector("#task-section");
        if (taskSection) {
            taskSection.appendChild(configData(formData));
        }
    };
};

function configData(data) {
    const taskSection = document.querySelector("#task-section");
    if (taskSection) {
        taskSection.innerHTML = "";
    }
    let task = new Task(data["title-task"], data["description-task"], data["duedate-task"], data["priority-task"]);
    taskArray.push(task);
    localStorage.setItem("task", JSON.stringify(taskArray));
    return renderTaks(taskArray);
}

export function renderTaks(taskArray) {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    taskArray.forEach((task, index) => {
        const taskCard = document.createElement("div");
        
        const titleP = document.createElement("p");
        titleP.textContent = task._title;
        taskCard.appendChild(titleP);

        const descriptionP = document.createElement("p");
        descriptionP.textContent = task._description;
        taskCard.appendChild(descriptionP);
        

        const dueDateP = document.createElement("p");
        let storeDate = new Date(task._dueDate);
        storeDate = format(addDays(storeDate, 1), "MMM d");
        dueDateP.textContent = storeDate;
        taskCard.appendChild(dueDateP);

        const priorityP = document.createElement("p");
        priorityP.textContent = task._priority;
        if (task._priority == "very-important"){
            priorityP.textContent = "Very important";
        }
        taskCard.appendChild(priorityP);

        const buttonComplete = document.createElement("button");
        buttonComplete.textContent = "Task Completed";
        taskCard.appendChild(buttonComplete);


        buttonComplete.addEventListener("click", () => {
            taskArray.splice(index, 1);
            localStorage.setItem("task", JSON.stringify(taskArray));
            taskCard.remove();
        });
        
        taskContainer.appendChild(taskCard);
    });
    return taskContainer;
}

export {
    taskLogic,
}