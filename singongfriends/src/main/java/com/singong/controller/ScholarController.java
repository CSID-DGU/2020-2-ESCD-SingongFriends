package com.singong.controller;

import com.singong.dto.ScholarDTO;
import com.singong.model.Scholar;
import com.singong.repository.scholar.ScholarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class ScholarController {

    private final ScholarRepository scholarRepository;

    @PostMapping("/scholars")
    public ResponseEntity<Boolean> addScholars(@RequestBody List<ScholarDTO.ScholarCreate> scholars) {
        for (ScholarDTO.ScholarCreate scholar: scholars) {
            scholarRepository.save(new Scholar(scholar.getFund(), scholar.getMoney()));
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/scholars")
    public ResponseEntity<List<Scholar>> getAllScholars() {
        List<Scholar> scholars = scholarRepository.findAll();
        return new ResponseEntity<>(scholars, HttpStatus.OK);
    }

}
