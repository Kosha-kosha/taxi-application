package com.mytaxi.taxiapplication.controllers.ui2;

import com.mytaxi.taxiapplication.dto.UserDTO;
import com.mytaxi.taxiapplication.exception.UserAlreadyExistException;
import com.mytaxi.taxiapplication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;

@Controller
@RequestMapping("/registration")
public class RegistrationController {
    @Autowired
    private UserService userService;

    @GetMapping()
    public String registration(Model model) {
        model.addAttribute("userData", new UserDTO());

        return "account/registration";
    }

    @PostMapping("/register")
    public String addUser(@Valid UserDTO userDTO, BindingResult bindingResult, Model model) {

        if (bindingResult.hasErrors()) {
            model.addAttribute("registrationForm", userDTO);
            return "account/registration";
        }
        try {
            userService.saveUser(userDTO);
        } catch (UserAlreadyExistException e) {
            bindingResult.rejectValue("phoneNumber", "userDTO.phoneNumber", "An account already exists for this name.");
            model.addAttribute("registrationForm", userDTO);
            return "account/registration";
        }
        return "redirect:/user/home";
    }
}
