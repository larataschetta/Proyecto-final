package com.larataschetta.portfolio.model;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Persona {  
    
    //Atributos
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nombre;    
    private String apellido;
    private String pais;    
    private String provincia;    
    private String localidad;    
    private String mail;
    private String telefono;
    private String descripcion;
    private String fotoPerfil;
    private String git;
    private String tituloPrograma;



//constructor
    public Persona() {
    }

    public Persona(Long id, String nombre, String apellido, String pais,
            String provincia, String localidad, String mail, String telefono,
            String descripcion, String fotoPerfil, String git,
            String tituloPrograma) {
        this.id = id;
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