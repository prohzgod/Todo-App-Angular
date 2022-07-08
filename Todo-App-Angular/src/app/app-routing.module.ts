import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { OverviewComponent } from './overview/overview.component';

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
