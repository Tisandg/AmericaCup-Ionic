import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppConstantsProvider } from '../../providers/app-constants/app-constants';
import { LiveScoreApiProvider } from '../../providers/live-score-api/live-score-api';

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

  matches: Array<any> =[
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
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchesPage');
  }

  getMatches() {
    //Uses the LiveScoreApiProvider to get the latitud and longitude coordinates for location set by the user
    this.LiveScoreApiProvider.getGroupA().subscribe((data: any) => {
            this.geometry.longitude = data.results[0].position.lon;
            this.geometry.latitude = data.results[0].position.lat;
            //Prints the coordinates recovered from service in the console 
            console.log('Geometrylat: ' + this.geometry.longitude + ', Geometrylong: ' + this.geometry.latitude);
            //Gets the current weather conditions using the coordinates translated from the location set by the user
            this.Weather.getCurrentWeather(this.geometry.longitude, this.geometry.latitude).
                subscribe((weatherData: any) => {
                    //Gets the current conditions from the specific JSON object
                    this.currentWeather = weatherData.currently;
                    //Connection to service was successful
                    this.weatherResult = true;
                    //Sets the path for the icon to show according to weather conditions 
                    if (this.currentWeather.summary.toLowerCase().indexOf("cloudy") > 0)
                        this.summaryIcon = "cloudy";
                    else if (this.currentWeather.summary.toLowerCase().indexOf("rainy") > 0)
                        this.summaryIcon = "rainy";
                    else if (this.currentWeather.summary.toLowerCase().indexOf("sunny") > 0)
                        this.summaryIcon = "sunny";
                    else if (this.currentWeather.summary.toLowerCase().indexOf("thunderstorm") > 0)
                        this.summaryIcon = "thunderstorm";
                });
        });
}

}
