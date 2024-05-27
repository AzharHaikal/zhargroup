function toggleSearchInput() {
  var input = document.querySelector('.input-search');
  if (input.style.display === 'none') {
    input.style.display = 'inline-block';
  } else {
    input.style.display = 'none';
  }
}

document.addEventListener('scroll', function() {
  const parallaxImages = document.querySelectorAll('.parallax-img');
  parallaxImages.forEach(img => {
    let speed = 0.5;
    let offset = window.pageYOffset;
    img.style.transform = 'translateY(' + (offset * speed) + 'px)';
  });
});