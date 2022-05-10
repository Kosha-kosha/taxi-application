package com.mytaxi.taxiapplication.controllers.ui2;

import com.mytaxi.taxiapplication.dto.ChangePasswordDTO;
import com.mytaxi.taxiapplication.dto.ChangePhoneNumberDTO;
import com.mytaxi.taxiapplication.service.CustomerAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;

@Controller
@RequestMapping("/user/account")
public class AccountController {
    @Autowired
    private CustomerAccountService customerAccountService;

    @GetMapping()
    public String accountMenu() {
        return "account/accountMenu";
    }

    @GetMapping("/change_password")
    public String changePassword(Model model) {
        model.addAttribute("passwordDTO", new ChangePasswordDTO());
        return "account/changePassword";
    }

    @PostMapping("/reset_password")
    public String changePassword(@ModelAttribute("passwordDTO") ChangePasswordDTO passwordDTO, Principal principal) {
        if (passwordDTO.getOldPassword().equals(customerAccountService.getPassword(principal.getName()))) {
            customerAccountService.updatePassword(principal.getName(), passwordDTO.getNewPassword());
            return "redirect:/user/home";
        }
        return "redirect:/user/account/change_password";
    }

    @GetMapping("/change_phone_number")
    public String changePhoneNumber(Model model) {
        model.addAttribute("phoneNumberDTO", new ChangePhoneNumberDTO());
        return "account/changePhoneNumber";
    }

    @PostMapping("/reset_phone_number")
    public String changePhoneNumber(@ModelAttribute("phoneNumberDTO") ChangePhoneNumberDTO phoneNumberDTO, Principal principal) {
        if (phoneNumberDTO.getOldNumber().equals(customerAccountService.getPhoneNumber(principal.getName()))) {
            customerAccountService.updatePhoneNumber(principal.getName(), phoneNumberDTO.getNewNumber());
            return "redirect:/user/home";
        }
        return "redirect:/user/account/change_phone_number";
    }
}
