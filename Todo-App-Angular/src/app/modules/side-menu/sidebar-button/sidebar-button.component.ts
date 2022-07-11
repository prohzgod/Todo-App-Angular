import { Component, OnInit } from '@angular/core';
import { SidebarButtonService } from 'src/app/services/sidebar-button.service';
import { sidebar_button } from 'src/app/interface/sidebar_button';

@Component({
  selector: 'app-sidebar-button',
  templateUrl: './sidebar-button.component.html',
  styleUrls: ['./sidebar-button.component.scss']
})
export class SidebarButtonComponent implements OnInit {

  constructor(private sidebarButtonService : SidebarButtonService) { }

  sidebarButtons: sidebar_button[] = []
  
  getSidebarButtons(): void{
    this.sidebarButtonService.getSidebarButtons().subscribe(sb => this.sidebarButtons = sb)
  }

  ngOnInit(): void {
    this.getSidebarButtons();
  }

}
