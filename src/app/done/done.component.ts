import { Component, OnInit,Input} from '@angular/core';
//import {CdkDropList} from '@angular/cdk';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {
  doneList = ['unit testing'];
  deleteArray = [];
  @Input('connectedTo')
  connectedTo: string[]
  

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

  ngOnInit() {
  }
}