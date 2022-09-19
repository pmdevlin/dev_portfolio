package com.api.learning.services;

import com.api.learning.model.Comments;
import java.util.List;

public interface CommentService {
  List<Comments> getComments();

  Comments saveComments(Comments comments);

  Comments getSingleComment(Long id);

  void deleteComment(long id);

  Comments updateComments(Comments comments);
}
