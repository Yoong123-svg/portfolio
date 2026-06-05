document.addEventListener("DOMContentLoaded", function () {
    
    // 1. SCROLL REVEAL INTERSECTION OBSERVER ENGINE
    const revealElements = document.querySelectorAll(".scroll-reveal");
    
    const observerOptions = {
        root: null,         // Uses the device screen viewport
        threshold: 0.15,    // Triggers when 15% of the section shows on screen
        rootMargin: "0px"
    };

    const scrollObserver = new Intersection Observer(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Stops watching once animation completes safely
            }
        });
    }, observerOptions);

    revealElements.forEach(element => {
        scrollObserver.observe(element);
    });

    // 2. INTERACTION STYLES & FEEDBACK CODE (Your original form code)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const feedback = document.getElementById('formFeedback');
            
            // Simulate instantaneous, clear system feedback acknowledging submission
            feedback.className = "feedback-msg success";
            feedback.innerText = "Processing submission securely...";
            
            setTimeout(() => {
                feedback.innerText = "Message sent successfully! I will reply to your email within 24 hours.";
                this.reset(); // Clear input states cleanly
            }, 1000);
        });
    }
});
