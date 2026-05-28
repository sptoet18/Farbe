// Find elements
const photoCounterDisplay = document.getElementById('photo-count');
const clickPhotoButton = document.getElementById('click-photo-button');

// Set initial state
let photoCount = 0;

photoCounterDisplay.textContent = photoCount;

// Add behavior
clickPhotoButton.addEventListener('click', () => {
    photoCount++;
    photoCounterDisplay.textContent = photoCount;
})