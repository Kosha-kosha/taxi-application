package com.mytaxi.taxiapplication.adapter.address.impl;

import com.mytaxi.taxiapplication.adapter.address.impl.model.Address;
import com.mytaxi.taxiapplication.adapter.address.impl.model.Location;
import com.mytaxi.taxiapplication.adapter.taxi.taxi107.model.Point;
import com.mytaxi.taxiapplication.exception.AddressNotFoundException;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.math.BigDecimal;
import java.math.BigInteger;
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class TaxiSiteAddressAdapterTest {

    @Test
    void getLocation() throws AddressNotFoundException {
        Location trueLocation = Location.builder()
                .coordinates(Point.builder()
                        .type("Point")
                        .coordinates(new BigDecimal[]{new BigDecimal("27.606411"), new BigDecimal("53.931236")})
                        .build())
                .id(new BigInteger("170000000715427"))
                .build();
        TaxiSiteAddressAdapter adapter = new TaxiSiteAddressAdapter();
        Location testLocation = adapter.getLocation(Address.builder()
                .city("Минск")
                .street("переулок калинина")
                .homeNumber("9")
                .build());
        Assertions.assertEquals(testLocation, trueLocation);
    }
}