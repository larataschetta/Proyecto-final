package com.larataschetta.portfolio.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Estudio {
    
    //Atributos
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String titulo;
    private String institucion;
    private String descripcion;
    private int fechaInicio; 
    private String fechaFin;
    
    //Constructor
    public Estudio() {
    }

    public Estudio(Long id, String titulo, String institucion, String descripcion,
            int fechaInicio, String fechaFin) {
        this.id = id;
        this.titulo = titulo;
        this.institucion = institucion;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
    
    
}
