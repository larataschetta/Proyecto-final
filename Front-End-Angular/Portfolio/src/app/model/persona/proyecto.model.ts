export class proyecto{

    id?:number;
    nombre:string;
    anio:number;
    descripcion:string;
    urlFoto:string;
    urlGit:string;

    constructor( id:number, nombre:string,anio:number, descripcion:string,urlFoto:string,urlGit:string){
        this.id = id;
        this.nombre = nombre;
        this.anio = anio;
        this.descripcion = descripcion;
        this.urlFoto = urlFoto;
        this.urlGit = urlGit;
    }
}