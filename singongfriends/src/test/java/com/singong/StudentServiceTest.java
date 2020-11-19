package com.singong;

import com.singong.dto.StudentExpenseDTO;
import com.singong.model.*;
import com.singong.repository.studentExpense.StudentExpenseRepository;
import com.singong.repository.studentScholar.StudentScholarRepository;
import com.singong.service.StudentService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.mockito.BDDMockito.given;

@RunWith(MockitoJUnitRunner.class)
public class StudentServiceTest {

    @Mock
    private StudentExpenseRepository studentExpenseRepository;

    @Mock
    private StudentScholarRepository studentScholarRepository;

    @InjectMocks
    private StudentService studentService;

    @Test
    public void getAllStudentExpenseByStudentId() {
        final int originalExpenseMoney = 1000000;
        final int intSemester = 20202;
        final int studentId = 1;
        Student student = new Student("laymon", "strongpassword", "컴공", "2015112333", "a.b.c");
        Expense expense = new Expense(originalExpenseMoney);
        Semester semester = new Semester(intSemester);
        StudentExpense studentExpense = new StudentExpense(student, expense, semester);
        given(studentExpenseRepository.findByStudentIdAndSemester(studentId, intSemester))
                .willReturn(studentExpense);

        List<StudentScholar> studentScholars = new ArrayList<>(
                Arrays.asList(
                        new StudentScholar(student, new Scholar("A재단", 100000), semester),
                        new StudentScholar(student, new Scholar("B재단", 200000), semester),
                        new StudentScholar(student, new Scholar("C재단", 300000), semester)));
        given(studentScholarRepository.findByStudentIdAndSemester(studentId, intSemester))
                .willReturn(studentScholars);
        StudentExpenseDTO.StudentExpenseCalculatedGet result =
        studentService.getStudentExpenseByStudentIdAndSemester(studentId, intSemester);
        assertThat(result.getAmountBeforeReduction(), is(originalExpenseMoney));
        assertThat(result.getReductionAmount(), is(600000));
        assertThat(result.getAmountAfterReduction(), is(400000));
    }
}
