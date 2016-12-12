import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }  from './components/app.component';
import { UserPanelComponent } from './components/userpanel.component';
import { DashboardComponent } from './components/dashboard.component';
import { PresentationComponent } from './components/presentation.component';

const appRoutes: Routes = [
  { path: 'portfolio', component: DashboardComponent },
  { path: 'portfolio/:filter/:value', component: DashboardComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: '**', component: PresentationComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}