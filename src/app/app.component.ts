import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Accessibility Showcase - Demonstration';
  showGifs: boolean=true;
  biggerButtons: boolean=false;
}
