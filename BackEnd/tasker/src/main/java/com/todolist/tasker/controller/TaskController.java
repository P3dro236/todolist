package com.todolist.tasker.controller;

import com.todolist.tasker.model.Task;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.todolist.tasker.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<?> deleteTask(@PathVariable Integer id){
        taskService.deleteTaskById(id);
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> setFinished(@PathVariable Integer id){
        Task task = taskService.getTaskById(id)
                .orElseThrow(() -> new IllegalArgumentException("Task não existe"));
        task.setFinished(!task.isFinished());
        taskService.setFinishedDB(task);
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        return ResponseEntity.ok(response);
    }
}
