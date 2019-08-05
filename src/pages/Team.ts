export class Team{
    idTeam:number;
    name:string;
    image:string;
    group_id:number;
    favorite:number;

    constructor(id: number, name:string, image:string, group_id:number, favorite:number){
        this.idTeam = id;
        this.name = name;
        this.image = image;
        this.group_id = group_id;
        this.favorite = favorite;
    }
}