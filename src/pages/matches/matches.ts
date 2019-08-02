import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppConstantsProvider } from '../../providers/app-constants/app-constants';
import { LiveScoreApiProvider } from '../../providers/live-score-api/live-score-api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the MatchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matches',
  templateUrl: 'matches.html',
})
export class MatchesPage {

  private appConstants: any;
  private matchesServer: any;
  private dataServer: any;
  private LiveScoreApi: any;
  private matches: Array<any>;
  private matchesA: Array<any>;
  private matchesB: Array<any>;
  private matchesC: Array<any>;

  /*matches: Array<any> =[
    {
      nameTeamA: "Colombia",
      nameTeamB: "Argentina",
      score: "2-0",
      imageTeamA: "assets/imgs/Flags/colombia.png",
      imageTeamB: "assets/imgs/Flags/argentina.png"
    },
    {
      nameTeamA: "Qatar",
      nameTeamB: "Colombia",
      score: "1-0",
      imageTeamA: "assets/imgs/Flags/qatar.png",
      imageTeamB: "assets/imgs/Flags/colombia.png"
    },
    {
      nameTeamA: "Paraguay",
      nameTeamB: "Colombia",
      score: "1-0",
      imageTeamA: "assets/imgs/Flags/paraguay.png",
      imageTeamB: "assets/imgs/Flags/colombia.png"
    }
  ];*/
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http:HttpClient, appConstants:AppConstantsProvider){
    //appConstants:AppConstantsProvider, LiveScoreApi: LiveScoreApiProvider) {
    this.appConstants = appConstants;
    //this.LiveScoreApi = LiveScoreApi;
    this.getMatchesA();
    //this.getMatchesB();
    //this.getMatchesC();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchesPage');
  }

  getMatchesA(){
    let url = 'https://cors-anywhere.herokuapp.com/'+this.appConstants.getGroupA();
    let data:Observable<any> = this.http.get(url);
    data.subscribe(result => {
      console.log(result.data.match);
      this.matches = result.data.match;
      //this.matches = [this.matches, this.matchesA];
    });
  }

  getMatchesB(){
    let url = 'https://cors-anywhere.herokuapp.com/'+this.appConstants.getGroupB();
    let data:Observable<any> = this.http.get(url);
    data.subscribe(result => {
      console.log(result.data.match);
      this.matches = result.data.match;
      //this.matches = [this.matches, this.matchesB];
    });
  }

  getMatchesC(){
    let url = 'https://cors-anywhere.herokuapp.com/'+this.appConstants.getGroupC();
    let data:Observable<any> = this.http.get(url);
    data.subscribe(result => {
      console.log(result.data.match);
      this.matches = result.data.match;
      //this.matches = [this.matches, this.matchesC];
    });
  }

}
