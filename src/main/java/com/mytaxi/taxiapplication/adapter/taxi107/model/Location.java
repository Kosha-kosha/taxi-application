package com.mytaxi.taxiapplication.adapter.taxi107.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Location {
//    @JsonProperty("0")
//    String x;
//    @JsonProperty("1")
//    String y;
    Coordinates coordinates;
    String id;
    Map<String, String> info;
}
