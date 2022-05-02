package com.mytaxi.taxiapplication.controllers.ui2;

import com.mytaxi.taxiapplication.dto.OrderDTO;
import com.mytaxi.taxiapplication.service.BestOfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user/order")
public class OrderController {

    @Autowired
    private BestOfferService bestOfferService;

    @GetMapping("/new")
    public String newOrder(Model model) {
        model.addAttribute("order", new OrderDTO());
        return "core/orderPage";
    }

    @PostMapping()
    public String searchCars(@ModelAttribute("order") OrderDTO order, Model model) {
        model.addAttribute("offers", bestOfferService.findBestOffers(order));
        return "core/offerPage";
    }
}
