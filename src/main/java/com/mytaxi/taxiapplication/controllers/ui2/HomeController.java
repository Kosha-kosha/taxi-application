package com.mytaxi.taxiapplication.controllers.ui2;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("")
public class HomeController {

    //    @GetMapping
//    public String greeting(Model model) {
//        model.addAttribute("name", "Home page");
//        return "Такси Столица";
//    }
    @GetMapping
    public String start() {
        return "startPage";
    }

//    @GetMapping()
//    public String recoverPass(@RequestParam(value = "input_start_point", required = false) String input_start_point,
//                              @RequestParam(value = "input_finish_point", required = false) String input_finish_point, Model model) {
//        System.out.println("Hello world" + input_start_point + " " + input_finish_point);
//        return "Такси Столица";
//    }

//    @GetMapping("/search")
//    public String testInputsMethod(Map<String, Object> model, Model model1){
//        model1.addAttribute("name", "Home page");
//        model.put("testMessage", "СЛАВА УКРАИНЕ");
//        return "test";
//    }

}