// const nextButton = document.getElementById('next-button');
// // const prevButton = document.getElementById('prev-button');
// const mainBox = document.getElementById('main-box');
// const otherInfoSection = document.getElementById('other-info');

// Add event listeners
// nextButton.addEventListener('click', () => {
//     mainBox.style.display = 'none';
//     otherInfoSection.style.display = 'block';
// });

// prevButton.addEventListener('click', () => {
//     mainBox.style.display = 'block';
//     otherInfoSection.style.display = 'none';
// });


// Get the next button and other info div
const nextButton = document.getElementById('next-button');
const otherInfoDiv = document.getElementById('other');

// Add an event listener to the next button
nextButton.addEventListener('click', () => {
    // Remove the hidden class from the other info div
    otherInfoDiv.classList.remove('hidden');
});