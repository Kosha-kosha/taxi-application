package com.mytaxi.taxiapplication.controllers.ui2;

import com.mytaxi.taxiapplication.dto.UserDataDTO;
import com.mytaxi.taxiapplication.exception.UserAlreadyExistException;
import com.mytaxi.taxiapplication.service.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;

@Controller
@RequestMapping("/account")
public class AccountController {
    @Autowired
    private UserDetailsServiceImpl userService;

    @GetMapping("/register")
    public String registration(Model model) {
        model.addAttribute("userData", new UserDataDTO());

        return "account/registration";
    }

    @PostMapping("/register")
    public String addUser(@Valid UserDataDTO userData, BindingResult bindingResult, Model model) {

        if (bindingResult.hasErrors()) {
            model.addAttribute("registrationForm", userData);
            return "account/registration";
        }
        try {
            userService.saveUser(userData);
        } catch (UserAlreadyExistException e) {
            bindingResult.rejectValue("phoneNumber", "userData.phoneNumber", "An account already exists for this name.");
            model.addAttribute("registrationForm", userData);
            return "account/registration";
        }
        return "redirect:/user/home";
    }
}
