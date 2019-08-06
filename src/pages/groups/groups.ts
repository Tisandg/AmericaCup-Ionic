import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { TeamDetail } from '../TeamDetail';
import { Storage } from '@ionic/storage';
import { Team } from '../Team';

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

  private groupA: Array<TeamDetail> = [];
  private groupB: Array<TeamDetail> = [];
  private groupC: Array<TeamDetail> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private database: DatabaseProvider, private storage:Storage) {
    this.getInfoGroup(1);
    this.getInfoGroup(2);
    this.getInfoGroup(3);
  }

  getInfoGroup(idGroup: number){
    //get group info
    let key:string = "group-"+idGroup;
    this.storage.get(key).then((val:string)=>{
      //Obtenemos los id's de los equipos
      console.log("Resultado: "+val);
      let dividido:string[] = val.split(",");
      var equiposGrupo: Array<String>;
      for(var id of dividido){
        //Buscar los detail de cada equipo
        this.storage.get("detail-"+id).then((valDetail:string)=>{
          let divididoDetail: string[] = valDetail.split(",");
          let newTeamDeatil = new TeamDetail(Number(id), divididoDetail[0], 
          divididoDetail[1],Number(divididoDetail[2]), Number(divididoDetail[3]), 
          Number(divididoDetail[4]), Number(divididoDetail[5]),Number(divididoDetail[6]));
          if(idGroup == 1){
            this.groupA.push(newTeamDeatil);
          }
          if(idGroup == 2){
            this.groupB.push(newTeamDeatil);
          }
          if(idGroup == 3){
            this.groupC.push(newTeamDeatil);
          }
        });
      }
      
      
    })  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupsPage');
  }

}
