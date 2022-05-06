package com.mytaxi.taxiapplication.controllers.ui2.admin;

import com.mytaxi.taxiapplication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin_page")
public class AdminController {
    @Autowired
    UserService userDetailsService;

    @GetMapping("/show_users")
    public String showUsers(Model model) {
        model.addAttribute("list", userDetailsService.allUsers());
        return "admin/adminPage";
    }
}
