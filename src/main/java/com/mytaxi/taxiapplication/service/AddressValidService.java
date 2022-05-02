package com.mytaxi.taxiapplication.service;

import com.mytaxi.taxiapplication.adapter.address.AddressAdapter;
import com.mytaxi.taxiapplication.adapter.address.impl.model.Address;
import com.mytaxi.taxiapplication.adapter.address.impl.model.Location;
import com.mytaxi.taxiapplication.exception.AddressNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressValidService {
    @Autowired
    private AddressAdapter taxiAddressAdapter;

    public Location findAddress(Address address) throws AddressNotFoundException {
        return taxiAddressAdapter.getLocation(address);
    }
}
