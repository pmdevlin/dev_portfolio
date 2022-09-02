package com.api.learning.services;

import com.api.learning.model.Comments;
import java.util.List;

public interface ICommentsService {
  List<Comments> find();
  Comments create(Comments comments);
  Comments update(Long id, int quantity);
  void delete(long id);
}
