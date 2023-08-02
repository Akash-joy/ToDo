import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  newTask: string = '';
  tasks: { taskName: string, taskDate: Date, taskTime: Date }[] = [];
  editIndex: number | null = null;
  editedTask: string = '';
  editedDate: Date = new Date();
  editedTime: Date = new Date();

  addTask() {
    if (this.newTask !== '') {
      const existingIndex = this.tasks.findIndex(task => task.taskName === this.newTask);
      if (existingIndex !== -1) {
        this.tasks[existingIndex].taskName = this.newTask;
      } else {
        this.tasks.push({
          taskName: this.newTask,
          taskDate: new Date(this.editedDate), 
          taskTime: new Date(this.editedTime),
        });
      }

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

    this.editIndex = null;
    this.editedTask = '';
  }

  Delete(index: number) {
    this.tasks.splice(index, 1);
  }
}
