package com.example.repository.expense;

import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

public class ExpenseRepositoryImpl extends QuerydslRepositorySupport implements CustomExpenseRepository {

    public ExpenseRepositoryImpl() {
        super(ExpenseRepositoryImpl.class);
    }
}
