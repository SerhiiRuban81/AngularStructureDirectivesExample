import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToDoItemsComponent } from './to-do-items/to-do-items.component';
import { MyAppInfoComponent } from './my-app-info/my-app-info.component';
import { WorkWithStyleComponent } from './work-with-style/work-with-style.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoItemsComponent,
    MyAppInfoComponent,
    WorkWithStyleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
