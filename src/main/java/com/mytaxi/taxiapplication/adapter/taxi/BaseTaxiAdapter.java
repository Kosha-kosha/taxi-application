package com.mytaxi.taxiapplication.adapter.taxi;

import com.mytaxi.taxiapplication.exception.AddressNotFoundException;
import com.mytaxi.taxiapplication.dto.OfferDTO;
import com.mytaxi.taxiapplication.dto.OrderDTO;

import java.util.List;

public interface BaseTaxiAdapter {
    List<OfferDTO> getOffers(OrderDTO order) throws AddressNotFoundException;

    String getTaxiName();
}
