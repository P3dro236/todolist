package com.todolist.tasker.controller;

import com.todolist.tasker.model.Task;
import java.util.List;
import com.todolist.tasker.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/task")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @GetMapping
    public List<Task> getAllTasks(){
        return taskService.getAllTasks();
    }

    @PostMapping
    public Task createTask(@RequestBody Task task){
        return taskService.createTask(task);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Integer id){
        taskService.deleteTaskById(id);
    }

    @PutMapping("/{id}")
    public void setFinished(@PathVariable Integer id){
        Task task = taskService.getTaskById(id)
                .orElseThrow(() -> new IllegalArgumentException("Task não existe"));
        task.setFinished(!task.isFinished());
        taskService.setFinishedDB(task);
    }
}
