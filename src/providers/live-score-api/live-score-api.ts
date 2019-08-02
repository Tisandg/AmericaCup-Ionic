import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AppConstantsProvider } from '../app-constants/app-constants';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/*
  Generated class for the LiveScoreApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LiveScoreApiProvider {

  groupA: string; 
  groupB: string; 
  groupC: string; 
  private constantVar: any; //Holds an AppConstantsProvider object

  constructor(public http: HttpClient, constantVar: AppConstantsProvider) {
    this.constantVar = constantVar; //Setup the local constantVar variable
    this.groupA = constantVar.getGroupA();
    this.groupB = constantVar.getGroupB();
    this.groupC = constantVar.getGroupC();
  }

  getGroupA(){
    return this.http.get(this.groupA);
  }

  getGroupB(){
    return this.http.get(this.groupB);
  }

  getGroupC(){
    return this.http.get(this.groupC);
  }

}
