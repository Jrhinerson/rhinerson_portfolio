import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
    faChevronRight = faChevronRight;
    constructor(private viewportScroller: ViewportScroller) {}

    scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);}
}
