const renderDomMain = () => {
    const app = document.createElement("div");

    // Render Title
    const title = document.createElement("h1");
    title.textContent = "Today Tasks";
    app.appendChild(title);

    // Render Site Container 
    const siteContainer = document.createElement("div");
    siteContainer.id = "site-container";
    app.appendChild(siteContainer);
    // Add Form and Taks
    const taskSection = document.createElement("div");
    taskSection.id = "task-section";
    siteContainer.appendChild(renderForm()).appendChild(taskSection);

    return app;
}


function renderForm () {
    const form = document.createElement("div");
    form.innerHTML = `
    <form id="task-form">
        <div class="form-label">
            <input type="text" name="title-task" placeholder="Title" id="title-task required">
        </div>

        <div class="form-label">
            <input type="text" name="description-task" placeholder="Description" id="description-task required">
        </div>

        <div class="form-label">
            <input type="date" name="duedate-task" id="duedate-task" required>
        </div>

        <div class="form-label">
            <select name="priority-task" id="priority-task" required>
                <option value="" selected disabled>Select Priority...</option>
                <option value="normal">Normal</option>
                <option value="important">Important</option>
                <option value="very-important">Very important</option>
            </select>
        </div>

        <div class="form-label">
            <input type="submit" value="Add Task" id="add-task">
        </div>
    </form>
    `
    return form;
}
export {
    renderDomMain,
}