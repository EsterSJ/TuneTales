export class Comentario {

    public id_comentario?: Number;
    public id_publicacion?: number;
    public comentario?: String;
    public id_user_comment?: Number;

    constructor(id_comentario: Number, id_publicacion: number, comentario: String, id_user_comment: Number){
        this.id_comentario = id_comentario;
        this.id_publicacion = id_publicacion;
        this.comentario = comentario;
        this.id_user_comment = id_user_comment;
    }

}
