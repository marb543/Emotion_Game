// Select all images
const gameImages = document.querySelectorAll('.game-image');

// Add event listeners to each image
gameImages.forEach((image, index) => {
    // Hover effect: Change border to orange
    image.addEventListener('mouseenter', () => {
        image.style.border = '4px solid orange';
    });

    // Remove border when hover ends
    image.addEventListener('mouseleave', () => {
        image.style.border = 'none';
    });

    // Click effect: Change border to green and redirect
    image.addEventListener('click', () => {
        image.style.border = '4px solid green';
        // Redirect to another page (use actual URLs here)
        const pages = [
            '../cardsGame/cardsGame.html',
            '../dragAndDrop/game.html',
        ];
        window.location.href = pages[index];
    });
});

//Go Back button functionality
document.querySelector('.go-back-button').addEventListener('click', () => {
    window.history.back();
});

document.querySelector('.go-menu-button').addEventListener('click', () => {
    window.location.href = '../index.html';
});
