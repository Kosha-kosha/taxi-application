package com.mytaxi.taxiapplication.adapter.address;

import com.mytaxi.taxiapplication.adapter.address.impl.model.Address;
import com.mytaxi.taxiapplication.adapter.address.impl.model.Location;
import com.mytaxi.taxiapplication.exception.AddressNotFoundException;

public interface AddressAdapter {
    Location getLocation(Address address) throws AddressNotFoundException;
}
