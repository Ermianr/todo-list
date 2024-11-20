import "./normalizer.css";
import "./styles.css";
import { renderDomMain } from "./scripts/render-dom";
import { taskLogic, renderTaks, taskArray} from "./scripts/task-logic";

const main = document.querySelector("#content");

const renderApp = () => {
    main.appendChild(renderDomMain());

    const taskSection = document.querySelector("#task-section");
    if (taskSection) {
        taskSection.appendChild(renderTaks(taskArray));
    } 
    const form = document.querySelector("#task-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        taskLogic(form);
    });

}

renderApp();


