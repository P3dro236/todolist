import { taskList } from './repository/Repository.js'
import { addTask } from './repository/Repository.js'
import { postTask } from './controller/taskControler.js'

document.addEventListener("DOMContentLoaded", () =>{
    taskList.getTaskList();

    addTask.addEventListener("click", () =>{
        postTask()
    })
})
