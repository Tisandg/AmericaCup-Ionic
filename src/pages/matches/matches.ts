import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppConstantsProvider } from '../../providers/app-constants/app-constants';
import { DatabaseProvider } from '../../providers/database/database';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Match } from '../Match';
import { Team } from '../Team';
import { TeamDetail } from '../TeamDetail';
//import { GroupsPage } from '../groups/groups';

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
  private matchesFinal: Array<Match> = [];
  //private Group: GroupsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http:HttpClient, appConstants:AppConstantsProvider, 
    private database: DatabaseProvider){
    this.appConstants = appConstants;
    //this.Group = group;
    this.getMatches(1);
    this.getMatches(2);
    this.getMatches(3);
    this.mostrarMatches();
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
      var teamsIdAux: Array<number> = [];
      for (var item of result.data.match) {
        let imageA = "assets/imgs/Flags/"+item.home_name.toLowerCase()+".png";
        let imageB = "assets/imgs/Flags/"+item.away_name.toLowerCase()+".png";

        let newMatch = new Match(item.id,item.home_id, item.away_id, item.home_name, item.away_name
          ,item.score, item.date, item.status,imageA, imageB);
        this.matches.push(newMatch);

        //save matches
        this.database.saveMatch(newMatch).then( (data) =>{
          console.log(data);
        },(error) =>{
          console.log(error);
        });
        console.log(newMatch);

        //Agregar equipos
        if(this.teamsId.indexOf(item.home_id) == -1){
          //Agregarlo
          let newTeam = new Team(item.home_id, item.home_name, imageA, groupId, 0);
          this.teams.push(newTeam);
          this.teamsId.push(item.home_id);
          teamsIdAux.push(item.home_id);
          //Save team in local base
          this.database.saveTeams(newTeam).then( (data) =>{
            console.log(data);
          },(error) =>{
            console.log(error);
          });
        }
        if(this.teamsId.indexOf(item.away_id) == -1){
          //Agregarlo
          let newTeam = new Team(item.away_id, item.away_name, imageB, groupId, 0);
          this.teams.push(newTeam);
          this.teamsId.push(item.away_id);
          teamsIdAux.push(item.away_id);
          //Save team in local base
          this.database.saveTeams(newTeam).then( (data) =>{
            console.log(data);
          },(error) =>{
            console.log(error);
          });
        }
      }

      this.database.getMatches().then( (data: Array<Match>) =>{
        console.log(data);
        for(var m of data){
          this.matchesFinal.push(m);
        }
      },(error) =>{
        console.log(error);
      });

      //After getting the teams, we'll calculate 
      //the points of each team (Position table)
      for (var team of teamsIdAux) {
        var won: number = 0;
        var drawn: number = 0;
        var lost: number = 0;
        var points: number = 0;
        var name: string;
        var numMatches: number = 0;
        for (var matchItem of this.matches) {
          if(matchItem.idTeamA == team){
            name = matchItem.nameTeamA;
            numMatches++;
            let dividido: string[] = matchItem.score.split(" - ");
            let goalsA = parseInt(dividido[0]);
            let goalsB = parseInt(dividido[1]);
            if(goalsA > goalsB){  won++;  }
            if(goalsA == goalsB){  drawn++;  }
            if(goalsA < goalsB){  lost++;  }
          }
          if(matchItem.idTeamB == team){
            numMatches++;
            let dividido: string[] = matchItem.score.split(" - ");
            let goalsA = parseInt(dividido[0]);
            let goalsB = parseInt(dividido[1]);
            if(goalsA > goalsB){  lost++;  }
            if(goalsA == goalsB){  drawn++;  }
            if(goalsA < goalsB){  won++;  }
          }
        }
        points = (won*3)+(drawn*1);
        let image = "assets/imgs/Flags/"+name.toLowerCase()+".png";
        let newTeamDetail = new TeamDetail(team,name, image, numMatches, won, 
          drawn, lost, points);
        /*if(groupId == 1){ this.group.addGroupA(newTeamDetail);  }
        if(groupId == 2){ this.group.addGroupB(newTeamDetail);  }
        if(groupId == 3){ this.group.addGroupC(newTeamDetail);  }*/
        this.database.saveTeamDetail(newTeamDetail).then( (data) =>{
          console.log(data);
        },(error) =>{
          console.log(error);
        });
      }
    });
  }

  mostrarMatches(){
    console.log("Imprimiendo!!!!!!!!!!");
    this.database.getMatches().then( (data) =>{
      console.log(data);
    },(error) =>{
      console.log(error);
    });
  }

}
