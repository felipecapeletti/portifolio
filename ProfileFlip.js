
  function flipImage(img) {
    if (img.classList.contains('flip')) return; // Prevent multiple clicks during animation
    
    img.classList.add('flip');
    
    const currentSrc = img.src;
    const newSrc = currentSrc.includes('139904574.png') 
      ? 'https://maroon-eel-451087.hostingersite.com/wp-content/uploads/2025/06/square-profile.jpg'
      : 'https://maroon-eel-451087.hostingersite.com/wp-content/uploads/2025/06/139904574.png';
    
    // Change image halfway through the flip
    setTimeout(() => {
      img.src = newSrc;
    }, 500);
    
    // Remove animation class when done
    setTimeout(() => {
      img.classList.remove('flip');
    }, 1000);
  }