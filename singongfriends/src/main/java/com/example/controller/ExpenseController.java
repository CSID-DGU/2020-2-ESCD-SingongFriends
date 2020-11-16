package com.example.controller;

import com.example.dto.ExpenseDTO;
import com.example.model.Expense;
import com.example.repository.expense.ExpenseRepository;
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
public class ExpenseController {

    private final ExpenseRepository expenseRepository;

    @PostMapping("/expenses")
    public ResponseEntity<Boolean> addExpenses(@RequestBody List<ExpenseDTO.Create> expenses) {
        for (ExpenseDTO.Create expense : expenses) {
            expenseRepository.save(new Expense(expense.getAmountMoney()));
        }
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @GetMapping("/expenses")
    public ResponseEntity<List<Expense>> getAllExpenses() {
        return new ResponseEntity<>(expenseRepository.findAll(), HttpStatus.OK);
    }
}
