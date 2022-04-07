package com.mytaxi.taxiapplication.service;

import com.mytaxi.taxiapplication.adapter.BaseTaxiAdapter;
import com.mytaxi.taxiapplication.models.BestOffer;
import com.mytaxi.taxiapplication.models.Offer;
import com.mytaxi.taxiapplication.models.Order;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class BestOfferService {
    Set<BaseTaxiAdapter> taxiAdapters;


    public BestOffer findBestOffers(Order order){
       List<Offer> offers = new ArrayList<>();

       taxiAdapters.forEach(adapter -> offers.addAll(adapter.getOffers(order)));

       //offers.sort();

        return BestOffer.builder()
                .offers(offers)
                .order("DSC")
                .build();
    }

}
