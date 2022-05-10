package com.mytaxi.taxiapplication.repository;

import com.mytaxi.taxiapplication.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<OrderEntity, Integer> {

//    Set<OrderEntity> findOrderEntityByTripsID(Integer orderId);
}
