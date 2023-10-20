import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChildComponent } from './child/child.component';
import { OtherComponent } from './other/other.component';
import { FormsModule } from '@angular/forms';
import { MypipePipe } from './mypipe.pipe';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
   ChildComponent,
   OtherComponent,
   MypipePipe,
   Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
