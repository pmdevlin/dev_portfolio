package com.api.learning.controller;

import com.api.learning.model.Comments;
import com.api.learning.services.CommentsService;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CommentsController {

  @Autowired
  private CommentsService service;

  @GetMapping("/comments")
  public List<Comments> find() {
    return service.find();
  }

  @PostMapping("/comments")
  @ResponseStatus(HttpStatus.CREATED)
  public Comments create(@RequestBody Comments comments) {
    return service.create(comments);
  }

  @PutMapping("/comments/{id}")
  public Comments update(
    @PathVariable Long id,
    @RequestBody Map<String, Object> payload
  ) {
    return service.update(id, (int) payload.get("quantity"));
  }

  @DeleteMapping("/comments/{id}")
  @ResponseStatus(HttpStatus.OK)
  public void delete(@PathVariable Long id) {
    service.delete(id);
  }
}
