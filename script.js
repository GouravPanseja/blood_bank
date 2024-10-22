// Get the statistics container element
const statisticsContainer = document.querySelector('.statistics-container');

// Add an event listener to the window to trigger the scroll animation effect
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const statisticsContainerTop = statisticsContainer.offsetTop;

    if (scrollPosition >= statisticsContainerTop - window.innerHeight) {
        statisticsContainer.classList.add('show');
    }
});