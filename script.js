
const timelineDates = document.querySelectorAll('.timeline-date');
const destinationInfo = document.querySelector('.destination-info');

timelineDates.forEach(date => {
  date.addEventListener('click', (event) => {
    const destination = event.target.parentElement.dataset.destination;
    if (destination) {
      const descriptionElement = destinationInfo.querySelector('.destination-description');
      const imageElement = destinationInfo.querySelector('.destination-image');

      descriptionElement.textContent = `City visited:${destination}`; 
      imageElement.src = `images/${destination}.jpg`; 

      destinationInfo.classList.toggle('hidden');
      destinationInfo.classList.toggle('active');
    } 
  });
});
