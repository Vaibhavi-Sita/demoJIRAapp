import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DragDropModule  } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
//import { DoneComponent } from './done/done.component';
//import { HelloComponent } from './hello.component';
import { DoneComponent } from './done/done.component';
import { BacklogComponent } from './backlog/backlog.component';
import { InProgressComponent } from './inprogress/inprogress.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, DragDropModule ],
  declarations: [ AppComponent, DoneComponent, BacklogComponent, InProgressComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
