package com.example.repository.expense;

import com.example.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository extends JpaRepository<Expense, Integer>, CustomExpenseRepository {
}
