export class TeamDetail{
    id:number;
    idTeam: number;
    name:string;
    image:string;
    matches: number;
    won:number;
    drawn:number;
    lost:number;
    points:number;

    constructor(idTeam: number, name:string, image:string, matches:number, 
        won:number, drawn:number, lost:number, points:number){
        this.idTeam =idTeam;
        this.name = name;
        this.image = image;
        this.matches = matches;
        this.won = won;
        this.drawn = drawn;
        this.lost = lost;
        this.points = points;
    }
}