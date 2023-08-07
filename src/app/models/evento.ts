export class Evento {

    public id_event: Number;
    public id_user: Number;
    public name_event: String;
    public date: Date;
    // public hour: Time; ?????
    public place: String;
    public tickets: String;
    public photo: String;
    public description: String;

    constructor(id_event: Number, id_user: Number, name_event: String, date: Date, place: String, tickets: String, photo:String, description:String){
        this.id_event = id_event;
        this.id_user = id_user;
        this.name_event = name_event;
        this.date = date;
        this.place = place;
        this.tickets = tickets;
        this.photo = photo;
        this.description = description;
    }

}
