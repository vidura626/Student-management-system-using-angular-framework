import {Component} from '@angular/core';

@Component({
  selector: 'wije-card-nav',
  templateUrl: './card-nav.component.html',
  styleUrls: ['./card-nav.component.css']
})
export class CardNavComponent {
  scrollableElement!: HTMLElement;
  constructor() {
    this.scrollableElement = document.querySelector('.scrollable-container') as HTMLElement;
    console.log(this.scrollableElement);
  }

  onDragEnd($event: any) {

  }

  onDragStarted(event: any) {
    console.log(this.scrollableElement);
    console.log(event)
  }
}


