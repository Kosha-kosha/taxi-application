package com.mytaxi.taxiapplication.controllers.ui2;

import com.mytaxi.taxiapplication.models.Order;
import com.mytaxi.taxiapplication.service.BestOfferService;
import com.mytaxi.taxiapplication.service.PriceCalculator;
import com.mytaxi.taxiapplication.service.impl.Taxi_135_Calculator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

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
        model.addAttribute("order",new Order());
        return "orderPage";
    }

    @PostMapping()
    public String searchCars(@ModelAttribute("order") Order order, Model model) {
        System.out.println(order.getStartPoint() + ", " + order.getFinishPoint());
        PriceCalculator calculator = new Taxi_135_Calculator();
        model.addAttribute("link", calculator.getOrdersPrice());
        return "test";
//        return "redirect:/order/new";
    }
}
