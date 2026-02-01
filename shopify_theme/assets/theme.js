document.addEventListener('DOMContentLoaded', function() {

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
          if (mobileMenu.classList.contains('hidden')) {
              icon.classList.remove('fa-times');
              icon.classList.add('fa-bars');
          } else {
              icon.classList.remove('fa-bars');
              icon.classList.add('fa-times');
          }
      }
    });
  }

  // Product Gallery (Thumbnail Switcher)
  const mainImage = document.getElementById('main-product-image');
  const thumbnails = document.querySelectorAll('.product-thumbnail');

  if (mainImage && thumbnails.length > 0) {
    thumbnails.forEach(thumb => {
      thumb.addEventListener('click', function() {
        // Update main image src
        const newSrc = this.dataset.src;
        if (newSrc) {
            mainImage.src = newSrc;
        }

        // Update active state
        thumbnails.forEach(t => t.classList.remove('ring-2', 'ring-black'));
        this.classList.add('ring-2', 'ring-black');
      });
    });
  }

  // Header Scroll Effect
  const header = document.querySelector('header');
  if(header) {
      window.addEventListener('scroll', () => {
          if(window.scrollY > 50) {
              header.classList.add('shadow-md', 'bg-white/95');
              header.classList.remove('bg-white/90');
          } else {
              header.classList.remove('shadow-md', 'bg-white/95');
              header.classList.add('bg-white/90');
          }
      });
  }

  // Initialize AOS if available
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50
    });
  }

});
