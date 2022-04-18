package com.mytaxi.taxiapplication.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
public class BestOffer {
    String order;
    List<Offer> offers;
}
