import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainWrapperComponent} from './new-comp/main-wrapper/main-wrapper.component';

const routes: Routes = [
  // { path: 'home', component:  },
  // { path: 'questions', component: PageWrapperComponent },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: MainWrapperComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
