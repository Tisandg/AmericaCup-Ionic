import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppConstantsProvider } from '../../providers/app-constants/app-constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Match } from '../Match';
import { Team } from '../Team';

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

  private matches: Array<Match> = [];
  private teams: Array<Team> = [];
  private teamsId: Array<number> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http:HttpClient, appConstants:AppConstantsProvider){
    this.appConstants = appConstants;
    this.getMatches(1);
    this.getMatches(2);
    this.getMatches(3);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchesPage');
  }

  getMatches(groupId: number){
    var url = 'https://cors-anywhere.herokuapp.com/';
    if(groupId == 1){ url = url+this.appConstants.getGroupA();  }
    if(groupId == 2){ url = url+this.appConstants.getGroupB();  }
    if(groupId == 3){ url = url+this.appConstants.getGroupC();  }
    //let url = 'https://cors-anywhere.herokuapp.com/'+this.appConstants.getGroupA();
    let data:Observable<any> = this.http.get(url);
    data.subscribe(result => {
      for (var item of result.data.match) {
        console.log(item);
        let imageA = "assets/imgs/Flags/"+item.home_name.toLowerCase()+".png";
        let imageB = "assets/imgs/Flags/"+item.away_name.toLowerCase()+".png";

        let newMatch = new Match(item.id,item.home_id, item.away_id, item.home_name, item.away_name
          ,item.score, item.date, item.status,imageA, imageB);
        this.matches.push(newMatch);

        //Agregar equipos
        if(this.teamsId.indexOf(item.home_id) == -1){
          //Agregarlo
          let newTeam = new Team(item.home_id, item.home_name, imageA, groupId, 0);
          this.teams.push(newTeam);
          this.teamsId.push(item.home_id);
        }
        if(this.teamsId.indexOf(item.away_id) == -1){
          //Agregarlo
          let newTeam = new Team(item.away_id, item.away_name, imageB, groupId, 0);
          this.teams.push(newTeam);
          this.teamsId.push(item.away_id);
        }
      }
    });
  }

}
