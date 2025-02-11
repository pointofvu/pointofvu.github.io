
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  });
  
  // Animation loop for smooth scrolling
  function raf(time) {
    lenis.raf(time);
    // console.log('Lenis is updating at time:', time); 
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  