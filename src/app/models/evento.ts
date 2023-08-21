import { Time } from "@angular/common";

export class Evento {

    public id_evento: number;
    public id_user: number;
    public name_event: string;
    public date: Date;
    public hour: Time; 
    public place: string;
    public tickets: string;
    public photo: string;
    public description: string;

    constructor(id_event: number, id_user: number, name_event: string, date: Date, hour: Time, place: string, tickets: string, photo:string, description:string){
        this.id_evento = id_event;
        this.id_user = id_user;
        this.name_event = name_event;
        this.date = date;
        this.hour = hour;
        this.place = place;
        this.tickets = tickets;
        this.photo = photo;
        this.description = description;
    }

}
