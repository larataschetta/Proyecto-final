package com.larataschetta.portfolio.repository;
import com.larataschetta.portfolio.model.Experiencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExperienciaRepository extends JpaRepository <Experiencia,Long>{
    
}
