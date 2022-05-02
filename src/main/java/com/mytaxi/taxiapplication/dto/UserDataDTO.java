package com.mytaxi.taxiapplication.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import javax.validation.constraints.NotEmpty;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)

public class UserDataDTO {
    @NotEmpty(message = "First name can not be empty")
    private String userName;

    @NotEmpty(message = "Phone number can not be empty")
    private String phoneNumber;

    @NotEmpty(message = "Password can not be empty")
    private String password;
}
