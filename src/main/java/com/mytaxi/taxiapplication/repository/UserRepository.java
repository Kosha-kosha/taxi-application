package com.mytaxi.taxiapplication.repository;

import com.mytaxi.taxiapplication.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    Optional<UserEntity> findByUserName(String userName);

    Optional<UserEntity> findById(Integer id);

    @Transactional
    @Modifying
    @Query("update UserEntity u set u.password = :newPassword where u.userName = :userName")
    Integer resetPassword(@Param("userName") String userName, @Param("newPassword") String newPassword);

    @Transactional
    @Modifying
    @Query("update UserEntity u set u.phoneNumber = :newPhoneNumber where u.userName = :userName")
    Integer resetPhoneNumber(@Param("userName") String userName, @Param("newPhoneNumber") String newPhoneNumber);

    @Transactional
    @Query("select password from UserEntity where userName = :userName")
    String getPassword(@Param("userName") String userName);
}
