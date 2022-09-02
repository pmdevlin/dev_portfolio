package com.api.learning.services;

import com.api.learning.model.Comments;
import com.api.learning.repository.CommentsRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentsService implements ICommentsService {

  @Autowired
  private CommentsRepository repository;

  @Override
  public List<Comments> find() {
    return repository.findAllByOrderByIdAsc();
  }

  @Override
  public Comments create(Comments comments) {
    return repository.save(comments);
  }

  @Override
  public Comments update(Long id, int quantity) {
    return repository
      .findById(id)
      .map(
        existingComments -> {
          existingComments.setQuantity(quantity);
          return repository.save(existingComments);
        }
      )
      .orElse(null);
  }

  @Override
  public void delete(long id) {
    repository.deleteById(id);
  }
}
