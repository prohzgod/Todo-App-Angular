import { Injectable } from '@angular/core';
import { sidebar_button } from 'src/sidebar_button';
import { SIDEBAR_BUTTON } from 'src/mock_data';
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
