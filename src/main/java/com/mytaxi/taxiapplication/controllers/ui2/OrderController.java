package com.mytaxi.taxiapplication.controllers.ui2;

import com.mytaxi.taxiapplication.dto.OfferDTO;
import com.mytaxi.taxiapplication.dto.OrderDTO;
import com.mytaxi.taxiapplication.service.BestOfferService;
import com.mytaxi.taxiapplication.service.EmailService;
import com.mytaxi.taxiapplication.service.OrderService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.mail.MessagingException;
import java.security.Principal;
import java.time.LocalDateTime;

@Slf4j
@Controller
@RequestMapping("/user/order")
public class OrderController {
    @Autowired
    private BestOfferService bestOfferService;
    @Autowired
    private OrderService orderService;
    @Autowired
    private EmailService emailService;
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
    public String callCar(@ModelAttribute("offerDTO") OfferDTO offerDTO, Principal principal) {
        orderService.addOrder(principal.getName(), currentOrder, offerDTO, LocalDateTime.now());
        try {
            emailService.sendMessage(String.format("%s -- %s", currentOrder.toString(), offerDTO.toString()),
                    "ne.zaprezcheno@gmail.com", "lepeskintema2001@mail.ru");
            log.info("SENDING SUCCESS");
        } catch (MessagingException e) {
            log.info("Failed to send message...", e);
        }
        return "redirect:/user/home";
    }
}
