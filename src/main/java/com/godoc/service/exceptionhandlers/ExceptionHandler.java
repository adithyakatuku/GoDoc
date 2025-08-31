package com.godoc.service.exceptionhandlers;

import com.godoc.service.exceptions.InvalidArgumentException;
import com.godoc.service.exceptions.ResourceNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

public class ExceptionHandler implements HandlerExceptionResolver {

    @Override
    public ModelAndView resolveException(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response, Object handler, @NonNull Exception ex) {

        ModelAndView mav = new ModelAndView();
        mav.addObject("description", ex.getMessage());
        mav.addObject("url", request.getRequestURL());

        switch (ex) {
            case ResourceNotFoundException resourceNotFoundException -> {
                mav.addObject("code", "NOT_FOUND");
                mav.setStatus(HttpStatus.NOT_FOUND);
            }
            case InvalidArgumentException invalidArgumentException -> {
                mav.addObject("code", "INVALID_INPUT");
                mav.setStatus(HttpStatus.BAD_REQUEST);
            }
            case MethodArgumentNotValidException methodArgumentNotValidException -> {
                mav.addObject("code", "INVALID_INPUT");
                mav.setStatus(HttpStatus.BAD_REQUEST);
            }
            default -> {
                mav.addObject("code", "SERVER_ERROR");
                mav.setStatus(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        mav.setView(new MappingJackson2JsonView());
        return mav;
    }
}
