import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';
import { TodoService } from 'src/app/services/todo.service';
import { todoList } from 'src/app/interface/todo-list';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  constructor(private todoListService: TodoListService) {}
  
  state: number = NaN;
  todoLists: todoList[] = [];
  toggleAddNote: boolean = false;
  getTodoList(): void {
    this.todoListService
      .getTodoList()
      .subscribe((tdL) => (this.todoLists = tdL));
  }

  addNote(data:number): void{
    this.state=data
    this.toggleAddNote = ! this.toggleAddNote;
    console.log(this.toggleAddNote + `${data}  ${this.state}` )
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  ngOnInit(): void {
    this.getTodoList();
  }
}
