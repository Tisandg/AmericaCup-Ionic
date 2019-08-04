import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  groupsA: Array<any> =[
    {
      imageFlag: "",
      name: "Teams",
      m: "M",
      w: "W",
      d: "E",
      l: "L",
      pts: "Pts"
    },
    {
      imageFlag: "assets/imgs/Flags2/Brasil1.png",
      name: "Brasil",
      m: "3",
      w: "2",
      d: "1",
      l: "0",
      pts: "7"
    },
    {
      imageFlag: "assets/imgs/Flags2/Venezuela1.png",
      name: "Venezuela",
      m: "3",
      w: "1",
      d: "2",
      l: "0",
      pts: "5"
    },
    {
      imageFlag: "assets/imgs/Flags2/Peru1.png",
      name: "Peru",
      m: "3",
      w: "1",
      d: "1",
      l: "1",
      pts: "4"
    },
    {
      imageFlag: "assets/imgs/Flags2/Bolivia1.png",
      name: "Bolivia",
      m: "3",
      w: "0",
      d: "0",
      l: "3",
      pts: "0"
    }
  ];

  groupsB: Array<any> =[
    {
      imageFlag: "",
      name: "Teams",
      m: "M",
      w: "W",
      d: "E",
      l: "L",
      pts: "Pts"
    },
    {
      imageFlag: "assets/imgs/Flags2/Colombia1.png",
      name: "Colombia",
      m: "3",
      w: "3",
      d: "0",
      l: "0",
      pts: "9"
    },
    {
      imageFlag: "assets/imgs/Flags2/Argentina1.png",
      name: "Argentina",
      m: "3",
      w: "1",
      d: "1",
      l: "1",
      pts: "4"
    },
    {
      imageFlag: "assets/imgs/Flags2/Paraguay1.png",
      name: "Paraguay",
      m: "3",
      w: "0",
      d: "2",
      l: "1",
      pts: "2"
    },
    {
      imageFlag: "assets/imgs/Flags2/Catar1.png",
      name: "Catar",
      m: "3",
      w: "0",
      d: "1",
      l: "2",
      pts: "1"
    }
  ];

  groupsC: Array<any> =[
    {
      imageFlag: "",
      name: "Teams",
      m: "M",
      w: "W",
      d: "E",
      l: "L",
      pts: "Pts"
    },
    {
      imageFlag: "assets/imgs/Flags2/Uruguay1.png",
      name: "Uruguay",
      m: "3",
      w: "2",
      d: "1",
      l: "0",
      pts: "7"
    },
    {
      imageFlag: "assets/imgs/Flags2/Chile1.png",
      name: "Chile",
      m: "3",
      w: "2",
      d: "0",
      l: "1",
      pts: "6"
    },
    {
      imageFlag: "assets/imgs/Flags2/Japon1.png",
      name: "Japan",
      m: "3",
      w: "0",
      d: "2",
      l: "1",
      pts: "2"
    },
    {
      imageFlag: "assets/imgs/Flags2/Ecuador1.png",
      name: "Ecuador",
      m: "3",
      w: "0",
      d: "1",
      l: "2",
      pts: "1"
    }
  ];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupsPage');
  }

}
