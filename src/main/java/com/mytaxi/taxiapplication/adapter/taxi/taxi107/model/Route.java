package com.mytaxi.taxiapplication.adapter.taxi.taxi107.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigInteger;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Route {
    //    @JsonProperty("0")
//    String x;
//    @JsonProperty("1")
//    String y;
    BigInteger id;
    Info info;
    Point coordinates;
}
