import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-game',
  imports: [FormsModule],
  templateUrl: './main-game.component.html',
  styleUrl: './main-game.component.css'
})
export class MainGameComponent{
  public gameType: string = ''
  public userInput: string = ''
  public multiInput: number = 0
  public playerOne: string = ''
  public winner: string = ''
  public playerTwo: string = ''
  public results: string = ''
  constructor(private readonly route: ActivatedRoute, private readonly changeDetector: ChangeDetectorRef) {
    this.route.url.subscribe( params => {
        this.gameType = params[1].toString()
      }
    )
  }

  startGame() {
    if(this.gameType === 'single') {
      this.singlePlayer()
    } else {
      this.multiPlayer()
    }
  }

  singlePlayer() {
    const cpu = Math.floor(Math.random() * 3) + 1
    console.log(cpu)
    this.winningFormula(parseInt(this.userInput), cpu)
  }

  multiPlayer() {
    this.winningFormula(parseInt(this.userInput), this.multiInput)
  }

  winningFormula(user: number, cpu: number) {
    if(!this.playerTwo){
      this.playerTwo = 'Computer'
    }
    switch(user) {
      case 1:
        if(cpu === 1) {
          this.winner = 'Tie'
          this.results = `Both selected Rock`
        } else if(cpu === 2) {
          this.winner = `${this.playerTwo} Has won`
          this.results = `${this.playerOne} selected Rock and ${this.playerTwo} selected Paper`
        } else {
          this.winner = `${this.playerOne} Has won`
           this.results = `${this.playerOne} selected Rock and ${this.playerTwo} selected Scissors`
        }
        break
      case 2:
        if(cpu === 1) {
          this.winner = `${this.playerOne} Has won`
           this.results = `${this.playerOne} selected paper and ${this.playerTwo} selected Rock`
        } else if(cpu === 2) {
          this.winner = 'Tie'
           this.results = `Both selected paper`
        } else {
          this.winner = `${this.playerTwo} Has won`
           this.results = `${this.playerOne} selected paper and ${this.playerTwo} selected scissors`
        }
        break
      case 3:
        if(cpu === 1) {
          this.winner = `${this.playerTwo} Has won`
           this.results = `${this.playerOne} selected scissors and ${this.playerTwo} selected Rock`
        } else if(cpu === 2) {
          this.winner = `${this.playerOne} Has won`
          this.results = `${this.playerOne} selected scissors and ${this.playerTwo} selected paper`
        } else {
          this.winner = 'Tie'
           this.results = `Both selected scissors`
        }
        break
    }
    this.changeDetector.detectChanges()
  }
  resetGame() {
    this.userInput = ''
    this.multiInput = 0
    this.winner = ''
    this.results = ''
  }
}
