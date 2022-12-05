/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/
const form = document.querySelector("#quiz-form");
const answers = Array.from(document.querySelectorAll(".answer")); //no filter for node list, must turn into array
const question = Array.from(document.querySelectorAll(".question-item"));
const alter = document.querySelector("#alert");
console.log(form);
console.log(answers);
console.log(question);
console.log(alter);

// TODO: 3. Create a submit event listener for the form that does the following.
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // answers.forEach(e => console.log(e.checked))
  //get the all checked anwser
  answers.forEach((e) =>
    e.closest(".question-item").classList.add("incorrect")
  ); //marked all question not anwsered as incorrect
  const checkedAnwsers = answers.filter((a) => a.checked);
  console.log(checkedAnwsers);
  //check the selected value is true or not
  checkedAnwsers.forEach((e) => {
    console.log(e.value === "true");
    const question = e.closest(".question-item"); //find the question it belongs to
    if (e.value === "true") {
      question.classList.remove("incorrect");
      question.classList.add("correct");
    } else {
      question.classList.remove("incorrect");
      question.classList.add("incorrect");
    }
  });
  const checkAllCorrect = question.every((e) =>
    e.classList.contains("correct")
  );
  if (checkAllCorrect) {
    console.log("All correct");
    alter.classList.add("active");
    setTimeout(() => {
      alter.classList.remove("active");
    }, 2000);
  } else {
    console.log("Not All");
  }
});
//    1. Prevent the default behaviour
//    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
//    3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
//    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
//    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
//    6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
//    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)
