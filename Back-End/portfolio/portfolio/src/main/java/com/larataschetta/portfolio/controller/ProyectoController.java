package com.larataschetta.portfolio.controller;
import com.larataschetta.portfolio.model.Habilidad;
import com.larataschetta.portfolio.model.Proyecto;
import com.larataschetta.portfolio.service.ProyectoService;
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

@CrossOrigin(origins = "http://localhost:4200")

//@CrossOrigin(origins = "https://portfolio-lara.web.app")
@RestController
public class ProyectoController {
    @Autowired
    private ProyectoService proyServ;

    
    @PostMapping("/new/proyecto")
    public void agregarProyecto(@RequestBody Proyecto proy){
        proyServ.crearProyecto(proy);
    }
    
    @GetMapping("/ver/proyectos")
    @ResponseBody
    public List<Proyecto> verProyecto(){
        return proyServ.verProyecto();
    }
    
    @DeleteMapping("/delete/proyecto/{id}")
    public void borrarProyecto(@PathVariable Long id){
        proyServ.borrarProyecto(id);
    }
    
    @GetMapping("/buscar/proyecto/{id}")
    @ResponseBody
    public Proyecto buscarProyecto(@PathVariable Long id){
        return proyServ.buscarProyecto(id);
    }
    
    @PutMapping("/modificar/proyecto/{id}")
    public ResponseEntity<Proyecto> modificarProyecto(@PathVariable Long id,@RequestBody Proyecto proy){
        Proyecto proyModificado = proyServ.buscarProyecto(id);
        
        proyModificado.setNombre(proy.getNombre());
        proyModificado.setAnio(proy.getAnio());
        proyModificado.setDescripcion(proy.getDescripcion());
        proyModificado.setUrlFoto(proy.getUrlFoto());
        proyModificado.setUrlGit(proy.getUrlGit());
        
        proyServ.crearProyecto(proyModificado);
        return ResponseEntity.ok(proyModificado);
    }
    
    
    
}
