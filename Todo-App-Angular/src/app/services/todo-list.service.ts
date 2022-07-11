import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { todoList } from '../interface/todo-list';
import { TODO_LIST } from '../mock-data/todo-list-data';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor() {}
  getTodoList(): Observable<todoList[]> {
    const TodoListService = of(TODO_LIST);
    return TodoListService;
  }
}
