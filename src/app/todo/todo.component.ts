import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  newTask: string = '';
  tasks: string[] = [];
  editIndex: number | null = null;
  editedTask: string = ''; // Variable to store the edited value

  addTask() {
    if (this.newTask.trim() !== '') {
      const existingIndex = this.tasks.indexOf(this.newTask);

      if (existingIndex !== -1) {
        this.tasks[existingIndex] = this.newTask;
      } else {
        this.tasks.push(this.newTask);
      }

      this.newTask = '';
      this.editIndex = null; // Reset editIndex to avoid confusion when adding a new task
    }
  }

  Edit(index: number) {
    this.editIndex = index;
    this.editedTask = this.tasks[index]; // Store the original task value to the editedTask variable
  }

  SubmitEdit(index: number) {
    if (this.editedTask.trim() !== '') {
      this.tasks[index] = this.editedTask; // Update the task value in the array
    }
    this.editIndex = null;
    this.editedTask = ''; // Clear the editedTask variable
  }

  Delete(index: number) {
    this.tasks.splice(index, 1);
  }
}
