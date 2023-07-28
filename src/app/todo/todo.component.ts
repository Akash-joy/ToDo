import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  storelist: string[] = [];
  todolist: string = '';

  display() {
    this.storelist.push(this.todolist); 
    this.todolist = ''; 
   
  }
  delete(index:number){
    this.storelist.splice(index, 1);
  }
  edit(editvalue:number){
  
    console.log(editvalue)
    this.todolist=this.storelist[editvalue];
    this.delete(editvalue)
  }
}
