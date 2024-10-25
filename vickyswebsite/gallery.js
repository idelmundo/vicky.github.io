document.querySelectorAll('.gallery__item img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    const bigImage = document.createElement('img');
    bigImage.src = img.src;
    overlay.appendChild(bigImage);
    document.body.appendChild(overlay);
    
    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
    });
  });
});
