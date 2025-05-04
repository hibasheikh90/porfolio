document.addEventListener('DOMContentLoaded', () => {
    // Handle Scroll Animations
    const sections = document.querySelectorAll('section');
  
    const animateOnScroll = () => {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          section.classList.add('visible');
        }
      });
    };
  
    // Add animation classes on scroll
    window.addEventListener('scroll', animateOnScroll);
  
    // Initial check for sections in view
    animateOnScroll();
  
    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('.navbar a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
          top: targetSection.offsetTop - 80, // Adjust to account for navbar height
          behavior: 'smooth',
        });
      });
    });
  
    // Form submission animation
    const form = document.querySelector('.contact form');
    const formButton = form.querySelector('button');
  
    formButton.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the form from submitting immediately
  
      // Add a loading animation to the button
      formButton.innerHTML = 'Sending...';
      formButton.disabled = true;
  
      // Simulate a form submission delay (for demonstration purposes)
      setTimeout(() => {
        formButton.innerHTML = 'Sent!';
        formButton.disabled = false;
        form.reset();
  
        // Animation for success message
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.textContent = 'Your message has been sent successfully!';
        document.body.appendChild(successMessage);
  
        // Remove success message after a few seconds
        setTimeout(() => {
          successMessage.remove();
        }, 3000);
      }, 2000); // Simulated 2-second delay
    });
  });
  