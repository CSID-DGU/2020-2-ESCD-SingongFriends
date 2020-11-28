package com.singong.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.singong.dto.PaymentDTO;
import com.singong.model.Semester;
import com.singong.repository.semester.SemesterRepository;
import com.singong.repository.student.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Map;

@Controller
@RequiredArgsConstructor
public class RootController {

    private static String currSemester = "20202";
    private final SemesterRepository semesterRepository;
    private final StudentRepository studentRepository;
    private ObjectMapper objectMapper = new ObjectMapper();

    @GetMapping("/curr-semester")
    public ResponseEntity<Integer> getSemester() {
        return new ResponseEntity<>(Integer.parseInt(currSemester), HttpStatus.OK);
    }

    @PostMapping("/semesters")
    public ResponseEntity<Boolean> addSemesters(@RequestBody List<Semester> semesters) {
        semesterRepository.saveAll(semesters);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @GetMapping("/semesters")
    public ResponseEntity<List<Semester>> getAllSemester() {
        List<Semester> result = semesterRepository.findAll();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PutMapping("/semester/{newSemester}")
    public ResponseEntity<Boolean> setSemester(@PathVariable("newSemester") String newSemester) {
        currSemester = newSemester;
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping("/payment")
    public ResponseEntity<Object> payment(@RequestBody PaymentDTO.PayDTO req) {
        WebClient webClient = WebClient.create("https://open.ifprod.cc");
        //openIdBody.setAll(maps);

        String body = "{\n" +
                "\"openId\":\""+ req.getOpenId() + "\",\n" +
                "\"amount\":"+ req.getAmount() + "\n" +
                "}";
        String result = webClient.mutate()
            .build()
            .post()
                .uri("/api/v1/shoots/pay")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .bodyValue(body)
                .retrieve().bodyToMono(String.class).block();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
