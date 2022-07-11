import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';
import { todoList } from 'src/app/interface/todo-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  constructor(private todoListService: TodoListService) { }

  todoLists : todoList[] = []
  getTodoList(): void{
    this.todoListService.getTodoList().subscribe(td => this.todoLists = td)
    
  }
  ngOnInit(): void {
    this.getTodoList();
    console.log(`Ad: ${this.todoListService}`)
  }

}
