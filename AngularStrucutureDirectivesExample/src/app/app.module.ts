import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToDoItemsComponent } from './to-do-items/to-do-items.component';
import { MyAppInfoComponent } from './my-app-info/my-app-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoItemsComponent,
    MyAppInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
