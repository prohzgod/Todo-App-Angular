import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  title = '.todo'
  isActive: boolean = false;

  constructor() { }

  checkActive():boolean {
    if(this.isActive) return true; else return false 
  }

  ngOnInit(): void {
    
  }

}
