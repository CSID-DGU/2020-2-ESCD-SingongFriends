package com.singong.dto;

import com.singong.model.Student;
import com.singong.model.StudentExpense;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class StudentExpenseDTO {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class StudentExpenseGet {
        private int studentExpenseId;
        private int studentId;
        private int expenseId;
        private int amountAfterReduction;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class StudentExpenseCalculatedGet {
        private int studentExpenseId;
        private int amountBeforeReduction;
        private int reductionAmount;
        private int amountAfterReduction;
    }


    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class StudentExpenseCreate {
        private int studentId;
        private int expenseId;
        private int semester;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class StudentExpenseRemove {
        private int studentExpenseId;
    }
}
