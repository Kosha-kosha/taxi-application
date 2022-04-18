package com.mytaxi.taxiapplication.adapter.taxi;

import com.mytaxi.taxiapplication.model.Offer;
import com.mytaxi.taxiapplication.model.Order;

import java.util.List;

public interface BaseTaxiAdapter {
    List<Offer> getOffers(Order order);

    String getTaxiName();
}
