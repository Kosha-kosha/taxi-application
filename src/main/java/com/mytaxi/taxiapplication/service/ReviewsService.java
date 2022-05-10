package com.mytaxi.taxiapplication.service;

import com.mytaxi.taxiapplication.dto.ReviewDTO;
import com.mytaxi.taxiapplication.entity.Reviews;
import com.mytaxi.taxiapplication.entity.UserEntity;
import com.mytaxi.taxiapplication.repository.ReviewsRepository;
import com.mytaxi.taxiapplication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ReviewsService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    ReviewsRepository reviewsRepository;

    public boolean saveReview(String userName, ReviewDTO reviewDTO, LocalDateTime dateTime) {
        reviewsRepository.save(mapReviewDTOToEntity(userName, reviewDTO, dateTime));
        return true;
    }

    private Reviews mapReviewDTOToEntity(String userName, ReviewDTO reviewDTO, LocalDateTime dateTime) {
        return Reviews.builder()
                .review(reviewDTO.getMessage())
                .dateTime(dateTime)
                .user(userRepository.findByUserName(userName).orElse(new UserEntity()))
                .build();
    }
}
