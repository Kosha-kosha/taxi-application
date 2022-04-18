package com.mytaxi.taxiapplication.adapter.taxi.taxi107;

import com.mytaxi.taxiapplication.adapter.address.impl.TaxiSiteAddressAdapter;
import com.mytaxi.taxiapplication.adapter.taxi.BaseTaxiAdapter;
import com.mytaxi.taxiapplication.adapter.taxi.taxi107.model.Info;
import com.mytaxi.taxiapplication.adapter.taxi.taxi107.model.Point;
import com.mytaxi.taxiapplication.adapter.taxi.taxi107.model.Price107Request;
import com.mytaxi.taxiapplication.adapter.taxi.taxi107.model.Price107Response;
import com.mytaxi.taxiapplication.adapter.taxi.taxi107.model.Route;
import com.mytaxi.taxiapplication.model.Offer;
import com.mytaxi.taxiapplication.model.Order;
import lombok.extern.slf4j.Slf4j;
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
    private TaxiSiteAddressAdapter addressAdapter = TaxiSiteAddressAdapter.getInstance();

    @Value("${adapters.107.url}")
    private String url;

    @Override
    public List<Offer> getOffers(Order order) {

        log.info("url {}", url);

        Price107Request request = Price107Request.builder()
                .options(new Object[]{})
                .route(List.of(
                        Route.builder()
                                .id(addressAdapter.getLocation(order.getStartPoint()).getId())
                                .info(Info.builder()
                                        .house(order.getStartPoint().getHomeNumber())
                                        .build())
                                .coordinates(
                                        Point.builder()
                                                .coordinates(addressAdapter.getLocation(order.getStartPoint())
                                                        .getCoordinates().getCoordinates())
                                                .type("Point")
                                                .build()
                                )
                                .build(),
                        Route.builder()
                                .id(addressAdapter.getLocation(order.getFinishPoint()).getId())
                                .info(Info.builder()
                                        .house(order.getFinishPoint().getHomeNumber())
                                        .build())
                                .coordinates(
                                        Point.builder()
                                                .coordinates(addressAdapter.getLocation(order.getFinishPoint())
                                                        .getCoordinates().getCoordinates())
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
//        System.out.println(response.getTotal());
        return List.of(priceResponseToOffer(response));
    }

    @Override
    public String getTaxiName() {
        return "107";
    }

    private static Offer priceResponseToOffer(Price107Response response) {
        return Offer.builder()
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
