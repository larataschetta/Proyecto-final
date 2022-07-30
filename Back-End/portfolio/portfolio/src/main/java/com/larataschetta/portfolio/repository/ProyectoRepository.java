package com.larataschetta.portfolio.repository;
import com.larataschetta.portfolio.model.Proyecto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProyectoRepository extends JpaRepository <Proyecto,Long>{
    
}
