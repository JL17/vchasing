import { Component, OnInit } from '@angular/core';
import { Session } from '../../data/session';
import {FormControl, FormGroup} from '@angular/forms';
import {Climb} from '../../data/climb';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  today: number = Date.now();
  climbsInSession: Climb[] = [];
  climbId = 1;
  allGrades: number[] = [];
  flashGrades: number[] = [];
  avgFlashGrade = 0;
  avgGrade = 0;
  maxGrade = 0;

  addToClimbsInSession(grade: number, attempts: number): void {
    this.allGrades.push(grade);
    this.climbsInSession.push(new Climb(this.climbId++, grade, attempts, this.isFlash(attempts, grade)));
    this.calculateAverages();
    this.setMaxGrade();
    console.log('added ' + grade + ' ' + attempts);
  }

  isFlash(tries: number, grade: number): boolean {
    if (tries === 1){
      this.flashGrades.push(grade);
      this.avgFlashGrade = this.flashGrades.reduce((a, b) => a + b, 0) / this.flashGrades.length;
      return true;
    }
  }

  calculateAverages(): void {
    this.avgGrade = this.allGrades.reduce((a, b) => a + b, 0) / this.allGrades.length;
  }

  setMaxGrade(): void {
    this.maxGrade = Math.max(...this.allGrades);
  }

  clearSession(): void {
    this.climbsInSession = [];
    this.allGrades = [];
    this.flashGrades = [];
  }

  constructor() { }

  ngOnInit(): void {
  }
}
