
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  newTask: string = '';
  currentDate: Date;
  tasks: { taskName: string; taskDate: string; taskTime: string }[] = [];
  editIndex: number | null = null;
  editedTask: string = '';
  currentDateOnly: string = '';
  time: string = '';

  constructor() {
    this.currentDate = new Date();
    this.currentDateOnly = this.getCurrentDateOnly();
    this.time = this.getCurrentTime();
  }

  addTask() {
    const trimmedTask = this.newTask.trim();
    if (trimmedTask !== '') {
      const existingIndex = this.tasks.findIndex((task) => task.taskName === trimmedTask);
      if (existingIndex !== -1) {
        this.tasks[existingIndex].taskName = trimmedTask;
      } else {
        this.tasks.push({
          taskName: trimmedTask,
          taskDate: this.currentDateOnly,
          taskTime: this.time,
        });
      }

      this.newTask = '';
      this.editIndex = null;
    }
  }

  Edit(index: number) {
    this.editIndex = index;
    this.editedTask = this.tasks[index].taskName;
  }

  SubmitEdit(index: number) {
    if (this.editedTask.trim() !== '') {
      this.tasks[index].taskName = this.editedTask;
      
    }
    this.editIndex = null;
    this.editedTask = '';
  }

  Delete(index: number) {
    this.tasks.splice(index, 1);
  }

  getCurrentDateOnly(): string {
    const year = this.currentDate.getFullYear();
    const month = this.addLeadingZero(this.currentDate.getMonth() + 1);
    const day = this.addLeadingZero(this.currentDate.getDate());
    return `${year}-${month}-${day}`;
  }

  addLeadingZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  getCurrentTime() {
    const hours = this.addLeadingZero(this.currentDate.getHours());
    const minutes = this.addLeadingZero(this.currentDate.getMinutes());
    const seconds = this.addLeadingZero(this.currentDate.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
  }
}
