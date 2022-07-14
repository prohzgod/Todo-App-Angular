import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoApiService } from 'src/app/services/todo-api.service';
import { TODO_APIS } from 'src/app/interface/todo-apis';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  url = 'http://localhost:8080/api/todos/';
  listTodo: TODO_APIS[] = [];
  todo: TODO_APIS = { id: 0, title: '', description: '' };
  displayedColumns: string[] = ['id', 'title', 'description'];
  dataSource = new MatTableDataSource(this.listTodo);

  constructor(private api: TodoApiService) {}

  ngOnInit(): void {
    this.api.getListOfGroup(this.url).subscribe(
      (data) => {
        this.listTodo = data;
        console.log(this.listTodo);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
