// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      
      // Change the icon based on menu state
      const icon = mobileMenuButton.querySelector('i');
      if (mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });

    // Close mobile menu when clicking on a link
    const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        const icon = mobileMenuButton.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      });
    });
  }

  // Smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for the fixed header
          behavior: 'smooth'
        });
      }
    });
  });

  // FAQ Accordions
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      // Close all other questions
      faqQuestions.forEach(q => {
        if (q !== question) {
          q.setAttribute('aria-expanded', 'false');
        }
      });
      
      // Toggle current question
      this.setAttribute('aria-expanded', !isExpanded);
    });
  });

  // Form Validation
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      let isValid = true;
      
      // Validate Name
      const nameInput = document.getElementById('name');
      const nameError = document.getElementById('name-error');
      if (!nameInput.value.trim()) {
        nameError.textContent = 'Bitte geben Sie Ihren Namen ein.';
        nameError.classList.add('active');
        isValid = false;
      } else if (nameInput.value.trim().length < 2) {
        nameError.textContent = 'Name muss mindestens 2 Zeichen lang sein.';
        nameError.classList.add('active');
        isValid = false;
      } else {
        nameError.classList.remove('active');
      }
      
      // Validate Email
      const emailInput = document.getElementById('email');
      const emailError = document.getElementById('email-error');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim()) {
        emailError.textContent = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
        emailError.classList.add('active');
        isValid = false;
      } else if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
        emailError.classList.add('active');
        isValid = false;
      } else {
        emailError.classList.remove('active');
      }
      
      // Validate Dog Name
      const dogNameInput = document.getElementById('dogName');
      const dogNameError = document.getElementById('dogName-error');
      if (!dogNameInput.value.trim()) {
        dogNameError.textContent = 'Bitte geben Sie den Namen Ihres Hundes ein.';
        dogNameError.classList.add('active');
        isValid = false;
      } else {
        dogNameError.classList.remove('active');
      }
      
      // Validate Service
      const serviceInput = document.getElementById('service');
      const serviceError = document.getElementById('service-error');
      if (serviceInput.value === '') {
        serviceError.textContent = 'Bitte wählen Sie einen Service aus.';
        serviceError.classList.add('active');
        isValid = false;
      } else {
        serviceError.classList.remove('active');
      }
      
      if (isValid) {
        // Show success message
        alert('Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden.');
        contactForm.reset();
      }
    });
  }
});

// Add animation on scroll for price cards
window.addEventListener('scroll', function() {
  const priceCards = document.querySelectorAll('.price-card');
  priceCards.forEach(card => {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (cardPosition < screenPosition) {
      card.style.transform = 'translateY(0)';
      card.style.opacity = '1';
    }
  });
});