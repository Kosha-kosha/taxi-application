package com.mytaxi.taxiapplication.adapter.taxi.taxi135;

import com.mytaxi.taxiapplication.adapter.address.impl.TaxiSiteAddressAdapter;
import com.mytaxi.taxiapplication.adapter.address.impl.model.Location;
import com.mytaxi.taxiapplication.adapter.taxi.BaseTaxiAdapter;
import com.mytaxi.taxiapplication.adapter.taxi.taxi135.model.Price135Request;
import com.mytaxi.taxiapplication.adapter.taxi.taxi135.model.Coordinates;
import com.mytaxi.taxiapplication.adapter.taxi.taxi135.model.Price135Response;
import com.mytaxi.taxiapplication.model.Offer;
import com.mytaxi.taxiapplication.model.Order;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
public class Taxi135Adapter implements BaseTaxiAdapter {
    private TaxiSiteAddressAdapter addressAdapter = TaxiSiteAddressAdapter.getInstance();
    @Value("${adapters.135.url}")
    private String url;

    @Override
    public List<Offer> getOffers(Order order) {
        log.info("url {}", url);

        Price135Request request = null;
        BigDecimal[] startPointCoordinates = addressAdapter.getLocation(order.getStartPoint()).getCoordinates().getCoordinates();
        BigDecimal[] finishPointCoordinates = addressAdapter.getLocation(order.getFinishPoint()).getCoordinates().getCoordinates();

        if (startPointCoordinates.length >= 1 && finishPointCoordinates.length >= 1) {

            request = Price135Request.builder()
                    .locations(List.of(
                            Coordinates.builder()
                                    .lg(getLgCoordinates(addressAdapter.getLocation(order.getStartPoint())))
                                    .lt(getLtCoordinates(addressAdapter.getLocation(order.getStartPoint())))
                                    .build(),
                            Coordinates.builder()
                                    .lg(getLgCoordinates(addressAdapter.getLocation(order.getFinishPoint())))
                                    .lt(getLtCoordinates(addressAdapter.getLocation(order.getFinishPoint())))
                                    .build()
                    ))
                    .build();
        }

//        System.out.println(request);

        RestTemplate restTemplate = new RestTemplate();
        Price135Response[] responses = restTemplate.postForObject(url, request, Price135Response[].class);

        return Arrays.stream(responses)
                .map(Taxi135Adapter::priceResponseToOffer)
                .collect(Collectors.toList());
    }

//    private Price135Request buildRequest(Order order){
//        return null;
//    }

    private String getLgCoordinates(Location location) {
        return location
                .getCoordinates()
                .getCoordinates()[0]
                .toString();
    }

    private String getLtCoordinates(Location location) {
        return location
                .getCoordinates()
                .getCoordinates()[1]
                .toString();
    }

    private static Offer priceResponseToOffer(Price135Response response) {
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
