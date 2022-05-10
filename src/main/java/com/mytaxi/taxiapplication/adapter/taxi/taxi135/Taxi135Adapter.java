package com.mytaxi.taxiapplication.adapter.taxi.taxi135;

import com.mytaxi.taxiapplication.adapter.address.impl.model.Location;
import com.mytaxi.taxiapplication.adapter.taxi.BaseTaxiAdapter;
import com.mytaxi.taxiapplication.adapter.taxi.taxi135.model.Coordinates;
import com.mytaxi.taxiapplication.adapter.taxi.taxi135.model.Price135Request;
import com.mytaxi.taxiapplication.adapter.taxi.taxi135.model.Price135Response;
import com.mytaxi.taxiapplication.dto.OfferDTO;
import com.mytaxi.taxiapplication.dto.OrderDTO;
import com.mytaxi.taxiapplication.exception.AddressNotFoundException;
import com.mytaxi.taxiapplication.service.AddressValidService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
public class Taxi135Adapter implements BaseTaxiAdapter {
    @Autowired
    private AddressValidService addressValidService;

    @Value("${adapters.135.url}")
    private String url;

    @Override
    public List<OfferDTO> getOffers(OrderDTO order) throws AddressNotFoundException {
        log.info("url {}", url);

        Location startPoint = addressValidService.findAddress(order.getStartPoint());
        Location finishPoint = addressValidService.findAddress(order.getFinishPoint());

        Price135Request request = Price135Request.builder()
                .locations(List.of(
                        Coordinates.builder()
                                .lg(getLgCoordinates(startPoint))
                                .lt(getLtCoordinates(startPoint))
                                .build(),
                        Coordinates.builder()
                                .lg(getLgCoordinates(finishPoint))
                                .lt(getLtCoordinates(finishPoint))
                                .build()
                ))
                .build();


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
                .getCoordinates()[0].toString();
    }

    private String getLtCoordinates(Location location) {
        return location
                .getCoordinates()
                .getCoordinates()[1].toString();
    }

    private static OfferDTO priceResponseToOffer(Price135Response response) {
        return OfferDTO.builder()
                .price(response.getPrice())
                .taxiName("135")
                .description(response.getTariffPrice().getName())
                .build();
    }

    @Override
    public String getTaxiName() {
        return "135";
    }
}
