import { taskList, addTask, taskInput, filterBtn } from './repository/Repository.js'
import { postTask } from './controller/taskControler.js'
import { applyFilter } from './service/Filter.js'
document.addEventListener("DOMContentLoaded", () =>{
    taskList.getTaskList();

    addTask.addEventListener("click", () =>{
        postTask()
    })
    taskInput.addEventListener("keypress", (event) =>{
        if(event.key === "Enter"){
            postTask()
        }
    })
    document.querySelector("#taskList").addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-danger") || 
            event.target.closest(".btn-danger")) {
            const id = event.target.closest(".btn-danger").value;
            
            taskList.deleteTask(id).then(() => {
                taskList.getTaskList();
            })
        }
        if (event.target.type === "checkbox") {
            const id = event.target.value;
            taskList.updateFinishedTask(id).then(() => {
                taskList.getTaskList();
            })
        }
    });
    document.querySelectorAll('.dropdown-item[data-filter]').forEach(filterItem => {
        filterItem.addEventListener('click', function(e) {
            e.preventDefault();
            const filterValue = this.getAttribute('data-filter');
            document.querySelector('#filterBtn').textContent = this.textContent;
            applyFilter(filterValue);
        });
    });
})
