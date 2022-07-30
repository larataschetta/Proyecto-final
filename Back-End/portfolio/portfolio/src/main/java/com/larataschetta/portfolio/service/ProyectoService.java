package com.larataschetta.portfolio.service;
import com.larataschetta.portfolio.model.Proyecto;
import com.larataschetta.portfolio.repository.ProyectoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProyectoService {
    
    @Autowired
    public ProyectoRepository proyRepo;

    public List <Proyecto> verProyecto(){
        return proyRepo.findAll();
    }
    
    public void crearProyecto(Proyecto proy){
        proyRepo.save(proy);
    }

    public void borrarProyecto(Long id){
        proyRepo.deleteById(id);
    }
    
    public Proyecto buscarProyecto(Long id){
        return proyRepo.findById(id).orElse(null);        
    }
    
}
