package com.singong.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class ApiResponse {

    private String result;

    public ApiResponse() {}

    public static ApiResponse OK() {
        return new ApiResponse("OK");
    }

    public static ApiResponse UNAUTHORIZED() {
        return new ApiResponse("접근할 수 있는 권한이 없습니다.");
    }

    public ApiResponse(String result) {
        this.result = result;
    }
}
