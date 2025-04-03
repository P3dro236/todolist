import { TaskList } from "../model/TaskList.js";

export const addTask = document.querySelector("#addTask");
export const taskInput = document.querySelector("#taskInput");
export const prioritySelect = document.querySelector("#prioritySelect");
export const filterBtn = document.querySelector("#filterBtn");

export const deleteButtonArray = document.querySelectorAll("task-actions .btn-danger");
export const checkBoxArray = document.querySelectorAll(".task-check");

export const taskList = new TaskList;