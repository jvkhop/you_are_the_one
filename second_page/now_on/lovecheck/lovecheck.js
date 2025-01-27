const questions = [
    { text: "Do you think I love you?", image: "image1.jpg", yes: 1, no: "complain1" },
    { text: "Q2", image: "image2.jpg", yes: 2, no: "complain2" },
    { text: "Q3", image: "image3.jpg", yes: 3, no: "complain3" },
    { text: "Q4", image: "image4.jpg", yes: 4, no: "complain4" },
    { text: "Q5", image: "image5.jpg", yes: 5, no: "complain5" },
    { text: "Q6", image: "image6.jpg", yes: 6, no: "complain6" },
    { text: "Q7", image: "image7.jpg", yes: 7, no: "complain7" },
    { text: "Q8", image: "image8.jpg", yes: 8, no: "complain8" },
    { text: "Q9", image: "image9.jpg", yes: 9, no: "complain9" },
    { text: "Q10", image: "image10.jpg", yes: "end", no: "complain10" },
];

const complaints = {
    complain1: "C1",
    complain2: "C2",
    complain3: "C3",
    complain4: "C4",
    complain5: "C5",
    complain6: "C6",
    complain7: "C7",
    complain8: "C8",
    complain9: "C9",
    complain10: "C10",
};

let currentQuestion = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const imageElement = document.getElementById('image');
    const question = questions[currentQuestion];
    questionElement.textContent = question.text;
    imageElement.src = question.image;
}

function nextQuestion(answer) {
    const question = questions[currentQuestion];
    const next = question[answer];
    if (typeof next === 'number') {
        currentQuestion = next;
        displayQuestion();
    } else if (next === 'end') {
        document.getElementById('question').textContent = "I am so glad to hear that! I love you!";
        document.querySelector('.buttons').style.display = 'none';
    } else {
        alert(complaints[next]);
        displayQuestion();
    }
}

// Initialize the first question
displayQuestion();