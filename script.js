let score = 0;
let num1, num2;

function generateQuestion() {
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  document.getElementById('question').textContent = `What is ${num1} + ${num2}?`;
  document.getElementById('answer').value = '';
  document.getElementById('feedback').textContent = '';
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('answer').value);
  if (userAnswer === num1 + num2) {
    score++;
    document.getElementById('feedback').textContent = "✅ Correct! You earned a badge!";
    document.getElementById('score').textContent = score;
    launchConfetti();
  } else {
    document.getElementById('feedback').textContent = "❌ Oops! Try again.";
  }
  setTimeout(generateQuestion, 1000);
}

function launchConfetti() {
  const container = document.getElementById('confetti-container');
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = Math.random() * window.innerHeight / 2 + 'px';
    confetti.style.backgroundColor = getRandomColor();
    container.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 2000);
  }
}

function getRandomColor() {
  const colors = ['#ff0', '#f00', '#0f0', '#0ff', '#f0f', '#00f'];
  return colors[Math.floor(Math.random() * colors.length)];
}

generateQuestion();
