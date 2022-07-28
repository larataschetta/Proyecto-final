export class estudio{
    id?:number;
    titulo:string;
    institucion:string;
    descripcion:string;
    fechaInicio:number; 
    fechaFin:string;

    constructor( id:number, titulo:string, institucion:string, descripcion:string, fechaInicio:number, fechaFin:string ){

        this.id = id;
        this.titulo = titulo;
        this.institucion = institucion;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;

    }   
}