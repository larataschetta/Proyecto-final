package com.larataschetta.portfolio.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Usuario{
    
    //Atributos
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long id;
    private String correo;
    private String contrasenia;
    
    //Constructor
    public Usuario() {
    }

    public Usuario(Long id, String correo, String contrasenia) {
        this.id = id;
        this.correo = correo;
        this.contrasenia = contrasenia;
    }
    
    public Long getId() {
        return id;
    }
}
