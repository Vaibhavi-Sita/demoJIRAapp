import { Component, OnInit,Input} from '@angular/core';
//import {CdkDropList} from '@angular/cdk';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {
  backlogList = ['set password', 'UI changes', 'check text fields'];
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