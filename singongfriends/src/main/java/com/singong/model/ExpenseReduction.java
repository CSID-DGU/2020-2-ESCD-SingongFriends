package com.singong.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class ExpenseReduction {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private int expenseReductionId;

    private String title;

    private int reductionAmount;

    public ExpenseReduction(String title, int reductionAmount) {
        this.title = title;
        this.reductionAmount = reductionAmount;
    }
}
