package com.larataschetta.portfolio.service;
import com.larataschetta.portfolio.model.Experiencia;
import com.larataschetta.portfolio.repository.ExperienciaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExperienciaService {
    
    @Autowired
    public ExperienciaRepository expeRepo;

    public List <Experiencia> verExperiencia(){
        return expeRepo.findAll();
    }
    
    public void crearExperiencia(Experiencia expe){
        expeRepo.save(expe);
    }

    public void borrarExperiencia(Long id){
        expeRepo.deleteById(id);
    }
    
    public Experiencia buscarExperiencia(Long id){
        return expeRepo.findById(id).orElse(null);        
    }
    

    
}
