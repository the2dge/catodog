/* version 1*/

/* version 3 
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.section-container');
  const sections = document.querySelectorAll('.section');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const addition = document.querySelector('.addition');
  let currentIndex = 0;

  function showSection(index) {
    const offset = index * 100 + (addition.classList.contains('show') ? addition.scrollHeight : 0);
    container.style.transform = `translateY(-${offset}px)`;
    currentIndex = index;
  }

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      showSection(currentIndex - 1);
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < sections.length - 1) {
      showSection(currentIndex + 1);
    }
  });

  // Swipe functionality
  let touchStartY = 0;
  let touchEndY = 0;

  container.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
  });

  container.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
  });

  function handleSwipe() {
    if (touchEndY < touchStartY) {
      if (currentIndex < sections.length - 1) {
        showSection(currentIndex + 1);
      }
    }
    if (touchEndY > touchStartY) {
      if (currentIndex > 0) {
        showSection(currentIndex - 1);
      }
    }
  }

  // Click functionality for sections with specific file names
  const fileNames = ['duck.html', 'turkey.html', 'fish.html'];
  
  sections.forEach((section, index) => {
    section.addEventListener('click', () => {
      const file = fileNames[index];
      fetch(file)
        .then(response => response.text())
        .then(data => {
          addition.innerHTML = data;
          addition.classList.add('show');
          section.style.marginBottom = `${addition.scrollHeight}px`;
          showSection(currentIndex);
        })
        .catch(error => console.error('Error:', error));
    });
  });

  // Close addition when clicking outside
  document.addEventListener('click', (e) => {
    if (!addition.contains(e.target) && !container.contains(e.target)) {
      addition.classList.remove('show');
      sections.forEach(section => section.style.marginBottom = '0');
      showSection(currentIndex);
    }
  });
});