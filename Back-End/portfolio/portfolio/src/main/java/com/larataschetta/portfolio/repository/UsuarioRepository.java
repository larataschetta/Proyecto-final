package com.larataschetta.portfolio.repository;
import com.larataschetta.portfolio.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository <Usuario,Long> {
    
}
