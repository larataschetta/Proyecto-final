package com.larataschetta.portfolio.repository;
import com.larataschetta.portfolio.model.Habilidad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HabilidadRepository extends JpaRepository <Habilidad,Long>{
}
