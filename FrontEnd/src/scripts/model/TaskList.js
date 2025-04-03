import { taskInput } from '../repository/Repository.js';
import { Task } from  './Task.js';

export class TaskList{
    constructor(){
        this.local = document.querySelector("#taskList");
    }
    async getTaskList(){
        // Captura altura atual antes de modificar
        const currentHeight = this.local.offsetHeight;
        
        // Aplica altura fixa durante a carga
        if (currentHeight > 0) {
            this.local.style.height = `${currentHeight}px`;
        }
        
        this.local.classList.add('loading');

        // Adiciona um indicador de carregamento
        this.local.innerHTML = '<li class="text-center py-3"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Carregando...</span></div></li>';
        
        await fetch('http://192.168.1.14:8080/task')
        .then(response => response.json())
        .then(data => {
            const fragment = document.createDocumentFragment();
            const tasks = data.map(item => new Task(item.id, item.name, item.priority, item.finished));
            tasks.sort((a, b) => a.id - b.id);
            
            let totalTasks = 0;
            let finishedTasks = 0;
            let unFinishedTasks = 0;
            
            tasks.forEach((task) =>{
                fragment.appendChild(task.createElement())
                totalTasks++
                if(task.finished){
                    finishedTasks++
                } else{
                    unFinishedTasks++
                }
            })
            
            // Substitui o conteúdo em uma única operação
            this.local.innerHTML = '';
            
            // Se não houver tarefas, mostre uma mensagem
            if (tasks.length === 0) {
                const emptyMessage = document.createElement('li');
                emptyMessage.className = 'text-center py-3 text-muted';
                emptyMessage.textContent = 'Nenhuma tarefa encontrada';
                fragment.appendChild(emptyMessage);
            }
            
            this.local.appendChild(fragment);
            
            document.querySelector("#totalTasks").innerHTML = totalTasks;
            document.querySelector("#finishedTasks").innerHTML = finishedTasks;  
            document.querySelector("#unFinishedTasks").innerHTML = unFinishedTasks;
            
            // Remova a altura fixa após um pequeno atraso
            setTimeout(() => {
                this.local.style.height = 'auto';
                this.local.classList.remove('loading');
            }, 50);
            
            taskInput.value = '';
        })
    }
    async deleteTask(toDelete){
        const endpoint = 'http://192.168.1.14:8080/task';
        const id = toDelete; 
        const response = await fetch(`${endpoint}/${id}`, {
            method: "DELETE"
        });
    }
    async updateFinishedTask(id){
        const endpoint = 'http://192.168.1.14:8080/task';
        const response = await fetch(`${endpoint}/${id}`, {
            method: "PUT"
        });
    }

}