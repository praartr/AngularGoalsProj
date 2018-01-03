import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['my first goal',  'another silly life goal']);
  goal = this.goals.asObservable();
  constructor() { }

  changeGoals(goal) {
    this.goals = goal;
  }

}
