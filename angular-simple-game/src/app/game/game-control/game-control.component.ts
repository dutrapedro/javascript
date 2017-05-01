import { Component, OnInit } from '@angular/core';
import { RandomNumber } from '../model/random-number.model';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  MIN_RANDOM = 0;
  MAX_RANDOM = 100;
  generatedNumbers = [];
  interval = null;
  startBlocked = false;
  

  startGame() {
    this.startBlocked = true;
    this.interval = setInterval( () => {
      this.generatedNumbers.push( new RandomNumber(this._nextRandom()) );
    }, 2000);
  }

  stopGame() {
    if(!this.interval) return alert('Game is stopped!');
    this.startBlocked = false;
    return clearInterval(this.interval);
  }

  _nextRandom() {
    return Math.floor(Math.random() * ((this.MAX_RANDOM + 1) - this.MIN_RANDOM)) + this.MIN_RANDOM;
  }

  ngOnInit() {
  }

}
