import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { OtherComponent } from './other/other.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {path:'**',component:Page404Component},
  {path:'',redirectTo:'child',pathMatch:'full'},
  {path:'child',component:ChildComponent},
  {path:'other',component:OtherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
