import { Component, OnInit } from '@angular/core';
import { todo } from 'src/app/interface/todo';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todo: todo[] = [];

  constructor(private todoService: TodoService) { }
  addNote(): void{
    this.todoService.getTodo().subscribe(td => this.todo = td)
  }
  ngOnInit(): void {
    this.addNote();

  }

}
