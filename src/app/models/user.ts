export class User {

    public id_user: Number;
    public user: string;
    public email: String;
    public password: String;
    public instagram: String;
    public facebook: String;
    public twitter: String;
    public birth_date: Date;
    public music_type: String;
    public description: String;
    public photo: String;

    constructor(id_user: Number, user: string, email: String, password: String, instagram: String, facebook: String, twitter: String, birth_date: Date, music_type: String, description: String, photo: String){
        this.id_user = id_user;
        this.user = user;
        this.email = email;
        this.password = password;
        this.instagram = instagram;
        this.facebook = facebook;
        this.twitter = twitter;
        this.birth_date = birth_date;
        this.music_type = music_type;
        this.description = description;
        this.photo = photo;
    }

}
