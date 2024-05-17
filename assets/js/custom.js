document.addEventListener('scroll', function() {
  const parallaxImages = document.querySelectorAll('.parallax-img');
  parallaxImages.forEach(img => {
    let speed = 0.5;
    let offset = window.pageYOffset;
    img.style.transform = 'translateY(' + (offset * speed) + 'px)';
  });
});