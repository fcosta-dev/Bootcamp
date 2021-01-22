package br.com.globallabs.spring.webmvc.controller;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class JediController {

    @GetMapping("/jedi/")
    public String jedi(){
        return "jedi";
    }
}
