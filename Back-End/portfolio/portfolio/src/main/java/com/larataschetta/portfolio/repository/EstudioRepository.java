package com.larataschetta.portfolio.repository;
import com.larataschetta.portfolio.model.Estudio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstudioRepository extends JpaRepository <Estudio,Long>{
    
}
