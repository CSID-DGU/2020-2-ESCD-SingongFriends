package com.singong.controller;

import com.singong.dto.ExpenseDTO;
import com.singong.model.Expense;
import com.singong.repository.expense.ExpenseRepository;
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
    public ResponseEntity<Boolean> addExpenses(@RequestBody List<ExpenseDTO.ExpenseCreate> expenses) {
        for (ExpenseDTO.ExpenseCreate expense : expenses) {
            expenseRepository.save(new Expense(expense.getAmountMoney()));
        }
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @GetMapping("/expenses")
    public ResponseEntity<List<Expense>> getAllExpenses() {
        return new ResponseEntity<>(expenseRepository.findAll(), HttpStatus.OK);
    }
}
