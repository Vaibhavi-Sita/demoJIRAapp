import { Component, OnInit,Input} from '@angular/core';
//import {CdkDropList} from '@angular/cdk';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-inprogress',
  templateUrl: './inprogress.component.html',
  styleUrls: ['./inprogress.component.css']
})
export class InProgressComponent implements OnInit {
  inProgressList = ['update documentation', 'schedule meeting'];
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