package com.mytaxi.taxiapplication.controllers.ui2;

import com.mytaxi.taxiapplication.dto.OfferDTO;
import com.mytaxi.taxiapplication.dto.OrderDTO;
import com.mytaxi.taxiapplication.service.BestOfferService;
import com.mytaxi.taxiapplication.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;
import java.time.LocalDateTime;

@Controller
@RequestMapping("/user/order")
public class OrderController {
    @Autowired
    private BestOfferService bestOfferService;
    @Autowired
    private OrderService orderService;
    private OrderDTO currentOrder;

    @GetMapping("/new")
    public String newOrder(Model model) {
        model.addAttribute("order", new OrderDTO());
        return "core/orderPage";
    }

    @GetMapping()
    public String searchCars(@ModelAttribute("order") OrderDTO order, Model model) {
        currentOrder = order;
        model.addAttribute("offers", bestOfferService.findBestOffers(order));
        model.addAttribute("offerDTO", new OfferDTO());
        return "core/offerPage";
    }

    @PostMapping()
    public String callCar(@ModelAttribute("offerDTO") OfferDTO offerDTO, Principal principal, Model model) {
        System.out.println(currentOrder);
        System.out.println(offerDTO);
        orderService.addOrder(principal.getName(), currentOrder, offerDTO, LocalDateTime.now());
        return "redirect:/user/home";
    }
}
