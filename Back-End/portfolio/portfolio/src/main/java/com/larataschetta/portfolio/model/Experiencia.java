package com.larataschetta.portfolio.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Experiencia {
    
    //Atributos
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String trabajo;
    private String tareas;
    private int fechaInicio;
    private String fechaFin;
    
    //Constructor
    public Experiencia() {
    }

    public Experiencia(Long id, String trabajo, String tareas, int fechaInicio, String fechaFin) {
        this.id = id;
        this.trabajo = trabajo;
        this.tareas = tareas;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
    
}
