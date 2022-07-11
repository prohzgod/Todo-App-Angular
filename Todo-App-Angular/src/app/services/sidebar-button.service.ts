import { Injectable } from '@angular/core';
import { sidebar_button } from 'src/app/interface/sidebar_button';
import { SIDEBAR_BUTTON } from 'src/app/mock-data/mock-data';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarButtonService {

  constructor() { }
  getSidebarButtons(): Observable<sidebar_button[]>{
    const sidebarButtons = of(SIDEBAR_BUTTON)
    return sidebarButtons;
  }

}
