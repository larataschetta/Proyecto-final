package com.larataschetta.portfolio.service;
import com.larataschetta.portfolio.model.Persona;
import com.larataschetta.portfolio.model.Usuario;
import com.larataschetta.portfolio.repository.UsuarioRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService implements IUsuarioService {
    
    @Autowired
    public UsuarioRepository userRepo;
    
    @Override
    public void crearUsuario(Usuario user) {
        userRepo.save(user);
    }

           
    @Override
    public boolean IniciarSesion(Usuario user){
        if(buscarUsuario(user.getId()).getCorreo().equals(user.getCorreo()) && buscarUsuario(user.getId()).getContrasenia().equals(user.getContrasenia())){
            return true;
        }else{
            return false;
        }
    }
    
    
    @Override
    public Usuario buscarUsuario(Long id){
        return userRepo.findById(id).orElse(null);
    }

    
    @Override
    public List<Usuario> verUsuarios() {
        return userRepo.findAll();
    }
}
