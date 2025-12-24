// Dark Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    formResponse.textContent = `Thank you, ${name}! Your message has been received.`;
    formResponse.style.color = 'green';

    contactForm.reset();
});

// Mental Health Self-Check Quiz
const quizForm = document.getElementById('quizForm');
const quizResult = document.getElementById('quizResult');

quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let score = 0;

    const answers = ['yes','yes','yes']; // "Yes" indicates concern
    const formData = new FormData(quizForm);

    for (let i = 0; i < answers.length; i++) {
        if (formData.get(`q${i+1}`) === 'yes') score++;
    }

    if (score === 0) {
        quizResult.textContent = "You seem to be doing well! Keep taking care of yourself.";
    } else if (score === 1) {
        quizResult.textContent = "Minor concerns detected. Consider checking in with a counselor.";
    } else if (score === 2) {
        quizResult.textContent = "Moderate concerns detected. Seeking guidance from a professional is recommended.";
    } else {
        quizResult.textContent = "High concerns detected. Please reach out to a mental health professional immediately.";
    }

    quizForm.reset();
});

// Motivational Quotes Carousel
const quotes = [
    "You are stronger than you think.",
    "It's okay to not be okay.",
    "Every day is a new beginning.",
    "Your mental health matters.",
    "Take a deep breath, you've got this."
];

let quoteIndex = 0;
const quoteDisplay = document.getElementById('quoteDisplay');

function showQuote() {
    quoteDisplay.textContent = quotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quotes.length;
}

showQuote();
setInterval(showQuote, 5000); // Change quote every 5 seconds
