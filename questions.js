let currentQuestion = 0;
let score = 0;
let quizData = [];
let selectedCount = 10;

async function loadQuizData() {
  try {
    const res = await fetch('questions.json');
    const fullData = await res.json();
    selectedCount = parseInt(localStorage.getItem('numQuestions')) || 10;
    quizData = shuffleArray(fullData).slice(0, selectedCount);
    loadQuestion();
  } catch (error) {
    console.error('Error loading questions:', error);
    document.getElementById('question').innerText = "Failed to load questions.";
  }
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById('question').innerText = q.question;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';

  ['A', 'B', 'C', 'D'].forEach(letter => {
    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn-outline-warning', 'mb-2');
    btn.innerText = q[letter];
    btn.onclick = () => {
      const isCorrect = letter === q.answer;
      btn.classList.remove('btn-outline-warning');
      btn.classList.add(isCorrect ? 'btn-success' : 'btn-danger');

      if (isCorrect) score++;

      // User can only choose one answer and then it will show them if it is green or red 
      const allButtons = optionsDiv.querySelectorAll('button');
      allButtons.forEach(b => b.disabled = true);

      setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
          loadQuestion();
        } else {
          localStorage.setItem('score', score);
          window.location.href = 'results.html';
        }
      }, 800);
    };
    optionsDiv.appendChild(btn);
  });
}

window.onload = loadQuizData;

