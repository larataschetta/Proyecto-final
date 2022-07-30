package com.larataschetta.portfolio.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Proyecto {
    
    //Atributos
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nombre;
    private int anio;
    private String descripcion;
    private String urlFoto;
    private String urlGit;
    
    //Constructor
    public Proyecto() {
    }

    public Proyecto(Long id, String nombre, int anio, String descripcion,
            String urlFoto, String urlGit) {
        this.id = id;
        this.nombre = nombre;
        this.anio = anio;
        this.descripcion = descripcion;
        this.urlFoto = urlFoto;
        this.urlGit = urlGit;
    }
    
}
