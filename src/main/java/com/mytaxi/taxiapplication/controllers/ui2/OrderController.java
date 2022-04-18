package com.mytaxi.taxiapplication.controllers.ui2;

import com.mytaxi.taxiapplication.model.Order;
import com.mytaxi.taxiapplication.service.BestOfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private BestOfferService bestOfferService;

//    @GetMapping("/new")
//    public String newOrder(@RequestParam(value = "input_start_point", required = false) String input_start_point,
//                              @RequestParam(value = "input_finish_point", required = false) String input_finish_point, Model model) {
//        System.out.println("Hello world" + input_start_point + " " + input_finish_point);
//        return "Такси Столица";
//    }


    @GetMapping("/new")
    public String newOrder(Model model) {
        model.addAttribute("order", new Order());
        return "orderPage";
    }

    @PostMapping()
    public String searchCars(@ModelAttribute("order") Order order, Model model) {
        System.out.println(order.getStartPoint() + ", " + order.getFinishPoint() + ", " + order.getDescription());

//        System.out.println(adapter.getLocation(order.getStartPoint()));
//        System.out.println(adapter.getLocation(order.getFinishPoint()));
//        adapter.getLocation(Address.builder()
//                .city("Minsk")
//                .street("проспект газеты звязда")
//                .homeNumber("35")
//                .build());

        bestOfferService.findBestOffers(order).getOffers().forEach(offer -> System.out.println(offer.getPrice()));
        List<Map<String, BigDecimal>> prices = new ArrayList<>();
        bestOfferService.findBestOffers(order)
                .getOffers()
                .forEach(offer -> prices.add(Map.of(offer.getTaxiName(), offer.getPrice())) );


        model.addAttribute("link", prices);
        return "test";
//        return List.of(adapter.getLocation(order.getStartPoint()), adapter.getLocation(order.getFinishPoint()));
//        return "redirect:/order/new";
    }
}
