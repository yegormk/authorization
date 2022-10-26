import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssesReportsComponent } from './components/asses-reports/asses-reports.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { GraphComponent } from './components/graph/graph.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';


import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'assessments',
    component: AssesReportsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: AuthorizationComponent,
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
