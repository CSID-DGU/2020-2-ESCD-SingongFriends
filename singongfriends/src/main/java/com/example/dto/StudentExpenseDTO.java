package com.example.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class StudentExpenseDTO {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Get {
        private int studentExpenseId;
        private int amountBeforeReduction;
        private int reductionAmount;
        private int amountAfterReduction;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Create {
        private int studentId;
        private int expenseId;
        private int semester;
    }
}
