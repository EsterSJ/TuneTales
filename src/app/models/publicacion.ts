export class Publicacion {

    public id_publicacion: number;
    public id_user: Number;
    public link_soundCloud: String;
    public name_letter: String;
    public letter: String;
    public history: String;
    public likes: Number;

    constructor(id_publicacion: number, id_user: Number, link_soundCloud: String, name_letter: String, letter: String, history: String, likes: Number){
        this.id_publicacion = id_publicacion;
        this.id_user = id_user;
        this.link_soundCloud = link_soundCloud;
        this.name_letter = name_letter;
        this.letter = letter;
        this.history = history;
        this.likes = likes;
    }
}
