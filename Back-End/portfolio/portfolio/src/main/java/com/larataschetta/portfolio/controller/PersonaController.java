package com.larataschetta.portfolio.controller;
import com.larataschetta.portfolio.model.Experiencia;
import com.larataschetta.portfolio.model.Persona;

import com.larataschetta.portfolio.service.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "https://portfolio-lara.web.app")

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PersonaController {
    
    @Autowired
    private IPersonaService persoServ;
    
    @GetMapping("/hola")
    public String decirHola(){
        return "hola";
    }
    
    @PostMapping("/new/persona")
    public void agregarPersona(@RequestBody Persona per){
        persoServ.crearPersona(per);
    }
    
    @GetMapping("/ver/personas")
    @ResponseBody
    public List<Persona> verPersonas(){
        return persoServ.verPersonas();
    }
    
    @DeleteMapping("/delete/persona/{id}")
    public void borrarPersona(@PathVariable Long id){
        persoServ.borrarPersona(id);
    }
    
    @CrossOrigin(origins = "https://portfolio-lara.web.app")
//    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/buscar/persona/{id}")
    @ResponseBody
    public Persona buscarPersona(@PathVariable Long id){
        return persoServ.buscarPersona(id);
    }
    

    @PutMapping("/modificar/persona/{id}")
    public ResponseEntity<Persona> modificarPersona(@PathVariable Long id,@RequestBody Persona per){
        Persona persModificada = persoServ.buscarPersona(id);
        
        persModificada.setNombre(per.getNombre());
        persModificada.setApellido(per.getApellido());
        persModificada.setPais(per.getPais());
        persModificada.setLocalidad(per.getLocalidad());
        persModificada.setTelefono(per.getTelefono());
        persModificada.setDescripcion(per.getDescripcion());
        persModificada.setMail(per.getMail());
        persModificada.setTituloPrograma(per.getTituloPrograma());
        persModificada.setGit(per.getGit());
        persModificada.setFotoPerfil(per.getFotoPerfil());
        persModificada.setProvincia(per.getProvincia());


        
        persoServ.crearPersona(persModificada);
        return ResponseEntity.ok(persModificada);
    }

}
