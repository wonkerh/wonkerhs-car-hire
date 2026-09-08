// assets/script.js

// ============================================================
// 1. Mobile Menu Toggle
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  
  const burger = document.querySelector('.burger');
  const mobilePanel = document.querySelector('.mobile-panel');
  
  if (burger && mobilePanel) {
    burger.addEventListener('click', function() {
      mobilePanel.classList.toggle('open');
    });
  }

  // ============================================================
  // 2. Accordion (FAQ page)
  // ============================================================
  const accordionItems = document.querySelectorAll('.acc-item');
  
  accordionItems.forEach(item => {
    const button = item.querySelector('.acc-q');
    if (button) {
      button.addEventListener('click', function() {
        // Close other items
        accordionItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('open');
          }
        });
        // Toggle current
        item.classList.toggle('open');
      });
    }
  });

  // ============================================================
  // 3. Filter Chips (Fleet page)
  // ============================================================
  const chips = document.querySelectorAll('.filter-chip');
  const cards = document.querySelectorAll('.vehicle-card');
  
  chips.forEach(chip => {
    chip.addEventListener('click', function() {
      // Update active chip
      chips.forEach(c => c.classList.remove('active'));
      this.classList.add('active');
      
      const filter = this.dataset.filter;
      
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ============================================================
  // 4. Result Filters (results page)
  // ============================================================
  const filterCheckboxes = document.querySelectorAll('.js-result-filter');
  
  filterCheckboxes.forEach(cb => {
    cb.addEventListener('change', function() {
      const checked = Array.from(filterCheckboxes)
        .filter(c => c.checked)
        .map(c => c.dataset.cat);
      
      const resultCards = document.querySelectorAll('.vehicle-card');
      
      resultCards.forEach(card => {
        const cat = card.dataset.category;
        if (checked.length === 0 || checked.includes(cat)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ============================================================
  // 5. Search Form Handler
  // ============================================================
  const searchForms = document.querySelectorAll('.js-search-form');
  
  searchForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const pickup = this.querySelector('#pickup-branch')?.value || 'selected branch';
      const dropoff = this.querySelector('#dropoff-branch')?.value || 'same location';
      const pickupDate = this.querySelector('#pickup-date')?.value || 'selected date';
      const dropoffDate = this.querySelector('#dropoff-date')?.value || 'selected date';
      
      // Update results count on results page
      const branchLabel = document.querySelector('.js-branch-label');
      if (branchLabel) {
        branchLabel.textContent = pickup;
      }
      
      // You could redirect to results page with query params
      // window.location.href = `results.html?pickup=${encodeURIComponent(pickup)}&date=${pickupDate}`;
      
      console.log('Search:', { pickup, dropoff, pickupDate, dropoffDate });
    });
  });

  // ============================================================
  // 6. Contact Form Handler
  // ============================================================
  const contactForm = document.querySelector('.js-contact-form');
  const successMsg = document.querySelector('.js-form-success');
  
  if (contactForm && successMsg) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate sending
      successMsg.classList.add('show');
      this.reset();
      
      // Hide after 5 seconds
      setTimeout(() => {
        successMsg.classList.remove('show');
      }, 5000);
    });
  }

  // ============================================================
  // 7. Scroll Reveal (for .reveal elements)
  // ============================================================
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  revealElements.forEach(el => revealObserver.observe(el));

  // ============================================================
  // 8. Close mobile menu on link click
  // ============================================================
  const mobileLinks = document.querySelectorAll('.mobile-panel a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobilePanel.classList.remove('open');
    });
  });

});