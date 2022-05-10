package com.mytaxi.taxiapplication.service;

import com.mytaxi.taxiapplication.dto.OfferDTO;
import com.mytaxi.taxiapplication.dto.OrderDTO;
import com.mytaxi.taxiapplication.entity.OrderEntity;
import com.mytaxi.taxiapplication.entity.Trip;
import com.mytaxi.taxiapplication.entity.UserEntity;
import com.mytaxi.taxiapplication.repository.OrderRepository;
import com.mytaxi.taxiapplication.repository.TripRepository;
import com.mytaxi.taxiapplication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Service
public class OrderService {
    private OrderRepository orderRepository;
    private UserRepository userRepository;
//    private TripService tripService;

    @Autowired
    private TripRepository tripRepository;

    @Autowired
    public void setOrderRepository(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

//    @Autowired
//    public void setTripService(TripService tripService) {
//        this.tripService = tripService;
//    }


    public boolean addOrder(String userName, OrderDTO orderDTO, OfferDTO offerDTO, LocalDateTime dateTime) {
        OrderEntity orderEntity = mapOrderDTOToEntity(userName, orderDTO, offerDTO, dateTime);

        orderRepository.save(orderEntity);

        Trip trip = mapToRoute(offerDTO, dateTime);

        tripRepository.saveAll(Set.of(trip));

        orderEntity.getTrips().addAll(Set.of(trip));
//        System.out.println(mapOrderDTOToEntity(userName, orderDTO, offerDTO, dateTime));
        orderRepository.save(orderEntity);
//        tripService.addRoute(offerDTO, dateTime);
        return true;
    }

    private OrderEntity mapOrderDTOToEntity(String userName, OrderDTO orderDTO, OfferDTO offerDTO, LocalDateTime dateTime) {
        return OrderEntity.builder()
                .startPoint(orderDTO.getStartPoint().toString())
                .endPoint(orderDTO.getFinishPoint().toString())
                .user(userRepository.findByUserName(userName).orElse(new UserEntity()))
                .trips(new HashSet<>())
                .build();
    }

    private Trip mapToRoute(OfferDTO offer, LocalDateTime dateTime) {
        return Trip.builder()
                .price(offer.getPrice().toString())
                .taxiName(offer.getTaxiName())
                .date(dateTime)
                .build();
    }
}
