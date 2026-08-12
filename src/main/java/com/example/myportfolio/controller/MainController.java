package com.example.myportfolio.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.myportfolio.dto.EnquiryDto;
import com.example.myportfolio.repo.EnquiryRepo;
import com.example.myportfolio.services.Enquiry;

@Controller
public class MainController {
	
	@Autowired
	EnquiryRepo enrepo;
	
	@GetMapping({"/","/index"})
	public String show(Model model)
	{
		EnquiryDto edto=new EnquiryDto();
		model.addAttribute("edto", edto);
		return "index";
	}
	
	@PostMapping("/contact")
	public String saveEnquiry(@ModelAttribute EnquiryDto edto, RedirectAttributes attrib)
	{
		Enquiry enq=new Enquiry();
		enq.setName(edto.getName());
		enq.setSubject(edto.getSubject());
		enq.setMessage(edto.getMessage());
		enq.setEmail(edto.getEmail());
		enq.setDate(LocalDate.now().toString());
		enrepo.save(enq);
		attrib.addFlashAttribute("msg", "Form submited Successfully ! ");
		return "redirect:/#contact";
	}

}
