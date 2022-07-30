package com.larataschetta.portfolio.controller;
import com.larataschetta.portfolio.model.Usuario;
import com.larataschetta.portfolio.service.IUsuarioService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

//@CrossOrigin(origins = "http://localhost:4200")

@CrossOrigin(origins = "https://portfolio-lara.web.app")
@RestController
public class UsuarioController {
    
    @Autowired
    private IUsuarioService userServ;
            
//    @PostMapping("/new/usuario")
//    public void agregarUsuario(@RequestBody Usuario user){
//        userServ.crearUsuario(user);
//    }
    
    @CrossOrigin(origins = "https://portfolio-lara.web.app")
//    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/iniciar-sesion")
    public Boolean iniciarSesion(@RequestBody Usuario user){
        return userServ.IniciarSesion(user);
    }
    
    
//    @GetMapping("/ver/usuarios")
//    @ResponseBody
//    public List<Usuario> verUsuarios(){
//        return userServ.verUsuarios();
//    }
    
//    @GetMapping("/buscar/usuario/{id}")
//    @ResponseBody
//    public Usuario buscarUsuario(@PathVariable Long id){
//        return userServ.buscarUsuario(id);
//    }
//    
}
