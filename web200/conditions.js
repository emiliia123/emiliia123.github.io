const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");
const feedback = document.getElementById("feedback");

checkButton.addEventListener("click", function () {

    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');

    if (!q1 || !q2 || !q3 || !q4) {
        result.textContent = "Please answer all questions.";
        feedback.textContent = "";
        return;
    }

    let score = 0;

    if (q1.value === "let") {
        score++;
    }

    if (q2.value === "if") {
        score++;
    }

    if (q3.value === "click") {
        score++;
    }

    switch (q4.value) {
        case "switch":
            score++;
            break;

        case "alert":
            break;

        case "prompt":
            break;

        default:
            break;
    }

    result.textContent = "Your score is " + score + " out of 4.";

    if (score === 4) {
        feedback.textContent = "Excellent! You got every question correct.";
    } else if (score === 3) {
        feedback.textContent = "Great job! You only missed one question.";
    } else if (score === 2) {
        feedback.textContent = "Good try. Review the lesson and try again.";
    } else {
        feedback.textContent = "Keep practicing. You can improve your score.";
    }

});
