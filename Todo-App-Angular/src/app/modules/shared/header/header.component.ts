import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
  constructor() {
    
  }
  name: string = "TA"

  ngOnInit(): void {
    this.name
  }

}
