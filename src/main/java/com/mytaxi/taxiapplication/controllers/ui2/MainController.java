package com.mytaxi.taxiapplication.controllers.ui2;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping()
public class MainController {

    @GetMapping("/")
    public String all() {
        return "redirect:/user/home";
    }

    @GetMapping("/user/home")
    public String user() {
        return "core/homePage";
    }

    @GetMapping("/admin")
    public String admin() {
        return "Admin Page";
    }

}