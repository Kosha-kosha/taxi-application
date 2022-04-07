package com.mytaxi.taxiapplication.adapter.taxi135;

import com.mytaxi.taxiapplication.adapter.BaseTaxiAdapter;
import com.mytaxi.taxiapplication.adapter.taxi135.model.Price135Request;
import com.mytaxi.taxiapplication.adapter.taxi135.model.Location;
import com.mytaxi.taxiapplication.adapter.taxi135.model.Price135Response;
import com.mytaxi.taxiapplication.models.Offer;
import com.mytaxi.taxiapplication.models.Order;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
public class Taxi135Adapter implements BaseTaxiAdapter {


    @Value("${adapters.135.url}")
    private String url;

    @Override
    public List<Offer> getOffers(Order order) {

        log.info("url {}", url);

        Price135Request request = Price135Request.builder()
                .locations(List.of(
                        Location.builder()
                                .lg("27.5766224")
                                .lt("53.9108022")
                                .build(),
                        Location.builder()
                                .lg("27.683976288105413")
                                .lt("53.84703375")
                                .build()
                ))
                .build();

        RestTemplate restTemplate = new RestTemplate();
        Price135Response[] responses = restTemplate.postForObject(url, request, Price135Response[].class);

        return Arrays.stream(responses)
                .map(Taxi135Adapter::mapPriceResponseToOffer)
                .collect(Collectors.toList());
    }

    private Price135Request buildRequest(Order order){
        return null;
    }

    private static Offer mapPriceResponseToOffer(Price135Response response){
        return Offer.builder()
                .price(response.getPrice())
                .taxiName("135")
                .build();
    }

    @Override
    public String getTaxiName() {
        return "135";
    }
}
