import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AppConstantsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppConstantsProvider {

  groupA: string; //Holds the Geocoding API service URL
  groupB: string;  //Holds the Weather API service URL
  groupC: string; //Holds the geocoding API service Key

  private key: string = "vAE4U0iDSR3grkyB";
  private secret: string = "FaaKCQX4eCxC6x7B8MG2MYFEPIUh2tSI";

  constructor(public http: HttpClient) {
    this.groupA = "https://livescore-api.com/api-client/scores/history.json?key="+this.key+"&secret="+this.secret+"&league=962";
    this.groupB = "https://livescore-api.com/api-client/scores/history.json?key="+this.key+"&secret="+this.secret+"&league=961";
    this.groupC = "https://livescore-api.com/api-client/scores/history.json?key="+this.key+"&secret="+this.secret+"&league=960";
  }

  getGroupA(){
    return this.groupA;
  }ñ
  getGroupB(){
    return this.groupB;
  }
  getGroupC(){
    return this.groupC;
  }

}
