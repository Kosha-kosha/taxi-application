package com.mytaxi.taxiapplication.models;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Offer {
    BigDecimal price;
    String taxiName;
    String description;
}
