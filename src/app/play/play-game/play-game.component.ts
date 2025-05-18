import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { PlayService } from './play-game.component.service';

@Component({
  selector: 'app-play-game',
  imports: [SharedModule],
  templateUrl: './play-game.component.html',
  styleUrl: './play-game.component.scss',
  providers: [PlayService]
})
export class PlayGameComponent {
    winCount: number = 0;
    loseCount: number = 0;
    isStarted: boolean = false;
    showResults: boolean = false;
    switchDoors: boolean | null = null;
    simulationCount: number = 0;

    constructor (private playService : PlayService) {

    }

    startPlay () {
        var model = {
          noOfSimulations: this.simulationCount,
          switchDoors: this.switchDoors ? true : false
        }
        this.playService.montyDecides(model).subscribe(res => {
          console.log(res);
          this.isStarted = true;
          this.showResults = true;
          this.winCount = res.winCount;
          this.loseCount = res.loseCount;
        })
    }

    playAgain () {
      this.isStarted = false;
      this.showResults = false;
      this.simulationCount = 0;
      this.switchDoors = null;

    }
}
