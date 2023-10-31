/* sophisticated_code.js */

// This code is an example of a complex and elaborate web application that allow users to create and manage a to-do list.
// It includes features such as adding tasks, marking tasks as completed, filtering tasks, and deleting tasks.

// Task class to represent individual tasks
class Task {
    constructor(id, name, completed) {
        this.id = id;
        this.name = name;
        this.completed = completed;
    }
}

// TaskManager class to manage and manipulate the list of tasks
class TaskManager {
    constructor() {
        this.tasks = [];
    }

    // Method to add a new task
    addTask(name) {
        const newTask = new Task(Date.now(), name, false);
        this.tasks.push(newTask);
    }

    // Method to mark a task as completed
    completeTask(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = true;
        }
    }

    // Method to filter tasks by completion status
    filterTasks(completed) {
        return this.tasks.filter(task => task.completed === completed);
    }

    // Method to delete a task
    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
}

// Create an instance of TaskManager
const taskManager = new TaskManager();

// Add tasks
taskManager.addTask("Task 1");
taskManager.addTask("Task 2");
taskManager.addTask("Task 3");

// Complete a task
taskManager.completeTask(taskManager.tasks[0].id);

// Filter completed tasks
const completedTasks = taskManager.filterTasks(true);

// Delete a task
taskManager.deleteTask(taskManager.tasks[1].id);

// Output the remaining tasks
console.log("Remaining Tasks:");
taskManager.tasks.forEach(task => console.log(task.name));

// Output the completed tasks
console.log("Completed Tasks:");
completedTasks.forEach(task => console.log(task.name));

// ... continue with more functionality, UI interactions, etc.