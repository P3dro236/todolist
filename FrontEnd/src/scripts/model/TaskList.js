import { Task } from  './Task.js';

export class TaskList{
    constructor(){
        this.local = document.querySelector("#taskList");
    }
    async getTaskList(){
        let totalTasks = 0
        let finishedTasks = 0
        let unFinishedTasks = 0

        this.local.innerHTML = "";
        await fetch('http://localhost:8080/task')
        .then(response => response.json())
        .then(data => {
            const tasks = data.map(item => new Task(item.id, item.name, item.priority, item.finished));
            tasks.forEach((task) =>{
                this.local.append(task.createElement())
                totalTasks++
                if(task.finished){
                    finishedTasks++
                } else{
                    unFinishedTasks++
                }
            })
            document.querySelector("#totalTasks").innerHTML = totalTasks
            document.querySelector("#finishedTasks").innerHTML = finishedTasks  
            document.querySelector("#unFinishedTasks").innerHTML = unFinishedTasks

        })
    }

}