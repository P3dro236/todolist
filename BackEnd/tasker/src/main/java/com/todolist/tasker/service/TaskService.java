package com.todolist.tasker.service;

import com.todolist.tasker.model.Task;
import com.todolist.tasker.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public Task createTask(Task task){
        if(task.getName().isEmpty() || task.getName() == null){
            throw new IllegalArgumentException("Erro no nome da task");
        }
        if(task.getPriority() > 3 || task.getPriority() < 1){
            throw new IllegalArgumentException("Erro na priorada da task");
        }
        return taskRepository.save(task);
    }

    public void deleteTaskById(Integer id){
        taskRepository.deleteById(id);
    }
    public Optional<Task> getTaskById(Integer id){
        return taskRepository.findById(id);
    }

    public List<Task> getAllTasks(){
        return taskRepository.findAll();
    }

    public void setFinishedDB(Task task){
        taskRepository.save(task);
    }
}
