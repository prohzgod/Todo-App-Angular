import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  constructor() { }
  toggleAddNote: boolean = false;
  addNote(): void{
    this.toggleAddNote = ! this.toggleAddNote;
    console.log(this.toggleAddNote)
  }

  ngOnInit(): void {
  }

}
