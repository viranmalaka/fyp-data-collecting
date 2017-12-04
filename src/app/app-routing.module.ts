import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageComponent} from './components/questions/page/page.component';
import {FormWrapperComponent} from './components/questions/form-wrapper/form-wrapper.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'questions', component: FormWrapperComponent,
    children : [
      { path: '', redirectTo: '0', pathMatch: 'full' },
      { path: ':page_no', component: PageComponent }
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
