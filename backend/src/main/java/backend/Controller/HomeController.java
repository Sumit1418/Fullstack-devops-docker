package backend.Controller;
import backend.Entity.User;
import backend.Repository.UserRepository;
import backend.Repository.ContactRepository;
import backend.Entity.Contact;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

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

    //register, login, profile, contact

    @PostMapping("/register")
    public String Register(@RequestParam String Username, @RequestParam String Password, @RequestParam String Email) {
        userRepository.save(new User(Username, Password, Email));
        return "User registered successfully";
    }

    @PostMapping("/login")
    public String Login(@RequestParam String Username, @RequestParam String Password) {
        User user = userRepository.findByUsernameAndPassword(Username, Password);
        if (user != null) {
            return "Login successful";
        } else {
            return "Invalid credentials";
        }
    }

    @PostMapping("/profile")
    public User Profile(@RequestParam Long Id) {
        User user = userRepository.findById(Id).orElse(null);
        if (user != null) {
            return user;
        } else {
            return null;
        }
    }
    

    @PostMapping("/contact")
    public String Contact(@RequestParam String Name, @RequestParam String Email, @RequestParam String Message) {
        contactRepository.save(new Contact(Name, Email, Message));
        return "Contact form submitted successfully";
    }
    
}
