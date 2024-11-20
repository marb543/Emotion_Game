// Select the buttons by their IDs
const startTutorialButton = document.getElementById('start-tutorial');
const aboutThisGameButton = document.getElementById('about-this-game');

// Define the functions for navigation
startTutorialButton.addEventListener('click', () => {
    window.location.href = './tutorialPage/tutorialPage.html'; // Replace with the actual path to your tutorial page
});

aboutThisGameButton.addEventListener('click', () => {
    window.location.href = './aboutPage/aboutPage.html'; // Replace with the actual path to your about page
});
