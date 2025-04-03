export class AddTask{
    constructor(name, priority){
        this.name = name;
        this.priority = priority;
    }
    async postTask(){
        const endpoint = 'http://192.168.1.14:8080/task';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    name: this.name,
                    priority: this.priority
                }
            )
        };
    
        await fetch(endpoint, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao adicionar tarefa');
                }
                return response.json();
            })
            .then(data => {
                console.log('Tarefa adicionada:', data);
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    }
}