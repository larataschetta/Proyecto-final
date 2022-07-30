package com.larataschetta.portfolio.service;
import com.larataschetta.portfolio.model.Estudio;
import com.larataschetta.portfolio.repository.EstudioRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EstudioService {
    
    @Autowired
    public EstudioRepository estudioRepo;

    public List <Estudio> verEstudio(){
        return estudioRepo.findAll();
    }
    
    public void crearEstudio(Estudio estu){
        estudioRepo.save(estu);
    }

    public void borrarEstudio(Long id){
        estudioRepo.deleteById(id);
    }
    
    public Estudio buscarEstudio(Long id){
        return estudioRepo.findById(id).orElse(null);        
    }
    
}
