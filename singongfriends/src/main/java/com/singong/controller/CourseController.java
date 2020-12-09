package com.singong.controller;

import com.singong.dto.CourseDTO;
import com.singong.model.Course;
import com.singong.model.StudentCourse;
import com.singong.repository.course.CourseRepository;
import com.singong.repository.studentCourse.StudentCourseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Random;

@Controller
@RequiredArgsConstructor
public class CourseController {

    private final CourseRepository courseRepository;
    private final StudentCourseRepository studentCourseRepository;

    @GetMapping("/courses")
    public ResponseEntity<List<CourseDTO.CourseGet>> getAllCourses() {
        List<Course> newCourses = courseRepository.findAll();
        List<CourseDTO.CourseGet> response = new ArrayList<>();
        newCourses.parallelStream()
                .map(x -> new CourseDTO.CourseGet(x.getCourseId(), x.getCourseTitle(), x.getPoint()))
                .forEach(response::add);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/init-course-data")
    public ResponseEntity initCourseData(@RequestBody List<CourseDTO.CoursePost> courses) {
        List<Course> newCourses = new ArrayList<>();
        courses.parallelStream()
                .map(x -> new Course(x.getTitle(), Integer.parseInt(x.getScore())))
                .forEach(newCourses::add);
        courseRepository.saveAll(newCourses);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/student-courses/{studentId}")
    public ResponseEntity<CourseDTO.CourseHistoryGet> getAllCourseOfStudent(@PathVariable("studentId") int studentId) {
        CourseDTO.CourseHistoryGet response =
                new CourseDTO.CourseHistoryGet(new ArrayList<>(), new ArrayList<>());
        List<Course> newCourses = courseRepository.findAll();
        HashMap<Integer, CourseDTO.CourseGet> map = new HashMap<>();
        List<StudentCourse> dones = studentCourseRepository.findByStudentId(studentId);
        List<CourseDTO.CourseGet> undoneList = new ArrayList<>();
        List<CourseDTO.CourseGet> doneList = new ArrayList<>();
        for (int i=0; i < newCourses.size(); i++) {
            Course course = newCourses.get(i);
            CourseDTO.CourseGet newObj =  new CourseDTO.CourseGet(
                    course.getCourseId(), course.getCourseTitle(), course.getPoint());
            map.put(course.getCourseId(), newObj);
            undoneList.add(newObj);
        }
        for (StudentCourse studentCourse : dones) {
            if (map.containsKey(studentCourse.getCourse().getCourseId())) {
                undoneList.remove(map.get(studentCourse.getCourse().getCourseId()));
            }
            doneList.add(new CourseDTO.CourseGet(
                    studentCourse.getCourse().getCourseId(), studentCourse.getCourse().getCourseTitle(),
                    studentCourse.getCourse().getPoint()));
        }

        response.setDone(doneList);
        response.setUndone(undoneList);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
