package com.mytaxi.taxiapplication.controllers.api;

import com.mytaxi.taxiapplication.model.Order;
import com.mytaxi.taxiapplication.service.BestOfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
public class TestController {
    @Autowired
    private BestOfferService bestOfferService;

    @GetMapping("/api/v1/offers")
//    public BestOffer getBestOffers() {
    public List<Map<String, BigDecimal>> getBestOffers() {
        Order order = new Order();
        bestOfferService.findBestOffers(order).getOffers().forEach(offer -> System.out.println(offer.getPrice()));
        List<Map<String, BigDecimal>> prices = new ArrayList<>();
        bestOfferService.findBestOffers(order)
                .getOffers()
                .stream()
                .forEach(offer -> prices.add(Map.of(offer.getTaxiName(), offer.getPrice())) );

//       return bestOfferService.findBestOffers(order);
        return prices;
    }
}
