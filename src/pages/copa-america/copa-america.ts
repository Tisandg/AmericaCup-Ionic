import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the CopaAmericaPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-copa-america',
  templateUrl: 'copa-america.html'
})
export class CopaAmericaPage {

  matchesRoot = 'MatchesPage'
  groupsRoot = 'GroupsPage'
  favoritesRoot = 'FavoritesPage'


  constructor(public navCtrl: NavController) {}

}
