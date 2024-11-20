const emotions = ["Happy", "Sad", "Angry", "Surprised", "Scared", "Excited"];
const emotionImages = {
    "Happy": "./emotions/happy.png",
    "Sad": "./emotions/sad.png",
    "Angry": "./emotions/angry.png",
    "Surprised": "./emotions/surprised.png",
    "Scared": "./emotions/scared.png",
    "Excited": "./emotions/excited.png"
};

const popupMessages = {
    "Happy": "Oops! That's the Happy face. Try finding the right emotion!",
    "Sad": "This is the Sad face. Look again for the correct one!",
    "Angry": "Oops, that was Angry! Try another emotion.",
    "Surprised": "Close, but that’s the Surprised face. Keep searching!",
    "Scared": "You clicked on Scared. Let’s try to find the target emotion.",
    "Excited": "That’s Excited, but it’s not the correct one. Try again!"
};

let correctEmotion = "";

// Automatically start the game when the page loads
window.addEventListener("DOMContentLoaded", startGame);

// Add event listener for "Shuffle Cards" button
document.querySelector(".verify-button").addEventListener("click", startGame);

// Function to start the game
function startGame() {
    // Reset game state
    document.querySelector(".subtitle").textContent = "";
    const grid = document.querySelector(".images-grid");
    grid.innerHTML = "";

    // Randomly select the target emotion
    correctEmotion = emotions[Math.floor(Math.random() * emotions.length)];
    document.querySelector(".subtitle").textContent = `Find the "${correctEmotion}" card!`;

    // Shuffle emotions and create the cards
    const shuffledEmotions = [...emotions].sort(() => Math.random() - 0.5);
    shuffledEmotions.forEach(emotion => {
        const img = document.createElement("img");
        img.src = emotionImages[emotion];
        img.alt = emotion;
        img.classList.add("image");

        // Add hover effect for orange border
        img.addEventListener("mouseenter", () => img.style.border = "3px solid orange");
        img.addEventListener("mouseleave", () => img.style.border = "");

        // Add click listener to check the selection
        img.addEventListener("click", () => checkSelection(img, emotion));
        grid.appendChild(img);
    });
}

// Function to check the player's selection
function checkSelection(img, selectedEmotion) {
    const grid = document.querySelector(".images-grid");

    if (selectedEmotion === correctEmotion) {
        img.style.border = "3px solid green";
        showPopup(`Correct! "${selectedEmotion}" is the correct emotion!`, true);
    } else {
        img.style.border = "3px solid red";
        showPopup(popupMessages[selectedEmotion], false);
    }
}

// Function to display the popup message
function showPopup(message, isCorrect) {
    const grid = document.querySelector(".images-grid");
    grid.style.opacity = "0.5"; // Grey out the cards

    // Create popup container
    const popup = document.createElement("div");
    popup.classList.add("popup");

    // Set popup message
    const popupContent = document.createElement("div");
    popupContent.classList.add("popup-content");
    popupContent.innerHTML = `<p>${message}</p>`;

    // Add a close button
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", () => {
        popup.style.display = "none";
        popup.remove();
        grid.style.opacity = "1"; // Restore card visibility
        if (isCorrect) startGame(); // Restart the game if correct
    });

    popupContent.appendChild(closeButton);
    popup.appendChild(popupContent);
    document.body.appendChild(popup);
}

// Go Back button functionality
document.querySelector('.go-back-button').addEventListener('click', () => {
    window.history.back();
});
