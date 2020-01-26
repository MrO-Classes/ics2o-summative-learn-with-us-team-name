var changedQuestions = 0;
const maxNewQuestions = 3;

var drawQuestions = function() {
  currentScene = 8;
  activeScreen = "Question";

  //Clear the screen
  background(34, 229, 229)
  NewQuestionButton();

  textSize(30)
  text("choose the right answer to advance", 10, 10)

  textSize(40);
  text(question.text, 225, 100);
  
  //draw the three answer buttons, putting the correct answer in the right position
  if (question.correctPosition===1) {
      AnswerButton(100, 200, question.correctAnswer);
      AnswerButton(200, 200, question.wrongAnswer1);
      AnswerButton(300, 200, question.wrongAnswer2);
  } else if (question.correctPosition===2) {
      AnswerButton(100, 200, question.wrongAnswer1);
      AnswerButton(200, 200, question.correctAnswer);
      AnswerButton(300, 200, question.wrongAnswer2);
  } else if (question.correctPosition===3) {
     AnswerButton(100, 200, question.wrongAnswer1);
     AnswerButton(200, 200, question.wrongAnswer2);
     AnswerButton(300, 200, question.correctAnswer);
  }
  
  // three buttons... which one gets the right anser ==> question.correctPosition
  //console.log("question.text="+question.text);
  //console.log("question.type="+question.type);
  //console.log("question.correctAnswer="+question.correctAnswer);
  //console.log("question.wrongAnswer1="+question.wrongAnswer1);
 // console.log("question.wrongAnswer2="+question.wrongAnswer2);
 // console.log("question.correctPosition="+question.correctPosition);
  
  
} 
