import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AssesReportsComponent } from './asses-reports/asses-reports.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HomePageComponent } from './home-page/home-page.component';

import { GraphComponent } from './graph/graph.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: AssesReportsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'users',
    component: AdminPanelComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'graph',
    component: GraphComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
