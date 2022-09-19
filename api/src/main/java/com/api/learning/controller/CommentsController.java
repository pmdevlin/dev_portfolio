package com.api.learning.controller;

import com.api.learning.model.Comments;
import com.api.learning.services.CommentService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommentsController {

  @Autowired
  private CommentService cService;

  @GetMapping("/comments")
  public List<Comments> getComments() {
    return cService.getComments();
  }

  @GetMapping("/comments/{id}")
  public Comments getComment(@PathVariable Long id) {
    return cService.getSingleComment(id);
  }

  @PostMapping("/comments")
  public Comments saveComments(@RequestBody Comments comments) {
    return cService.saveComments(comments);
  }

  @PutMapping("/comments/{id}")
  public Comments updateComments(
    @PathVariable Long id,
    @RequestBody Comments comments
  ) {
    comments.setId(id);
    return cService.updateComments(comments);
  }

  @DeleteMapping("/comments/{id}")
  public void deleteComment(@PathVariable Long id) {
    cService.deleteComment(id);
  }
}
