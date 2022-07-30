package com.larataschetta.portfolio.service;
import com.larataschetta.portfolio.model.Usuario;
import java.util.List;


public interface IUsuarioService {
    
    public void crearUsuario(Usuario user);
    
    public boolean IniciarSesion(Usuario user);
    
    public List <Usuario> verUsuarios();
    
    public Usuario buscarUsuario(Long id);
}
