export class Like {

    public id_like: number;
    public id_publicacion: number;
    public id_user:number;


    constructor(id_like:number, id_publicacion: number, id_user:number) {

        this.id_like = id_like;
        this.id_publicacion = id_publicacion;
        this.id_user = id_user; 
    }
}