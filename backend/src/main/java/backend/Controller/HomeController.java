package backend.Controller;
import backend.Entity.User;
import backend.Repository.UserRepository;
import backend.Repository.ContactRepository;
import backend.Entity.Contact;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class HomeController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ContactRepository contactRepository;

    @GetMapping("/")
    public String Check() {
        return ("Backend is running");
    }

    @PostMapping("/register")
    public String Register(@RequestBody User user) {
        userRepository.save(user);
        return "User registered successfully";
    }

    @PostMapping("/login")
    public Object Login(@RequestBody User user) {
        User foundUser = userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword());
        
        if (foundUser != null) {
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Login successful");
            response.put("token", "dummy-jwt-token");
            response.put("username", foundUser.getUsername());
            return response;
        } throw new RuntimeException("Invalid credentials");
    }

    @GetMapping("/profile")
    public User Profile(@RequestParam String username) {
        User user = userRepository.findByUsername(username);
        if (user != null) {
            return user;
        } throw new RuntimeException("User not found");
    }

    @PostMapping("/contact")
    public String Contact(@RequestBody Contact contact) {
        contactRepository.save(contact);
        return "Contact information saved successfully";
    }
    
}
