import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Match } from '../../pages/Match';
import { Team } from '../../pages/Team';
import { TeamDetail } from '../../pages/TeamDetail';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  private db:SQLiteObject;
  private isOpen: boolean = false;

  constructor(public http: HttpClient, public storage: SQLite) {
    if(!this.isOpen){
      this.storage = new SQLite();
      this.storage.create({
        name: "americacup.db", 
        location:"default"
      })
        .then((db:SQLiteObject) => {
          this.db = db;
          db.executeSql(
            `CREATE TABLE IF NOT EXISTS team (
                id INTEGER PRIMARY KEY,
                name TEXT,
                image TEXT,
                group_id INTEGER,
                favorite INTEGER
                );`,[])
            .then(() => console.log('Executed SQL'))
            .catch(e => console.log(e));

          db.executeSql(
            `CREATE TABLE IF NOT EXISTS team_detail (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_team INTEGER,
                image TEXT,
                matches INTEGER,
                won INTEGER,
                drawn INTEGER,
                lost INTEGER,
                points INTEGER
            );`,[])
            .then(() => console.log('Executed SQL'))
            .catch(e => console.log(e));

          db.executeSql(
            `CREATE TABLE IF NOT EXISTS match (
              id INTEGER PRIMARY KEY,
              id_team_a INTEGER,
              id_team_b INTEGER,
              name_team_a TEXT,
              name_team_b TEXT,
              image_team_a TEXT,
              image_team_b TEXT,
              score TEXT,
              date TEXT,
              status TEXT`, [])
            .then(() => console.log('Executed SQL'))
            .catch(e => console.log(e));

          this.isOpen = true;
        }).catch((err)=>{
          console.log("error detected creating tables", err);
        });
      }
  }//End constructor

  saveMatch(match: Match){
    return new Promise((resolve, reject) => {
      let sql = "INSERT OR UPDATE INTO match(id, id_team_a, id_team_b, name_team_a, name_team_b,"
        +"image_team_a, image_team_b, score, date, status) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      this.db.executeSql(sql, [match.id, match.idTeamA, match.idTeamB, match.nameTeamA, match.nameTeamB,
        match.imageTeamA, match.imageTeamB, match.score, match.date, match.status]).then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    });
  }

  saveTeams(team: Team){
    return new Promise((resolve, reject) => {                
      let sql = "INSERT OR UPDATE INTO team(id, name, image, group_id, favorite)"
        +"VALUES(?, ?, ?, ?, ?)";
      this.db.executeSql(sql, [team.idTeam, team.name, team.image, team.group_id])
      .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  saveTeamDetail(teamDetail: TeamDetail){
    return new Promise((resolve, reject) => {           
      let sql = "INSERT OR UPDATE INTO team_detail(id, id_team,image, matches, won, drawn, lost, points)"
        +"VALUES(?, ?, ?, ?, ?, ?, ?, ?)";
      this.db.executeSql(sql, [teamDetail.id, teamDetail.idTeam, teamDetail.image, teamDetail.matches, teamDetail.won,teamDetail.drawn,
        teamDetail.lost, teamDetail.points])
      .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  getMatches(){
    return new Promise((resolve, reject) => {
      this.db.executeSql("SELECT * FROM match",[])
      .then((data) => {
        var arrayMatches: Array<Match> = [];
        if(data.rows.lenght > 0){
          for(var i = 0; i< data.rows.lenght; i++){
            let match = new Match(data.rows.item(i).id,data.rows.item(i).id_team_a, data.rows.item(i).id_team_b,
            data.rows.item(i).name_team_a,data.rows.item(i).name_team_b, data.rows.item(i).score,
            data.rows.item(i).date, data.rows.item(i).status, data.rows.item(i).image_team_a,
            data.rows.item(i).image_team_b);
            arrayMatches.push(match);
          }
        }
        resolve(arrayMatches);
      }, (error) => {
        reject(error);
      })
    });
  }

  getTeams(idGroup:number){
    return new Promise((resolve, reject) => {
      this.db.executeSql("SELECT * FROM team WHERE id = ?",[idGroup])
      .then((data) => {
        var arrayTeams: Team[] = [];
        if(data.rows.lenght > 0){
          for(var i = 0; i< data.rows.lenght; i++){
            let team = new Team(data.rows.item(i).id,data.rows.item(i).name, 
              data.rows.item(i).image, data.rows.item(i).group_id, data.rows.item(i).favorite);
            arrayTeams.push(team);
          }
        }
        resolve(arrayTeams);
      }, (error) => {
        reject(error);
      })
    });
  }

  changeFavorite(idFavorite:number, valor:number){
    return new Promise((resolve, reject) => {                
      let sql = "UPDATE Team set favorite = ? WHERE id = ?";
      this.db.executeSql(sql, [valor, idFavorite])
      .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  getFavoriteTeams(){
    return new Promise((resolve, reject) => {
      this.db.executeSql("SELECT * FROM team WHERE favorite = ?",[1])
      .then((data) => {
        var favorites: Team[] = [];
        if(data.rows.lenght > 0){
          for(var i = 0; i< data.rows.lenght; i++){
            let team = new Team(data.rows.item(i).id,data.rows.item(i).name, 
              data.rows.item(i).image, data.rows.item(i).group_id, data.rows.item(i).favorite);
            favorites.push(team);
          }
        }
        resolve(favorites);
      }, (error) => {
        reject(error);
      })
    });
  }

  getGroup(idGroup: number){
    return new Promise((resolve, reject) => {
      this.db.executeSql("SELECT team_detail.*,team.name FROM team_detail INNER JOIN team ON team_detail.id_team = team.id"
                +"WHERE team.group_id = ?",[idGroup])
      .then((data) => {
        var teamGroup: Array<TeamDetail> = [];
        if(data.rows.lenght > 0){
          for(var i = 0; i< data.rows.lenght; i++){
            var team = new TeamDetail(data.rows.item(i).id_team, data.rows.item(i).name,
            data.rows.item(i).image, data.rows.item(i).matches, data.rows.item(i).won,
            data.rows.item(i).drawn, data.rows.item(i).lost, data.rows.item(i).points);
            team.id = data.rows.item(i).id;
            teamGroup.push(team);
          }
        }
        resolve(teamGroup);
      }, (error) => {
        reject(error);
      })
    });
  }

}
