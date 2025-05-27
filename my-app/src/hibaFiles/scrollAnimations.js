// Animation functions for ExperienceLanding.jsx

// Scroll animation handler
export const initScrollAnimations = () => {
    // Create scroll progress bar
    const scrollProgressContainer = document.createElement('div');
    scrollProgressContainer.className = 'scroll-progress-container';
    const scrollProgressBar = document.createElement('div');
    scrollProgressBar.className = 'scroll-progress-bar';
    scrollProgressContainer.appendChild(scrollProgressBar);
    document.body.appendChild(scrollProgressContainer);
  
    // Create scroll-to-top indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator hidden';
    document.body.appendChild(scrollIndicator);
    
    // Selector for elements to animate
    const animateElements = document.querySelectorAll(
      '.section-animation, .image-reveal, .animate-heading, .float-element, .pattern-reveal'
    );
    
    // Parallax elements
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    // Background transition elements
    const bgTransitionElements = document.querySelectorAll('.bg-transition');
    
    // Function to check if element is in viewport
    const isInViewport = (element, offset = 0) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
        rect.bottom >= 0
      );
    };
    
    // Handle scroll animation
    const handleScroll = () => {
      // Update scroll progress bar
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      scrollProgressBar.style.width = `${scrollPercent}%`;
      
      // Show/hide scroll indicator
      if (scrollTop > 300) {
        scrollIndicator.classList.remove('hidden');
      } else {
        scrollIndicator.classList.add('hidden');
      }
      
      // Animate elements when they enter viewport
      animateElements.forEach(element => {
        if (isInViewport(element, 100)) {
          if (element.classList.contains('section-animation')) {
            element.classList.add('animated');
          } else if (element.classList.contains('image-reveal') || 
                    element.classList.contains('animate-heading') ||
                    element.classList.contains('pattern-reveal')) {
            element.classList.add('revealed');
          } else if (element.classList.contains('float-element')) {
            element.classList.add('float');
          }
        }
      });
      
      // Parallax effect
      parallaxElements.forEach(element => {
        const scrollPosition = window.pageYOffset;
        const parentTop = element.parentElement.offsetTop;
        const parentHeight = element.parentElement.offsetHeight;
        
        if (scrollPosition > parentTop - window.innerHeight && 
            scrollPosition < parentTop + parentHeight) {
          const parallaxSpeed = 0.4; // Adjust speed here
          const yPos = (scrollPosition - parentTop) * parallaxSpeed;
          element.style.transform = `translateY(${yPos}px)`;
        }
      });
      
      // Background color transitions
      bgTransitionElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementMiddle = rect.top + rect.height / 2;
        const viewportMiddle = window.innerHeight / 2;
        
        if (Math.abs(elementMiddle - viewportMiddle) < 200) {
          element.classList.add('dark');
        } else {
          element.classList.remove('dark');
        }
      });
    };
    
    // Scroll to top when indicator is clicked
    scrollIndicator.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check for elements in viewport
    setTimeout(() => {
      handleScroll();
    }, 100);
    
    // Clean up function to remove event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollProgressContainer.parentNode) {
        scrollProgressContainer.parentNode.removeChild(scrollProgressContainer);
      }
      if (scrollIndicator.parentNode) {
        scrollIndicator.parentNode.removeChild(scrollIndicator);
      }
    };
  };
  
  // Horizontal scroll gallery
  export const initHorizontalScroll = () => {
    const galleries = document.querySelectorAll('.horizontal-scroll');
    
    galleries.forEach(gallery => {
      // Mouse wheel horizontal scrolling
      gallery.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          gallery.scrollLeft += e.deltaY;
        }
      }, { passive: false });
      
      // Automatic smooth scroll effect
      let scrollPosition = 0;
      let scrollDirection = 1;
      const maxScroll = gallery.scrollWidth - gallery.clientWidth;
      
      const autoScroll = () => {
        if (!gallery.matches(':hover')) {
          scrollPosition += scrollDirection * 0.5;
          
          if (scrollPosition >= maxScroll) {
            scrollDirection = -1;
          } else if (scrollPosition <= 0) {
            scrollDirection = 1;
          }
          
          gallery.scrollLeft = scrollPosition;
        }
        
        requestAnimationFrame(autoScroll);
      };
      
      requestAnimationFrame(autoScroll);
    });
  };
  
  // Moroccan pattern animation
  export const initPatternAnimation = () => {
    const patterns = document.querySelectorAll('.pattern-element');
    
    patterns.forEach(pattern => {
      pattern.innerHTML = ''; // Clear any existing patterns
      
      // Create a grid of Moroccan patterns
      const gridSize = 5;
      const patternTypes = ['star', 'diamond', 'circle', 'octagon'];
      
      for (let i = 0; i < gridSize * gridSize; i++) {
        const patternElement = document.createElement('div');
        patternElement.className = `pattern-item ${patternTypes[i % patternTypes.length]}`;
        patternElement.style.animationDelay = `${Math.random() * 5}s`;
        pattern.appendChild(patternElement);
      }
    });
  };
  
  // Initialize all animations
  export const initAllAnimations = () => {
    const cleanupScrollAnimations = initScrollAnimations();
    initHorizontalScroll();
    initPatternAnimation();
    
    // Return cleanup function
    return () => {
      cleanupScrollAnimations();
    };
  };