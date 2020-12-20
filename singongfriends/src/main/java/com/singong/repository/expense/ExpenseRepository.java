package com.singong.repository.expense;

import com.singong.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository extends JpaRepository<Expense, Integer>, CustomExpenseRepository {
}
