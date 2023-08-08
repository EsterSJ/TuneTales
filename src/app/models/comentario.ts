export class Comentario {

    public id_comentario: Number;
    public id_user: Number;
    public id_publicacion: Number;
    public comentario: String;

    constructor(id_comentario: Number, id_user: Number, id_publicacion: Number, comentario: String){
        this.id_comentario = id_comentario;
        this.id_user = id_user;
        this.id_publicacion = id_publicacion;
        this.comentario = comentario;
    }

}
