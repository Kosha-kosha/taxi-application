package com.mytaxi.taxiapplication.adapter.address;

import com.mytaxi.taxiapplication.adapter.address.impl.model.Address;
import com.mytaxi.taxiapplication.adapter.address.impl.model.Location;

public interface AddressAdapter {
    Location getLocation(Address address);
}
