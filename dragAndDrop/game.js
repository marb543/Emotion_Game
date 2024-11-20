// Define different PNG options for each feature
const featureImages = {
    eyes: ["images/eyes-neutral.png", "images/eyes-happy.png", "images/angry-eyes.png", "images/confident-eyes.png"],
    nose: ["images/nose-neutral.png", "images/happy-nose.png", "images/angry-nose.png", "images/confident-nose.png"],
    mouth: ["images/mouth-neutral.png", "images/happy-mouth.png", "images/angry-mouth.png", "images/confident-mouth.png"]
};

const currentFeatureIndex = { eyes: 0, nose: 0, mouth: 0 };

const emotions = [
    {
        name: "happy",
        prompt: "George is happy today. Let's understand how he can express it?",
        config: { eyes: 1, nose: 1, mouth: 1 }
    },
    {
        name: "angry",
        prompt: "George got hurt today while playing soccer, he is angry of not being careful while playing, what does anger look like?",
        config: { eyes: 2, nose: 2, mouth: 2 }
    },

    {
        name: "confident",
        prompt: "George is selected to lead a school project, he is confident about his role, how can he express that?",
        config: { eyes: 3, nose: 3, mouth: 3 }
    },


    // Add more emotions as needed
];

let currentEmotionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15; // Time allowed per round

function loadEmotionPrompt() {
    clearInterval(timer);
    timeLeft = 15;
    const emotion = emotions[currentEmotionIndex];
    document.getElementById('story-prompt').innerText = emotion.prompt;
    resetFeatures();
    document.getElementById("prompt-container").style.display = "block";
    document.getElementById("feature-buttons").style.display = "none";
    document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`;

    startTimer();
}

document.getElementById("start-button").addEventListener("click", () => {
    document.getElementById("prompt-container").style.display = "none";
    document.getElementById("feature-buttons").style.display = "block";
});

function changeFeature(part) {
    currentFeatureIndex[part] = (currentFeatureIndex[part] + 1) % featureImages[part].length;
    document.getElementById(part).src = featureImages[part][currentFeatureIndex[part]];
}

function checkMatch() {
    const emotion = emotions[currentEmotionIndex];
    const isMatch =
        currentFeatureIndex.eyes === emotion.config.eyes &&
        currentFeatureIndex.nose === emotion.config.nose &&
        currentFeatureIndex.mouth === emotion.config.mouth;

    if (isMatch) {
        playSound('correct-sound');
        score += 10 + timeLeft; // Bonus for remaining time
        document.getElementById('story-prompt').innerText = "Correct! Well done!";
        document.getElementById('score').innerText = `Score: ${score}`;
        loadNextPrompt();
    } else {
        playSound('incorrect-sound');
        document.getElementById('story-prompt').innerText = "Not quite, try again!";
    }
}

function loadNextPrompt() {
    setTimeout(() => {
        currentEmotionIndex = Math.floor(Math.random() * emotions.length); // Randomize prompt
        loadEmotionPrompt();
    }, 2000);
}

function playSound(soundId) {
    document.getElementById(soundId).play();
}

function resetFeatures() {
    currentFeatureIndex.eyes = currentFeatureIndex.nose = currentFeatureIndex.mouth = 0;
    document.getElementById('eyes').src = featureImages.eyes[0];
    document.getElementById('nose').src = featureImages.nose[0];
    document.getElementById('mouth').src = featureImages.mouth[0];
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            loadNextPrompt();
        }
    }, 1000);
}

// Load the first prompt on page load
window.onload = () => {
    document.getElementById("score").innerText = `Score: ${score}`;
    loadEmotionPrompt();
};


document.querySelector('.go-back-button').addEventListener('click', () => {
    window.history.back();
});
