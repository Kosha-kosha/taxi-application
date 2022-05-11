package com.mytaxi.taxiapplication.service;

import com.mytaxi.taxiapplication.dto.ReviewDTO;
import com.mytaxi.taxiapplication.entity.Problem;
import com.mytaxi.taxiapplication.entity.UserEntity;
import com.mytaxi.taxiapplication.repository.ProblemRepository;
import com.mytaxi.taxiapplication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProblemsService {
    @Autowired
    ProblemRepository problemRepository;
    @Autowired
    UserRepository userRepository;

    public boolean addProblem(String userName, ReviewDTO problemDTO, LocalDateTime dateTime) {
        Problem problemEntity = mapProblemDTOToEntity(problemDTO, dateTime);
        problemRepository.save(problemEntity);
        userRepository.saveAll(List.of(userRepository.findByUserName(userName).orElse(new UserEntity())));
        problemEntity.getUsers().addAll(List.of(userRepository.findByUserName(userName).orElse(new UserEntity())));
        problemRepository.save(problemEntity);
        return true;
    }

    private Problem mapProblemDTOToEntity(ReviewDTO problem, LocalDateTime dateTime) {
        return Problem.builder()
                .problem(problem.getMessage())
                .dateTime(dateTime)
                .users(new ArrayList<>())
                .build();
    }
}
