// Select the arrow image and the text div
const arrowImage = document.querySelector('.polygon-1');
const textDiv = document.querySelector('.oh-hello-there');

// Array of messages to loop through
const messages = [
    "Oh! Hello there!",
    "I’m so glad you’re here! Welcome to the Emotion Explorer Game!",
    "Understanding emotions is like unlocking a secret code to better connect with the",
    "people around you. In this game, you’ll learn all about emotions like happiness,",
    "sadness, anger, and more. I’ll show you how to spot clues on someone’s face."
];

// Variable to keep track of the current message index
let messageIndex = 0;

// Add click event listener to the arrow image
arrowImage.addEventListener('click', () => {
    if (messageIndex < messages.length) {
        // Set the text content to the current message
        textDiv.textContent = messages[messageIndex];

        // Update the index to the next message
        messageIndex++;
    } else {
        // Redirect to another page after displaying all messages
        window.location.href = './emotionsPage.html';
    }
});
