import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageComponent} from './components/questions/page/page.component';
import {PageWrapperComponent} from './components/questions/page-wrapper/page-wrapper.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'questions', component: PageWrapperComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
