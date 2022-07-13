import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { todo } from '../interface/todo';
import { TODO } from '../mock-data/todo-list-data';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  getTodo(): Observable<todo[]>{
    const TodoService = of(TODO);
    return TodoService;
  }
}
