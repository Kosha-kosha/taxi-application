package com.mytaxi.taxiapplication.entity;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import java.util.Set;

@Data
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class OrderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "order_id")
    Integer orderID;
    String startPoint;
    String endPoint;
    @ManyToOne
    @JoinColumn(name = "user_id")
    UserEntity user;
    @ManyToMany
    @JoinTable(
            name = "clients_route",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "trip_id"))
    Set<Trip> trips;

//    public Integer getOrderID() {
//        return orderID;
//    }
//
//    public void setOrderID(Integer orderID) {
//        this.orderID = orderID;
//    }
//
//    public String getStartPoint() {
//        return startPoint;
//    }
//
//    public void setStartPoint(String startPoint) {
//        this.startPoint = startPoint;
//    }
//
//    public String getEndPoint() {
//        return endPoint;
//    }
//
//    public void setEndPoint(String endPoint) {
//        this.endPoint = endPoint;
//    }
//
//    public UserEntity getUser() {
//        return user;
//    }
//
//    public void setUser(UserEntity user) {
//        this.user = user;
//    }
//
//    public Set<Trip> getTrips() {
//        return trips;
//    }
//
//    public void setTrips(Set<Trip> trips) {
//        this.trips = trips;
//    }
}
