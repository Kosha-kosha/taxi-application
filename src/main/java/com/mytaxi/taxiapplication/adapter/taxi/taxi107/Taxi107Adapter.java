package com.mytaxi.taxiapplication.adapter.taxi.taxi107;

import com.mytaxi.taxiapplication.adapter.address.impl.model.Location;
import com.mytaxi.taxiapplication.adapter.taxi.BaseTaxiAdapter;
import com.mytaxi.taxiapplication.adapter.taxi.taxi107.model.Info;
import com.mytaxi.taxiapplication.adapter.taxi.taxi107.model.Point;
import com.mytaxi.taxiapplication.adapter.taxi.taxi107.model.Price107Request;
import com.mytaxi.taxiapplication.adapter.taxi.taxi107.model.Price107Response;
import com.mytaxi.taxiapplication.adapter.taxi.taxi107.model.Route;
import com.mytaxi.taxiapplication.dto.OfferDTO;
import com.mytaxi.taxiapplication.dto.OrderDTO;
import com.mytaxi.taxiapplication.exception.AddressNotFoundException;
import com.mytaxi.taxiapplication.service.AddressValidService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
public class Taxi107Adapter implements BaseTaxiAdapter {
    private static final String HEADER_NAME = "hive-context";
    private static final String HEADER_VALUE = "170000000054941";

    @Autowired
    private AddressValidService addressValidService;

    @Value("${adapters.107.url}")
    private String url;

    @Override
    public List<OfferDTO> getOffers(OrderDTO order) throws AddressNotFoundException {

        log.info("url {}", url);

        Location startLocation = addressValidService.findAddress(order.getStartPoint());
        Location finishLocation = addressValidService.findAddress(order.getFinishPoint());

        Price107Request request = Price107Request.builder()
                .options(new Object[]{})
                .route(List.of(
                        Route.builder()
                                .id(startLocation.getId())
                                .info(Info.builder()
                                        .house(order.getStartPoint().getHomeNumber())
                                        .build())
                                .coordinates(
                                        Point.builder()
                                                .coordinates(startLocation.getCoordinates().getCoordinates())
                                                .type("Point")
                                                .build()
                                )
                                .build(),
                        Route.builder()
                                .id(finishLocation.getId())
                                .info(Info.builder()
                                        .house(order.getFinishPoint().getHomeNumber())
                                        .build())
                                .coordinates(
                                        Point.builder()
                                                .coordinates(finishLocation.getCoordinates().getCoordinates())
                                                .type("Point")
                                                .build()
                                )
                                .build()
                ))
                .build();

        RestTemplate restTemplate = new RestTemplate();
        restTemplate.setMessageConverters(getJsonMessageConverters());

        Price107Response response =
                restTemplate.postForObject(url, getHttpEntity(request, Map.of(HEADER_NAME, HEADER_VALUE)), Price107Response.class);
        return List.of(priceResponseToOffer(response));
    }

    @Override
    public String getTaxiName() {
        return "107";
    }

    private static OfferDTO priceResponseToOffer(Price107Response response) {
        return OfferDTO.builder()
                .price(response.getTotal())
                .taxiName("107")
                .build();
    }

    private List<HttpMessageConverter<?>> getJsonMessageConverters() {
        List<HttpMessageConverter<?>> converters = new ArrayList<>();
        converters.add(new MappingJackson2HttpMessageConverter());
        return converters;
    }

    private HttpEntity<?> getHttpEntity(Price107Request request, Map<String, String> headersMap) {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headersMap.forEach(headers::set);
        return new HttpEntity<>(request, headers);
    }
}
