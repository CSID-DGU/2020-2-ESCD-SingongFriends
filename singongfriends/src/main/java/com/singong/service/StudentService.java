package com.singong.service;

import com.singong.dto.StudentExpenseDTO;
import com.singong.model.StudentExpense;
import com.singong.model.StudentScholar;
import com.singong.repository.expense.ExpenseRepository;
import com.singong.repository.student.StudentRepository;
import com.singong.repository.studentExpense.StudentExpenseRepository;
import com.singong.repository.studentScholar.StudentScholarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService {

    private final StudentRepository studentRepository;
    private final ExpenseRepository expenseRepository;
    private final StudentExpenseRepository studentExpenseRepository;
    private final StudentScholarRepository studentScholarRepository;

    public StudentExpenseDTO.StudentExpenseGet getStudentExpenseByStudentIdAndSemester(int studentId, int semester) {
        StudentExpense studentExpense = studentExpenseRepository.findByStudentIdAndSemester(studentId, semester);
        if (studentExpense == null) {
            return null;
        }
        List<StudentScholar> studentScholars = studentScholarRepository.findByStudentIdAndSemester(studentId, semester);
        int amountBeforeReduction = studentExpense.getExpense().getAmountMoney();
        int amountAfterReduction = amountBeforeReduction;
        int amountReduction = 0;
        for (StudentScholar studentScholar: studentScholars) {
            int reduction = studentScholar.getScholar().getMoney();
            amountAfterReduction -= reduction;
            amountReduction += reduction;
        }
        return new StudentExpenseDTO.StudentExpenseGet(
                studentExpense.getStudentExpenseId(), amountBeforeReduction,
                amountReduction, amountAfterReduction);
    }
}
