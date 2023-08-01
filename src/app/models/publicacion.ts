export class Publicacion {

    public id_publicacion: Number;
    public id_user: Number;
    public link_soundCloud: String;
    public letter: String;
    public history: String;
    public likes: Number;

    constructor(id_publicacion: Number, id_user: Number, link_soundCloud: String, letter: String, history: String, likes: Number){
        this.id_publicacion = id_publicacion;
        this.id_user = id_user;
        this.link_soundCloud = link_soundCloud;
        this.letter = letter;
        this.history = history;
        this.likes = likes;
    }
}
