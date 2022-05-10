package com.mytaxi.taxiapplication.service;

import com.mytaxi.taxiapplication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerAccountService {
    @Autowired
    UserRepository userRepository;

    public boolean updatePassword(String userName, String newPassword) {
        userRepository.resetPassword(userName, newPassword);
        return true;
    }

    public boolean updatePhoneNumber(String userName, String newPhoneNumber) {
        userRepository.resetPhoneNumber(userName, newPhoneNumber);
        return true;
    }
    public String getPassword(String userName) {
        return userRepository.getPassword(userName);
    }

    public String getPhoneNumber(String userName) {
        return userRepository.getPhoneNumber(userName);
    }
}
