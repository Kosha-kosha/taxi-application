package com.mytaxi.taxiapplication.repository;

import com.mytaxi.taxiapplication.entity.Trip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TripRepository extends JpaRepository<Trip, Integer> {

}
