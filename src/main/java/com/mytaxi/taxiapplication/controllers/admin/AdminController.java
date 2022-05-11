package com.mytaxi.taxiapplication.controllers.admin;

import com.mytaxi.taxiapplication.service.BestOfferService;
import com.mytaxi.taxiapplication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private UserService userDetailsService;
    @Autowired
    private BestOfferService bestOfferService;

    @GetMapping("/all_users")
    public String showUsers(Model model) {
        model.addAttribute("users", userDetailsService.allUsers());
        return "admin/viewUsers";
    }

    @GetMapping("/popular_taxi")
    public String showMostPopularTaxi(Model model) {
        model.addAttribute("taxiName", bestOfferService.findMostPopularTaxi());
        return "admin/popularTaxi";
    }
}
