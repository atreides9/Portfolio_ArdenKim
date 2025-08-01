// Portfolio Interactive Features
class Portfolio {
  constructor() {
    this.init();
  }

  init() {
    this.setupIntersectionObserver();
    this.setupNavigation();
    this.setupMolecularAnimation();
    this.setupSkillBars();
    this.setupProjectCards();
    this.setupSmoothScrolling();
  }

  // Intersection Observer for scroll animations
  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          // Trigger skill bar animations
          if (entry.target.classList.contains('skills')) {
            this.animateSkillBars();
          }
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
      '.fade-in, .slide-in-left, .slide-in-right, section'
    );
    animatedElements.forEach((el) => {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  }

  // Navigation functionality
  setupNavigation() {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Active navigation highlighting
    const updateActiveNav = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };

    // Navbar background on scroll
    const handleNavScroll = () => {
      if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
      } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = 'none';
      }
    };

    window.addEventListener('scroll', () => {
      updateActiveNav();
      handleNavScroll();
    });

    // Initial call
    updateActiveNav();
  }

  // Molecular structure animation
  setupMolecularAnimation() {
    const molecules = document.querySelector('.molecular-structure');
    if (!molecules) return;

    let animationId;
    const atoms = document.querySelectorAll('.atom');
    const bonds = document.querySelectorAll('.bond');

    const animateMolecules = () => {
      const time = Date.now() * 0.001;

      atoms.forEach((atom, index) => {
        const x = Math.sin(time + index) * 10;
        const y = Math.cos(time + index * 0.7) * 8;

        atom.setAttribute('transform', `translate(${x}, ${y})`);
      });

      // Transform molecules to network pattern on scroll
      const scrollProgress = Math.min(window.scrollY / (window.innerHeight * 0.5), 1);
      const transformProgress = Math.sin(scrollProgress * Math.PI * 0.5);

      molecules.style.transform = `scale(${1 + transformProgress * 0.2}) rotate(${transformProgress * 20}deg)`;
      molecules.style.opacity = 1 - scrollProgress * 0.3;

      animationId = requestAnimationFrame(animateMolecules);
    };

    animateMolecules();

    // Pause animation when not visible
    const moleculeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          cancelAnimationFrame(animationId);
        } else {
          animateMolecules();
        }
      });
    });

    moleculeObserver.observe(molecules);
  }

  // Skill bar animations
  setupSkillBars() {
    this.skillBarsAnimated = false;
  }

  animateSkillBars() {
    if (this.skillBarsAnimated) return;

    const skillBars = document.querySelectorAll('.skill-progress');

    skillBars.forEach((bar, index) => {
      const progress = bar.getAttribute('data-progress');

      setTimeout(() => {
        bar.style.width = `${progress}%`;
      }, index * 100);
    });

    this.skillBarsAnimated = true;
  }

  // Project card interactions
  setupProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card) => {
      card.addEventListener('mouseenter', (e) => {
        const metrics = e.target.querySelectorAll('.metric-value');
        metrics.forEach((metric) => {
          metric.style.transform = 'scale(1.1)';
          metric.style.color = 'var(--color-accent)';
        });
      });

      card.addEventListener('mouseleave', (e) => {
        const metrics = e.target.querySelectorAll('.metric-value');
        metrics.forEach((metric) => {
          metric.style.transform = 'scale(1)';
          metric.style.color = 'var(--color-primary)';
        });
      });

      // Click animation
      card.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(37, 99, 235, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = e.offsetX + 'px';
        ripple.style.top = e.offsetY + 'px';
        ripple.style.width = ripple.style.height = '20px';
        ripple.style.marginLeft = ripple.style.marginTop = '-10px';

        e.target.style.position = 'relative';
        e.target.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }

  // Smooth scrolling for navigation links
  setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav

          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          });
        }
      });
    });
  }
}

// Utility functions
const utils = {
  // Debounce function for performance
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function for scroll events
  throttle(func, limit) {
    let inThrottle;
    return function () {
      const args = arguments;
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  // Check if element is in viewport
  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },
};

// Parallax effect for hero section
class ParallaxEffect {
  constructor() {
    this.heroSection = document.querySelector('.hero');
    this.init();
  }

  init() {
    if (!this.heroSection) return;

    const handleParallax = utils.throttle(() => {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.5;

      this.heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }, 16);

    window.addEventListener('scroll', handleParallax);
  }
}

// Data visualization animations
class DataVisualization {
  constructor() {
    this.setupCounterAnimations();
  }

  setupCounterAnimations() {
    const counters = document.querySelectorAll('.metric-value');

    const animateCounter = (counter) => {
      const target = counter.textContent;
      const isPercentage = target.includes('%');
      const isMultiplier = target.includes('x');
      const numericValue = parseInt(target.replace(/[^\d]/g, ''));

      let current = 0;
      const increment = numericValue / 60; // 60 frames for 1 second

      const updateCounter = () => {
        current += increment;

        if (current < numericValue) {
          if (isPercentage) {
            counter.textContent = Math.ceil(current) + '%';
          } else if (isMultiplier) {
            counter.textContent = Math.ceil(current) + 'x';
          } else {
            counter.textContent = Math.ceil(current);
          }
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target; // Final value
        }
      };

      updateCounter();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => observer.observe(counter));
  }
}

// Contact form functionality (if needed later)
class ContactForm {
  constructor() {
    this.form = document.querySelector('.contact-form');
    if (this.form) {
      this.init();
    }
  }

  init() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleSubmit(e) {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Portfolio();
  new ParallaxEffect();
  new DataVisualization();
  new ContactForm();
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  .project-card {
    overflow: hidden;
  }
`;
document.head.appendChild(style);

// Performance monitoring
if ('performance' in window) {
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0];
    console.log(`Page load time: ${perfData.loadEventEnd - perfData.loadEventStart}ms`);
  });
}

// Error handling
window.addEventListener('error', (e) => {
  console.error('Portfolio error:', e.error);
});

// Export for potential testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Portfolio, ParallaxEffect, DataVisualization };
}
