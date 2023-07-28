import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import {InputTextModule} from 'primeng-lts/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng-lts/button';
import {ListboxModule} from 'primeng-lts/listbox';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
  
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    BrowserAnimationsModule,
    ButtonModule,
    ListboxModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
