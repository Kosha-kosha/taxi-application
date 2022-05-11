package com.mytaxi.taxiapplication.repository;

import com.mytaxi.taxiapplication.entity.Trip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface TripRepository extends JpaRepository<Trip, Integer> {
    @Query(value = "select * from Trip where taxiName = :taxiName", nativeQuery = true)
    Collection<Trip> findTripsByTaxiName(@Param("taxiName") String taxiName);

    @Query("SELECT COUNT(trip) as count FROM Trip trip WHERE trip.taxiName = :taxiName")
    Integer countTripByTaxiName(@Param("taxiName") String taxiName);
}
