// INTERACTION STYLES & FEEDBACK CODE
document.getElementById('contactForm').addEventListener('submit', function(e) {
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