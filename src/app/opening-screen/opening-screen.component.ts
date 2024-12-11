import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-opening-screen',
  imports: [],
  templateUrl: './opening-screen.component.html',
  styleUrl: './opening-screen.component.css'
})
export class OpeningScreenComponent {
  constructor(private readonly route: Router){
  }

  selectSingle() {
    this.route.navigate(['/game-type', 'single']);
  }

  selectMultiplayer() {
    this.route.navigate(['/game-type', 'multi']);
  }
}
