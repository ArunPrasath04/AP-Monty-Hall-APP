import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SplitterModule } from 'primeng/splitter';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home-page',
  imports: [SplitterModule, ButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  splitRatio: number[] = [40, 60];
  showInstructions: boolean = false;

  constructor (private router : Router) {

  }

  navigateToMontyHall() {
    this.router.navigate(['/play']);
  }
}
