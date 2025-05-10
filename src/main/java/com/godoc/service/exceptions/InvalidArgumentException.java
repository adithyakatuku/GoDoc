package com.godoc.service.exceptions;

public class InvalidArgumentException extends RuntimeException{

    public InvalidArgumentException(String message) {
        super(message);
    }

}
