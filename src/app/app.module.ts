import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { authEffects } from './store/auth.effects';
import { getAssessments, login, getGraph, getUsers } from './store/auth.reducers';
import { IAuthAppState } from './interfaces/responses.interfaces';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { AssesReportsComponent } from './components/asses-reports/asses-reports.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { GraphComponent } from './components/graph/graph.component';
import { TokenInterceptor } from './services/addToken.interceptor';

const loginReducerMap: ActionReducerMap<IAuthAppState> = {
  currentUser: login,
  listOfAssessments: getAssessments,
  userGraph: getGraph,
  listOfUsers: getUsers,
};

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    AssesReportsComponent,
    AdminPanelComponent,
    GraphComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(loginReducerMap),
    EffectsModule.forRoot([authEffects]),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
