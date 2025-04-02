package com.todolist.tasker.model;

import jakarta.persistence.*;

import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotEmpty
    private String name;

    @NotEmpty
    private boolean finished;

    @NotEmpty
    private Integer priority;

    public Task(String name, Integer priority) {
        this.finished = false;
        this.name = name;
        this.priority = priority;
    }
    public Task(){

    }

    public Integer getId() {
        return id;
    }

    public Integer getPriority() {
        return priority;
    }

    public boolean isFinished() {
        return finished;
    }

    public String getName() {
        return name;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setFinished(boolean finished) {
        this.finished = finished;
    }

    public void setPriority(Integer priority) {
        this.priority = priority;
    }
}
