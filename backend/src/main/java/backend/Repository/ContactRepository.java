package backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import backend.Entity.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
    
}
