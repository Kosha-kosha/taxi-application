package com.mytaxi.taxiapplication.adapter.address.impl.model;

import com.mytaxi.taxiapplication.adapter.taxi.taxi107.model.Point;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.math.BigInteger;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Location {
    Point coordinates;
    BigInteger id;
}
