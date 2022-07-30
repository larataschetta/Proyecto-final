package com.larataschetta.portfolio.controller;
import com.larataschetta.portfolio.model.Estudio;
import com.larataschetta.portfolio.model.Experiencia;
import com.larataschetta.portfolio.service.EstudioService;
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
public class EstudioController {
    
    @Autowired
    private EstudioService estudioServ;

    
    @PostMapping("/new/estudio")
    public void agregarEstudio(@RequestBody Estudio estu){
        estudioServ.crearEstudio(estu);
    }
    
    @GetMapping("/ver/estudios")
    @ResponseBody
    public List<Estudio> verEstudio(){
        return estudioServ.verEstudio();
    }
    
    @DeleteMapping("/delete/estudio/{id}")
    public void borrarEstudio(@PathVariable Long id){
        estudioServ.borrarEstudio(id);
    }
    
    @GetMapping("/buscar/estudio/{id}")
    @ResponseBody
    public Estudio buscarEstudio(@PathVariable Long id){
        return estudioServ.buscarEstudio(id);
    }
    
    
    @PutMapping("/modificar/estudio/{id}")
    public ResponseEntity<Estudio> modificarEstudio(@PathVariable Long id,@RequestBody Estudio est){
        Estudio estuModificado = estudioServ.buscarEstudio(id);
        
        estuModificado.setTitulo(est.getTitulo());
        estuModificado.setDescripcion(est.getDescripcion());
        estuModificado.setInstitucion(est.getInstitucion());
        estuModificado.setFechaInicio(est.getFechaInicio());
        estuModificado.setFechaFin(est.getFechaFin());
        
        estudioServ.crearEstudio(estuModificado);
        return ResponseEntity.ok(estuModificado);
    }
    
}
