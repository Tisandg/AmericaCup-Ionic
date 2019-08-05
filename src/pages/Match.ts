export class Match {
    id:number;
    idTeamA:number;
    idTeamB:number;
    nameTeamA: string;
    nameTeamB: string;
    imageTeamA: string;
    imageTeamB: string;
    score: string;
    date: string;
    status: string;

    constructor(id:number, idTeamA: number,idTeamB:number, nameTeamA: string, nameTeamB: string,
        score: string, date:string, status:string, imageA: string, imageB:string){
        this.id = id;
        this.idTeamA = idTeamA;
        this.idTeamB = idTeamB;
        this.nameTeamA = nameTeamA;
        this.nameTeamB = nameTeamB;
        this.score = score;
        this.date = date;
        this.status = status;
        this.imageTeamA = imageA;
        this.imageTeamB = imageB;
    }
}