package com.mytaxi.taxiapplication.dto;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class OfferDTO {
    BigDecimal price;
    String taxiName;
    String description;
}
