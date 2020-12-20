package com.singong.controller;

import com.singong.dto.CourseDTO;
import com.singong.model.Course;
import com.singong.repository.course.CourseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Controller
@RequiredArgsConstructor
public class CourseController {

    private final CourseRepository courseRepository;

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

    @GetMapping("/student-courses")
    public ResponseEntity<CourseDTO.CourseHistoryGet> getAllCourseOfStudent() {
        CourseDTO.CourseHistoryGet response =
                new CourseDTO.CourseHistoryGet(new ArrayList<>(), new ArrayList<>());
        List<Course> newCourses = courseRepository.findAll();
        Random rand = new Random();
        for (int i=0; i < newCourses.size(); i++) {
            int flag = rand.nextInt(2);
            Course currCourse = newCourses.get(i);
            CourseDTO.CourseGet curr =
                    new CourseDTO.CourseGet(
                            currCourse.getCourseId(), currCourse.getCourseTitle(), currCourse.getPoint());
            if (flag == 0 ){
                response.getDone().add(curr);
            } else {
                response.getUndone().add(curr);
            }
        }
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
