package com.api.learning.repository;

import com.api.learning.model.Comments;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentsRepository extends CrudRepository<Comments, Long> {
  List<Comments> findAllByOrderByIdAsc();
}
