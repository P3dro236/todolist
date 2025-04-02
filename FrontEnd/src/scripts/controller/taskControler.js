import { AddTask } from '../model/AddTask.js';
import { taskInput, prioritySelect } from "../repository/Repository.js";
import { taskList } from '../repository/Repository.js';
export async function postTask() {
    try {
        const addedTask = new AddTask(
            taskInput.value,
            prioritySelect.value,
        );
        await addedTask.postTask();
        await taskList.getTaskList();
    } catch (error) {
        console.error("Erro durante operação de tarefas:", error);
    }
}