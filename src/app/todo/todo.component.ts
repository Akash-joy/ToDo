import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
   newTask:string ='';
   currentDate: Date;
  tasks: string[] = [];
  editIndex: number | null = null;
  editedTask: string = ''; 
  constructor() {
    this.currentDate = new Date(); 
  }
  addTask() {   
      const existingIndex = this.tasks.indexOf(this.newTask);
      if (existingIndex !== -1) {
        this.tasks[existingIndex] = this.newTask;
      } else {
        this.tasks.push(this.newTask);
      }
      this.newTask ='';
      this.editIndex = null; 
    
  }

  Edit(index: number) { 
    this.editIndex = index;
    this.editedTask = this.tasks[index]; 
  }

  SubmitEdit(index: number) {
    
      this.tasks[index] = this.editedTask; 
    
    this.editIndex = null;
    this.editedTask = ''; 
  }

  Delete(index: number) {
    this.tasks.splice(index, 1);
  }
}
