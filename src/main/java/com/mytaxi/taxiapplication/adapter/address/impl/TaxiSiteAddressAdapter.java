package com.mytaxi.taxiapplication.adapter.address.impl;

import com.mytaxi.taxiapplication.adapter.address.AddressAdapter;
import com.mytaxi.taxiapplication.adapter.address.impl.model.Address;
import com.mytaxi.taxiapplication.adapter.address.impl.model.HomeResponse;
import com.mytaxi.taxiapplication.adapter.address.impl.model.Location;
import com.mytaxi.taxiapplication.adapter.address.impl.model.StreetResponse;
import com.mytaxi.taxiapplication.adapter.taxi.taxi107.model.Point;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.web.client.RestTemplate;

import java.math.BigInteger;
import java.util.Arrays;
import java.util.Collections;
import java.util.Map;

public class TaxiSiteAddressAdapter implements AddressAdapter {
    private static final String HEADER_NAME = "hive-context";
    private static final String HEADER_VALUE = "170000000054941";
    private static final String URL_ID = "https://taxi107-minsk.hivelogin.ru/api/client/web/1.0/address/address?pattern=";
    private static final String URL_COORDINATES = "https://taxi107-minsk.hivelogin.ru/api/client/web/1.0/address/point?pattern=%s&parent=%s";
    private static TaxiSiteAddressAdapter instance;

    private TaxiSiteAddressAdapter() {
    }

    public static TaxiSiteAddressAdapter getInstance() {
        if (instance == null) {
            instance = new TaxiSiteAddressAdapter();
        }
        return instance;
    }

    @Override
    public Location getLocation(Address address) {
        BigInteger[] IDs = getStreetID(address.getStreet());
        if (IDs.length >= 1) {
            return Location.builder()
                    .coordinates(getHomeCoordinates(address.getHomeNumber(), IDs[0])[0])
                    .id(IDs[0])
                    .build();
        }
        return new Location();
    }

    private BigInteger[] getStreetID(String streetName) {
        RestTemplate restTemplate = new RestTemplate();
        StreetResponse[] response =
                restTemplate.exchange(URL_ID + streetName,
                        HttpMethod.GET,
                        getHttpEntity(Map.of(HEADER_NAME, HEADER_VALUE)),
                        StreetResponse[].class).getBody();

        return Arrays.stream(response).map(body -> body.getLevels()[0].getId()).toArray(BigInteger[]::new);
    }

    private Point[] getHomeCoordinates(String homeNumber, BigInteger ID) {
        RestTemplate restTemplate = new RestTemplate();
        HomeResponse[] response = restTemplate.exchange(String.format(URL_COORDINATES, homeNumber, ID.toString()),
                HttpMethod.GET,
                getHttpEntity(Map.of(HEADER_NAME, HEADER_VALUE)),
                HomeResponse[].class).getBody();

//        Arrays.stream(response).forEach(System.out::println);
        return Arrays.stream(response).map(HomeResponse::getCoordinates).toArray(Point[]::new);
    }

    private HttpEntity<?> getHttpEntity(Map<String, String> headersMap) {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headersMap.forEach(headers::set);
        return new HttpEntity<>(headers);
    }
}
