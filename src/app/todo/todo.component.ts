import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  newTask: string = '';
  tasks: { taskName: string; taskDate: Date; taskTime: Date }[] = [];
  editIndex: number | null = null;
  editedTask: string = '';
  editedDate: Date = new Date();
  editedTime: Date = new Date();

  constructor() {
    this.loadTasksFromLocalStorage();
  }

  loadTasksFromLocalStorage() {
    const storedData = localStorage.getItem('task');
    if (storedData) {
      this.tasks = JSON.parse(storedData);
    }
  }

  saveTasksToLocalStorage() {
    localStorage.setItem('task', JSON.stringify(this.tasks));
  }

  addTask() {
    if (this.newTask !== '') {
      this.tasks.push({
        taskName: this.newTask,
        taskDate: new Date(this.editedDate),
        taskTime: new Date(this.editedTime),
      });

      this.saveTasksToLocalStorage();

      this.newTask = '';
      this.editIndex = null;
    }
  }

  Edit(index: number) {
    this.editIndex = index;
    this.editedTask = this.tasks[index].taskName;
    this.editedDate = new Date(this.tasks[index].taskDate);
    this.editedTime = new Date(this.tasks[index].taskTime);
  }

  SubmitEdit(index: number) {
    if (this.editedTask.length > 0) {
      this.tasks[index].taskName = this.editedTask;
    }
    this.tasks[index].taskDate = new Date(this.editedDate);
    this.tasks[index].taskTime = new Date(this.editedTime);

    this.saveTasksToLocalStorage();

    this.editIndex = null;
    this.editedTask = '';
  }

  Delete(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasksToLocalStorage();
  }
}
