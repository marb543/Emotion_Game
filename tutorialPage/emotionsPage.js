function redirectToStartPage() {
    window.location.href = "../selectPage/selectPage.html";
}

let currentEmotionIndex = 0;

const emotions = [
    {
        description: "Anger: Anger is a negative emotion that usually happens after someone is not happy with a situation or with someone. You can recognize it by these different characteristics: furrowed eyebrows, squinting, clenched jaw, and lip tightener.",
        image: "./assets/angry.png"
    },
    {
        description: "Fear : Fear is when someone is unsure about a situation or uncomfortable. You can recognize it by these different characteristics: raised eyebrows, lifted eyelids, mouth stretched and drawn back, sometimes showing teeth.",
        image: "./assets/scared.png"
    },
    {
        description: "Sadness: Tears often accompany sadness, but not always. It happens when someone is hurt. You can recognize it by these different characteristics: eyebrow in the shape of a roof (/\\), corner of the eye raise, lip corner down.",
        image: "./assets/sad.png"
    },
    {
        description: "Disgust: Disgust is when someone goes, 'Eww.' It happens after something unpleasant. You can recognize it by these different characteristics: one eyebrow raised or both raised, nose wrinkle, lip tightener or mouth pulled back, showing teeth.",
        image: "./assets/disgust.png"
    },
    {
        description: "Happiness: Happiness is when someone is happy with a situation. You can recognize it by these different characteristics: cheek raised, lip corner upward, sometimes showing teeth.",
        image: "./assets/happy.png"
    },
    {
        description: "Surprise: Surprised is usually a short reaction to something unexpected. You can recognize it by these different characteristics: raised eyebrows, wide eyes, sometimes, open mouth in an O shape.",
        image: "./assets/suprised.png"
    }
];


function openPopup() {
    document.getElementById('emotionPopup').style.display = 'block';
    document.body.classList.add('popup-open');
    updateEmotion();
}

function closePopup() {
    document.getElementById("emotionPopup").style.display = "none";
    document.body.classList.remove('popup-open');
}

function changeEmotion(direction) {
    currentEmotionIndex = (currentEmotionIndex + direction + emotions.length) % emotions.length; // Loop around
    updateEmotion();
}

function updateEmotion() {
    const emotion = emotions[currentEmotionIndex];
    document.getElementById("emotionDescription").textContent = emotion.description;
    document.getElementById("emotionImage").src = emotion.image;
}


