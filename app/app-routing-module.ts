import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }  from './components/app.component';
import { UserPanelComponent } from './components/userpanel.component';
import { DashboardComponent } from './components/dashboard.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}