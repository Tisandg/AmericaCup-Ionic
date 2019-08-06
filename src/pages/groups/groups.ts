import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { TeamDetail } from '../TeamDetail';

/**
 * Generated class for the GroupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage {

  private groupA: Array<TeamDetail>;
  private groupB: Array<TeamDetail>;
  private groupC: Array<TeamDetail>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private database: DatabaseProvider) {
    this.getInfoGroup(1);
    this.getInfoGroup(2);
    this.getInfoGroup(3);
  }

  getInfoGroup(idGroup: number){
    //get group info
    this.database.getGroup(1).then( (data: Array<TeamDetail>) =>{
      console.log(data);
      if(idGroup == 1){ 
        for(var teamA of data){
          this.groupA.push(teamA);
        }
      }
      if(idGroup == 2){ 
        for(var teamB of data){
          this.groupB.push(teamB);
        }
      }
      if(idGroup == 3){ 
        for(var teamC of data){
          this.groupC.push(teamC);
        }
      }
    },(error) =>{
      console.log(error);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupsPage');
  }

  addGroupA(team: TeamDetail){
    this.groupA.push(team);
  }

  addGroupB(team: TeamDetail){
    this.groupB.push(team);
  }
  addGroupC(team: TeamDetail){
    this.groupC.push(team);
  }

}
