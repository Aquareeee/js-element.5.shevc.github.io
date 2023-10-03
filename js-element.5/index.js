const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const answersList = document.getElementById('answers');
const scoreElement = document.getElementById('score');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: 'Какой язык программирования наиболее популярен?',
        answers: ['JavaScript', 'Python', 'Java', 'C++'],
        correctAnswer: 'JavaScript',
        points: 3
    },
    {
        question: 'Сколько байт в килобайте?',
        answers: ['1000', '1024', '1025', '10000'],
        correctAnswer: '1024',
        points: 2
    },
    {
        question: 'Что такое CSS?',
        answers: ['Каскадные стилевые таблицы', 'Коробочная сортировка', 'Сomputer Super System', 'Компьютерный язык программирования'],
        correctAnswer: 'Каскадные стилевые таблицы',
        points: 1
    }
];

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    answersList.innerHTML = '';

    currentQuestion.answers.forEach((answer) => {
        const answerElement = document.createElement('li');
        answerElement.textContent = answer;
        answerElement.addEventListener('click', () => checkAnswer(answer, currentQuestion.correctAnswer, currentQuestion.points));
        answersList.appendChild(answerElement);
    });
}

function checkAnswer(selectedAnswer, correctAnswer, points) {
    if (selectedAnswer === correctAnswer) {
        score += points;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizContainer.innerHTML = '<h2>Тест завершен!</h2>';
    scoreElement.textContent = score + ' баллов';
    nextButton.style.display = 'none';
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
});

displayQuestion();