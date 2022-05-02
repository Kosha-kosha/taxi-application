package com.mytaxi.taxiapplication.dto;

import com.mytaxi.taxiapplication.adapter.address.impl.model.Address;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)

public class OrderDTO {
   Address startPoint;
   Address finishPoint;
   String description;
}
