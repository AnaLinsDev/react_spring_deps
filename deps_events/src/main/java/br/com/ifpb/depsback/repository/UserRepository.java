package br.com.ifpb.depsback.repository;

import br.com.ifpb.depsback.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository  extends JpaRepository<User, Long> {
    @Query("SELECT u FROM User u WHERE u.email=:email")
    User findbyEmail(String email);
}
