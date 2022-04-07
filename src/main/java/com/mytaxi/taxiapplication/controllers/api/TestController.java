package com.mytaxi.taxiapplication.controllers.api;

import com.mytaxi.taxiapplication.models.BestOffer;
import com.mytaxi.taxiapplication.models.Order;
import com.mytaxi.taxiapplication.service.BestOfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @Autowired
    private BestOfferService bestOfferService;

    @GetMapping("/api/v1/offers")
    public BestOffer getBestOffers() {
        Order order = new Order();
        bestOfferService.findBestOffers(order).getOffers().forEach(offer -> System.out.println(offer.getPrice()));

       return bestOfferService.findBestOffers(order);
    }
}
