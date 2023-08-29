export class Publicacion {

    public id_publicacion: Number;
    public id_user: Number;
    public multimedia: String; 
    public name_letter: String;
    public letter: String;
    public history: String;
    public likes: Number;
    public image: string;

    constructor(id_publicacion: Number, id_user: Number, multimedia: String, name_letter: String, letter: String, history: String, likes: Number, image: string){
        this.id_publicacion = id_publicacion;
        this.id_user = id_user;
        this.multimedia = multimedia;
        this.name_letter = name_letter;
        this.letter = letter;
        this.history = history;
        this.likes = likes;
        this.image = image;
    }
}
