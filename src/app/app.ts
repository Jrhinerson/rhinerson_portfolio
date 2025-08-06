import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { ViewportScroller } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage, FontAwesomeModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'rhinerson_portfolio';
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faFile = faFile;
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);}
}
