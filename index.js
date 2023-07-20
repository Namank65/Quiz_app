const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Girrafe", correct: false}
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            {text: "Vatican City", correct: true},
            {text: "Bhutan", correct: false},
            {text: "Nepal", correct: false},
            {text: "Sri lanka", correct: false}
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            {text: "Kalhari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antartica", correct: true}
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Sri lanka", correct: false}
        ]
    },
    {
        question: "Which animal is known as the 'ship' of the desert?",
        answers: [
            {text: "Monkey", correct: false},
            {text: "Hippo", correct: false},
            {text: "Camel", correct: true},
            {text: "Girrafe", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerbtns = document.getElementById("answer-buttons");
const nextbtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function StartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextbtn.innerHTML = "NEXT";
    showQuestins();
}

function showQuestins(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbtns.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextbtn.style.display = "none";
    while(answerbtns.firstChild){
        answerbtns.removeChild(answerbtns.firstChild);
    }
}

function selectAnswer(event){
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerbtns.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add = ("correct");
        }
        button.disabled = true;
    });
    nextbtn.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} :)`;
    nextbtn.innerHTML = "Play Again";
    nextbtn.style.display = "block";

}

function handelNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestins();
    }else{
        showScore();
    }
}

nextbtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handelNextButton();
    }else{
        StartQuiz();
    }
});

StartQuiz();

