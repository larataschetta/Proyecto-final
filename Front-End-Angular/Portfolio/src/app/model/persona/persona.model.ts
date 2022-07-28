export class persona{
    id?:number;
    nombre: string;    
    apellido: string;
    pais: string;    
    provincia: string;    
    localidad: string;    
    mail: string;
    telefono: string;
    descripcion: string;
    fotoPerfil: string;
    git: string;
    tituloPrograma: string;

    
    constructor(nombre: string, apellido:string, pais:string, provincia:string, localidad:string, mail:string, telefono:string, 
        descripcion:string, fotoPerfil:string, git:string, tituloPrograma:string){
            this.nombre = nombre;
            this.apellido = apellido;
            this.pais = pais;
            this.provincia = provincia;
            this.localidad = localidad;
            this.mail = mail;
            this.telefono = telefono;
            this.descripcion = descripcion;
            this.fotoPerfil = fotoPerfil;
            this.git = git;
            this.tituloPrograma = tituloPrograma;
        }
        
    }