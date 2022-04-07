package com.mytaxi.taxiapplication.adapter;

import com.mytaxi.taxiapplication.models.Offer;
import com.mytaxi.taxiapplication.models.Order;

import java.util.List;

public interface BaseTaxiAdapter {
    List<Offer> getOffers(Order order);

    String getTaxiName();
}
