package com.larataschetta.portfolio.controller;
import com.larataschetta.portfolio.model.Experiencia;
import com.larataschetta.portfolio.service.ExperienciaService;
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

//@CrossOrigin(origins = "https://portfolio-lara.web.app")

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ExperienciaController {
    
    @Autowired
    private ExperienciaService expeServ;

    
    @PostMapping("/new/experiencia")
    public void agregarExperiencia(@RequestBody Experiencia expe){
        expeServ.crearExperiencia(expe);
    }
    
    @GetMapping("/ver/experiencia")
    @ResponseBody
    public List<Experiencia> verExperiencia(){
        return expeServ.verExperiencia();
    }
    
    @DeleteMapping("/delete/experiencia/{id}")
    public void borrarExperiencia(@PathVariable Long id){
        expeServ.borrarExperiencia(id);
    }
    
    @GetMapping("/buscar/experiencia/{id}")
    @ResponseBody
    public Experiencia buscarExperiencia(@PathVariable Long id){
        return expeServ.buscarExperiencia(id);
    }
    
    @PutMapping("/modificar/experiencia/{id}")
    public ResponseEntity<Experiencia> modificarExperiencia(@PathVariable Long id,@RequestBody Experiencia expe){
        Experiencia expeModificada = expeServ.buscarExperiencia(id);
        
        expeModificada.setTareas(expe.getTareas());
        expeModificada.setTrabajo(expe.getTrabajo());
        expeModificada.setFechaInicio(expe.getFechaInicio());
        expeModificada.setFechaFin(expe.getFechaFin());
        
        expeServ.crearExperiencia(expeModificada);
        return ResponseEntity.ok(expeModificada);
    }
}
