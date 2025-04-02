export class Task{
    constructor(id, name, priority, finished){
        this.id = id;
        this.name = name
        this.priority = priority;
        this.finished = finished;
    }
    createElement(){
        let finished = this.finished;
        let priority;
        switch (this.priority) {
            case 1: priority = `<span class="priority bg-success">Prioridade baixa</span>`; break;
            case 2: priority = `<span class="priority bg-warning">Prioridade média</span>`; break;
            case 3: priority = `<span class="priority bg-danger">Prioridade alta</span>`; break;
        }
        let finishedClass = finished ? "completed" : "";
        let isChecked = finished ? "checked" : "";
        const template = document.createElement('template');
        template.innerHTML = `
            <li class="task-item ${finishedClass}">
            <div class="task-content">
                <input type="checkbox" class="task-check" id="task${this.id}" ${isChecked}>
                <label for="task${this.id}" class="task-label">
                <span class="task-text">${this.name}</span>
                <span class="task-priority">${priority}</span>
                </label>
            </div>
            <div class="task-actions">
                <button class="btn btn-danger" title="Remover tarefa" value="${this.id}">
                <i class="bi bi-trash"></i>
                </button>
            </div>
            </li>`;
        return template.content.firstElementChild;
    }
}

