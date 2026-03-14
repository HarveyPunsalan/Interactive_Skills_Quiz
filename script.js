const form = document.querySelector("#quiz-form");
const answer = document.querySelector("#result");

const correctAnswers = {
    q1: "a",
    q2: "b",
    q3: "c"
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let score = 0;

    const selected = document.querySelectorAll('input[type="radio"]:checked');

    selected.forEach(function(input) {
        if (input.value === correctAnswers[input.name]) {
            score = score + 1;
        }
    });

    if (score === 3) {
        answer.innerHTML = `Congratulations! You got all ${score} correct!`;
        answer.style.color = "green";
    } else if (score === 0) {
        answer.innerHTML = `Don't give up! Try again!`;
        answer.style.color = "red";
    } else {
        answer.innerHTML = `You got ${score} out of 3 correct!`;
        answer.style.color = "#6b7280";
    }
});