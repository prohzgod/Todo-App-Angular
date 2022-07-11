import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './modules/projects/projects.component';
import { OverviewComponent } from './modules/overview/overview.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/overview', pathMatch: 'full'
  },
  {
    path: 'overview', component: OverviewComponent 
  },
  {
    path: 'projects', component: ProjectsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
