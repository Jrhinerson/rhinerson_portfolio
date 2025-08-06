import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'rhinerson_portfolio';
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);}
}
