package com.mytaxi.taxiapplication.adapter.taxi107;

import com.mytaxi.taxiapplication.adapter.BaseTaxiAdapter;
import com.mytaxi.taxiapplication.adapter.taxi107.model.Coordinates;
import com.mytaxi.taxiapplication.adapter.taxi107.model.Location;
import com.mytaxi.taxiapplication.adapter.taxi107.model.Price107Request;
import com.mytaxi.taxiapplication.adapter.taxi107.model.Price107Response;
import com.mytaxi.taxiapplication.models.Offer;
import com.mytaxi.taxiapplication.models.Order;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
@Service
public class Taxi107Adapter implements BaseTaxiAdapter {

    @Value("${adapters.107.url}")
    private String url;

    @Override
    public List<Offer> getOffers(Order order) {

        log.info("url {}", url);

        Price107Request request = Price107Request.builder()
                .options(new Object[]{})
                .route(List.of(
                        Location.builder()
                                .coordinates(
                                        Coordinates.builder()
                                                .coordinates(new String[]{"27.606411", "53.931236"})
                                                .type("Point")
                                                .build()
                                )
                                .id("170000000780389")
                                .info(Map.of("house", "9"))
                                .build(),
                        Location.builder()
                                .coordinates(
                                        Coordinates.builder()
                                                .coordinates(new String[]{"27.466948", "53.862442"})
                                                .type("Point")
                                                .build()
                                )
                                .id("170000000776418")
                                .info(Map.of("house", "35"))
                                .build()
                ))
                .build();

        HttpHeaders headers = new HttpHeaders();
        headers.set("hive-context", "170000000054941");
        HttpEntity entity = new HttpEntity(request, headers);

        RestTemplate restTemplate = new RestTemplate();
        Price107Response[] responses = restTemplate.postForObject(url, entity, Price107Response[].class);

        return Arrays.stream(responses)
                .map(Taxi107Adapter::mapPriceResponseToOffer)
                .collect(Collectors.toList());
    }

    @Override
    public String getTaxiName() {
        return "107";
    }

    private static Offer mapPriceResponseToOffer(Price107Response response){
        return Offer.builder()
                .price(response.getPrice())
                .taxiName("107")
                .build();
    }
}
