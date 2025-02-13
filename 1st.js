const messages = [
    "Are u sure?",
    "Really sure??",
    "Think again!",
    "Pookie please...",
    "Just think about it!",
    "If u say no, I will really sad...",
    "I will cry...",
    "Last chance!",
    "Okay, I will give you one more chance!",
    "I will be happy if you say yes!",
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");

    // تغيير نص زر "No" فقط
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // تكبير زر "Yes" فقط باستخدام backticks
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "y.html";
}
