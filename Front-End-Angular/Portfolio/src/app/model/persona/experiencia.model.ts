export class experiencia{
    id?:number;
    trabajo:string;
    tareas:string;
    fechaInicio:number;
    fechaFin: string;

    constructor(id:number, trabajo:string, tareas:string, fechaInicio:number, fechaFin:string){
        this.id = id;
        this.trabajo = trabajo;
        this.tareas = tareas;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }

}