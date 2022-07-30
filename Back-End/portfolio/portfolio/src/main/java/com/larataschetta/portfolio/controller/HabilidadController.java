package com.larataschetta.portfolio.controller;
import com.larataschetta.portfolio.model.Estudio;
import com.larataschetta.portfolio.model.Experiencia;
import com.larataschetta.portfolio.model.Habilidad;
import com.larataschetta.portfolio.service.ExperienciaService;
import com.larataschetta.portfolio.service.HabilidadService;
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
public class HabilidadController {
    
    @Autowired
    private HabilidadService habiServ;

    
    @PostMapping("/new/habilidad")
    public void agregarHabilidad(@RequestBody Habilidad habi){
        habiServ.crearHabilidad(habi);
    }
    
    @GetMapping("/ver/habilidades")
    @ResponseBody
    public List<Habilidad> verHabilidad(){
        return habiServ.verHabilidad();
    }
    
    @DeleteMapping("/delete/habilidad/{id}")
    public void borrarHabilidad(@PathVariable Long id){
        habiServ.borrarHabilidad(id);
    }
    
    @GetMapping("/buscar/habilidad/{id}")
    @ResponseBody
    public Habilidad buscarHabilidad(@PathVariable Long id){
        return habiServ.buscarHabilidad(id);
    }
    
    
    @PutMapping("/modificar/habilidad/{id}")
    public ResponseEntity<Habilidad> modificarHabilidad(@PathVariable Long id,@RequestBody Habilidad hab){
        Habilidad habModificado = habiServ.buscarHabilidad(id);
        
        habModificado.setNombre(hab.getNombre());
        habModificado.setPorcentaje(hab.getPorcentaje());
        
        habiServ.crearHabilidad(habModificado);
        return ResponseEntity.ok(habModificado);
    }
    
    
}
