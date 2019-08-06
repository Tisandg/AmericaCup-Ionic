import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppConstantsProvider } from '../../providers/app-constants/app-constants';
import { DatabaseProvider } from '../../providers/database/database';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Match } from '../Match';
import { Team } from '../Team';
import { TeamDetail } from '../TeamDetail';
import { Storage } from '@ionic/storage';
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
  private teamsId: Array<number> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http:HttpClient, appConstants:AppConstantsProvider, 
    private database: DatabaseProvider, private storage:Storage){
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
    let data:Observable<any> = this.http.get(url);
    data.subscribe(result => {
      var idsTeam: Array<number> = [];
      for (var item of result.data.match) {
        let imageA = "assets/imgs/Flags/"+item.home_name.toLowerCase()+".png";
        let imageB = "assets/imgs/Flags/"+item.away_name.toLowerCase()+".png";

        //Guardando en almacenamiento local
        let newMatch = new Match(item.id, item.home_id, item.away_id, item.home_name,
          item.away_name,item.score, item.date, item.status, imageA, imageB);
        this.matches.push(newMatch);
        let infoMatch=""+item.home_name+","+item.away_name+","+item.score+""+item.date+","
        +item.status+","+imageA+""+imageB;
        this.storage.set("match-"+item.id,infoMatch);

        //Agregar equipos
        if(this.teamsId.indexOf(item.home_id) == -1){
          //Agregarlo
          this.teamsId.push(item.home_id);
          let infoTeam=""+item.home_name+","+imageA;
          this.storage.set("team-"+item.home_id,infoTeam);
        }
        if(this.teamsId.indexOf(item.away_id) == -1){
          //Agregarlo
          let infoTeam=""+item.away_name+","+imageB;
          this.storage.set("team-"+item.away_id,infoTeam);
        }

        if(idsTeam.indexOf(item.away_id) == -1){
          idsTeam.push(item.away_id);
          console.log("Agregado: "+item.away_id);
        }
        if(idsTeam.indexOf(item.home_id) == -1){
          idsTeam.push(item.home_id);
          console.log("Agregado: "+item.home_id);
        }
      }

      //Guardar info Group
      var idsEquipo: string;
      var primero:boolean = true;
      console.log("Tamaño: "+idsTeam.length);
      for(var idTeam of idsTeam){
        if(primero){
          idsEquipo = ""+idTeam;
          primero = false;
        }else{
          idsEquipo = idsEquipo+","+idTeam;
        }
      }
      this.storage.set("group-"+groupId,idsEquipo);

      //After getting the teams, we'll calculate 
      //the points of each team (Position table)
      for (var team of idsTeam) {
        var won: number = 0;
        var drawn: number = 0;
        var lost: number = 0;
        var points: number = 0;
        var name:string = "";
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
        let infoDetail = ""+name+","+image+","+numMatches+","+won+","+drawn
                        +","+lost+","+points;
        this.storage.set("detail-"+team,infoDetail);
      }
    });
  }

}
