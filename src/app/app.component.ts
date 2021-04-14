import { Component, VERSION, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList } from '@angular/cdk/drag-drop';

import { Board } from './models/board.model';
import { Column } from './models/column.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

  public board: Board = new Board('Test Board', [
    new Column('Primeira Etapa', '1', [
      {
        title: 'Lorem ipsum habitasse',
        content: "Lorem ipsum habitasse augue, per.",
        date: new Date()
      },
      {
        title: 'Lorem ipsum',
        content: "Lorem ipsum neque scelerisque, donec.",
        date: new Date()
      },
      {
        title: 'Curabitur primis',
        content: "Curabitur primis consectetur class, euismod.",
        date: new Date()
      },
    ]),
    new Column('Segunda Etapa', '2', [
      {
        title: 'Luctus malesuada',
        content: "Luctus malesuada commodo id, vehicula.",
        date: new Date()
      },
      {
        title: 'Diam molestie',
        content: "Diam molestie phasellus euismod, fringilla.",
        date: new Date()
      },
      {
        title: 'Nostra molestie',
        content: "Nostra molestie nulla habitant, habitasse.",
        date: new Date()
      },
      {
        title: 'Felis nisl',
        content: "Felis nisl aliquet ut, nibh.",
        date: new Date()
      },
    ]),
    new Column('Terceira Etapa', '3', [
      {
        title: 'Cubilia felis',
        content: "Cubilia felis netus mattis, tortor.",
        date: new Date()
      },
      {
        title: 'Nisl et inceptos',
        content: "Nisl et inceptos phasellus, condimentum.",
        date: new Date()
      },
    ]),
    new Column('Quarta Etapa', '4', [
      {
        title: 'Justo inceptos',
        content: "Justo inceptos venenatis diam, ad.",
        date: new Date()
      },
      {
        title: 'Non orci',
        content: "Non orci donec consequat, iaculis.",
        date: new Date()
      },
      {
        title: 'Cras rhoncus',
        content: "Cras rhoncus mi condimentum, orci.",
        date: new Date()
      },
    ])
  ]);


  constructor() {}

  public ngOnInit(): void {
    console.log(this.board);
  }

  public dropGrid(event: CdkDragDrop<string[]>): void {
    console.log('aqui', this.board);
    moveItemInArray(this.board.columns, event.previousIndex, event.currentIndex);
  }

  public drop(event: CdkDragDrop<string[]>): void {
    console.log('aqui', this.board);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }

}
