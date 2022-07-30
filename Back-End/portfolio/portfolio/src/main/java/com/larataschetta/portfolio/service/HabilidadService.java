package com.larataschetta.portfolio.service;
import com.larataschetta.portfolio.model.Habilidad;
import com.larataschetta.portfolio.repository.HabilidadRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HabilidadService {
    
    @Autowired
    public HabilidadRepository habiRepo;

    public List <Habilidad> verHabilidad(){
        return habiRepo.findAll();
    }
    
    public void crearHabilidad(Habilidad expe){
        habiRepo.save(expe);
    }

    public void borrarHabilidad(Long id){
        habiRepo.deleteById(id);
    }
    
    public Habilidad buscarHabilidad(Long id){
        return habiRepo.findById(id).orElse(null);        
    }
    
}
