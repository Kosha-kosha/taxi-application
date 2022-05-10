package com.mytaxi.taxiapplication.controllers.ui2;

import com.mytaxi.taxiapplication.dto.ReviewDTO;
import com.mytaxi.taxiapplication.service.ReviewsService;
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
@RequestMapping("/user/help")
public class HelpPageController {
    @Autowired
    ReviewsService reviewsService;

    @GetMapping()
    public String help() {
        return "core/helpPage";
    }

    @GetMapping("/privacy")
    public String privacyPolicy() {
        return "core/privacyPage";
    }

    @GetMapping("/review")
    public String leaveReview(Model model) {
        model.addAttribute("review", new ReviewDTO());
        return "core/leaveReviewPage";
    }

    @PostMapping("/review")
    public String saveReview(@ModelAttribute("review") ReviewDTO review, Principal principal) {
        reviewsService.saveReview(principal.getName(), review, LocalDateTime.now());
        return "redirect:/user/help";
    }
}

