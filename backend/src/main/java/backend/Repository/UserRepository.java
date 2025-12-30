package backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import backend.Entity.User;


public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsernameAndPassword(String username, String password);

    User findByUsername(String username);
    
}
