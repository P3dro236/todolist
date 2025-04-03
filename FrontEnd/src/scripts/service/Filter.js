export function applyFilter(filterValue) {
    const taskItems = document.querySelectorAll('.task-item');
    
    taskItems.forEach(item => {
        const isCompleted = item.classList.contains('completed');
        const priorityEl = item.querySelector('.priority');
        let priority = null;
        
        // Determina a prioridade da tarefa
        if (priorityEl) {
            if (priorityEl.classList.contains('bg-success')) priority = '1';
            else if (priorityEl.classList.contains('bg-warning')) priority = '2';
            else if (priorityEl.classList.contains('bg-danger')) priority = '3';
        }
        
        // Aplica o filtro com base no critério
        switch (filterValue) {
            case 'all':
                item.style.display = '';
                break;
                
            case 'completed':
                item.style.display = isCompleted ? '' : 'none';
                break;
                
            case 'pending':
                item.style.display = !isCompleted ? '' : 'none';
                break;
                
            case 'priority-1':
                item.style.display = priority === '1' ? '' : 'none';
                break;
                
            case 'priority-2':
                item.style.display = priority === '2' ? '' : 'none';
                break;
                
            case 'priority-3':
                item.style.display = priority === '3' ? '' : 'none';
                break;
                
            default:
                item.style.display = '';
        }
    });
}