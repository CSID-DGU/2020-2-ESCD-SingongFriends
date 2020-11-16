package com.example.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Expense {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "expenseId")
    private int expenseId;

    private int amountMoney;

    public Expense(int amountMoney) {
        this.amountMoney = amountMoney;
    }
}
