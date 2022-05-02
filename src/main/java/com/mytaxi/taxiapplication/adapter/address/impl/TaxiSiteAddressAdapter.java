package com.mytaxi.taxiapplication.adapter.address.impl;

import com.mytaxi.taxiapplication.adapter.address.AddressAdapter;
import com.mytaxi.taxiapplication.adapter.address.impl.model.Address;
import com.mytaxi.taxiapplication.adapter.address.impl.model.HomeResponse;
import com.mytaxi.taxiapplication.adapter.address.impl.model.Location;
import com.mytaxi.taxiapplication.adapter.address.impl.model.StreetResponse;
import com.mytaxi.taxiapplication.adapter.taxi.taxi107.model.Point;
import com.mytaxi.taxiapplication.exception.AddressNotFoundException;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.math.BigInteger;
import java.util.Arrays;
import java.util.Collections;
import java.util.Map;

@Component
public class TaxiSiteAddressAdapter implements AddressAdapter {
    private static final String HEADER_NAME = "hive-context";
    private static final String HEADER_VALUE = "170000000054941";
    private static final String URL_ID = "https://taxi107-minsk.hivelogin.ru/api/client/web/1.0/address/address?pattern=";
    private static final String URL_COORDINATES = "https://taxi107-minsk.hivelogin.ru/api/client/web/1.0/address/point?pattern=%s&parent=%s";

    @Override
    public Location getLocation(Address address) throws AddressNotFoundException {
        BigInteger[] IDs = getStreetID(address.getStreet());
        return Location.builder()
                .coordinates(getHomeCoordinates(address.getHomeNumber(), IDs[0]))
                .id(IDs[0])
                .build();
    }

    private BigInteger[] getStreetID(String streetName) throws AddressNotFoundException {
        RestTemplate restTemplate = new RestTemplate();
        StreetResponse[] response =
                restTemplate.exchange(URL_ID + streetName,
                        HttpMethod.GET,
                        getHttpEntity(Map.of(HEADER_NAME, HEADER_VALUE)),
                        StreetResponse[].class).getBody();

        assert response != null;
        if (response.length != 0) {
            return Arrays.stream(response).map(body -> body.getLevels()[0].getId()).toArray(BigInteger[]::new);
        } else {
            throw new AddressNotFoundException("Street not found: " + streetName);
        }
    }

    private Point getHomeCoordinates(String homeNumber, BigInteger ID) throws AddressNotFoundException {
        RestTemplate restTemplate = new RestTemplate();
        HomeResponse[] response = restTemplate.exchange(String.format(URL_COORDINATES, homeNumber, ID.toString()),
                HttpMethod.GET,
                getHttpEntity(Map.of(HEADER_NAME, HEADER_VALUE)),
                HomeResponse[].class).getBody();

        assert response != null;
        if (response.length != 0) {
            return response[0].getCoordinates();
        } else {
            throw new AddressNotFoundException("Home not found: " + homeNumber);
        }
    }

    private HttpEntity<?> getHttpEntity(Map<String, String> headersMap) {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headersMap.forEach(headers::set);
        return new HttpEntity<>(headers);
    }
}
