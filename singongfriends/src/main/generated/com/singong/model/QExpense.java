package com.singong.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QExpense is a Querydsl query type for Expense
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QExpense extends EntityPathBase<Expense> {

    private static final long serialVersionUID = -1533511151L;

    public static final QExpense expense = new QExpense("expense");

    public final NumberPath<Integer> amountMoney = createNumber("amountMoney", Integer.class);

    public final NumberPath<Integer> expenseId = createNumber("expenseId", Integer.class);

    public QExpense(String variable) {
        super(Expense.class, forVariable(variable));
    }

    public QExpense(Path<? extends Expense> path) {
        super(path.getType(), path.getMetadata());
    }

    public QExpense(PathMetadata metadata) {
        super(Expense.class, metadata);
    }

}

