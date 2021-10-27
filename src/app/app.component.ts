import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

//import { _appIdRandomProviderFactory } from '@angular/core/src/application_tokens';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newTask;
  deleteArray = [];
  tasks = [];
  backlogList = ['set password', 'UI changes', 'check text fields'];
  inProgressList = [];
  doneList = [];
  

  public addToList() {
    if (this.newTask == '') {
    } else {
      this.backlogList.push(this.newTask);
      this.newTask = '';
    }
  }
  

  drop(event: CdkDragDrop<string[]>) {
    // console.log(event)
    if (event.container.id === 'delete') {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.deleteArray.splice(1);
    } else {
      if (event.previousContainer.id === event.container.id) {
        moveItemInArray(
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      } else {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      }
    }
  }
  onEntered(enter) {
    console.log('ee', enter);
  }
}
