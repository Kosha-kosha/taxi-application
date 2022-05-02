package com.mytaxi.taxiapplication.repository;

import com.mytaxi.taxiapplication.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    Optional<UserEntity> findByUserName(String userName);

    Optional<UserEntity> findById(Integer id);

}
