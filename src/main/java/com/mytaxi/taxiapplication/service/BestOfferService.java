package com.mytaxi.taxiapplication.service;

import com.mytaxi.taxiapplication.adapter.taxi.BaseTaxiAdapter;
import com.mytaxi.taxiapplication.dto.OfferDTO;
import com.mytaxi.taxiapplication.exception.AddressNotFoundException;
import com.mytaxi.taxiapplication.dto.OrderDTO;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Slf4j
@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class BestOfferService {
    Set<BaseTaxiAdapter> taxiAdapters;


    public List<OfferDTO> findBestOffers(OrderDTO order) {
        List<OfferDTO> offers = new ArrayList<>();

        taxiAdapters.forEach(adapter -> {
            try {
                offers.addAll(adapter.getOffers(order));
            } catch (AddressNotFoundException e) {
                log.info(e.getMessage());
            }
        });

        //offers.sort();

        return offers;
    }

}
