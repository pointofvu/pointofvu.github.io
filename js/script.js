document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
  
    hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
  });
  

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8KNWJYHCD5');



  // Carousel Section LAtest Blogs


// Select the carousel element
const carousel = document.querySelector('.carousel');

// Event listener for the previous arrow
document.querySelector('.carousel-prev').addEventListener('click', () => {
  // Scroll left by one item width + gap (300px + 20px = 320px)
  carousel.scrollBy({ left: -320, behavior: 'smooth' });
});

// Event listener for the next arrow
document.querySelector('.carousel-next').addEventListener('click', () => {
  // Scroll right by one item width + gap (300px + 20px = 320px)
  carousel.scrollBy({ left: 320, behavior: 'smooth' });
});
