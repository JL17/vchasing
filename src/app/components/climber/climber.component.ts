import { Component, OnInit } from '@angular/core';
import { Climber } from '../../data/climber';

@Component({
  selector: 'app-climber',
  templateUrl: './climber.component.html',
  styleUrls: ['./climber.component.css']
})
export class ClimberComponent implements OnInit {
  climber: Climber = {
    climberId: 1,
    username: 'bumbum',
    firstName: 'Benjamin',
    lastName: 'Studmuffin',
    weightKg: 24.9,
    weightLb: 55,
    maxGrade: 7,
    avgFlashGrade: 3,
    avgGrade: 5
  }

  constructor() { }

  ngOnInit(): void {
  }

}
