function Question() {
  //the wording for the player
  this.text = ""; 
  
  // type of question: addition, subtraction, multiplication, division
  this.type = "";
  this.correctAnswer = 0;
  this.wrongAnswer1 = 0;
  this.wrongAnswer2 = 0;
  
  //which button will get the correct answer
  this.correctPosition = 0;

  var qType = round(random(1, 4));
  var num1;
  var num2;

  if (qType === 1) {
    //addition of two random numbers between 0 and 50
    this.type = "addition";
    num1 = round(random(0, 50));
    num2 = round(random(0, 50));
    this.text = num1 + "+" + num2;
    this.correctAnswer = num1 + num2;
  } else if (qType === 2) {
    this.type = "subtraction";
    num1 = round(random(0, 50));
    num2 = round(random(0, 50));
    //ensure it is always a positive answer
    if (num1 > num2) {
      this.text = num1 + "-" + num2;
      this.correctAnswer = num1 - num2;
    } else {
      this.text = num2 + "-" + num1;
      this.correctAnswer = num2 - num1;
    }
  } else if (qType === 3) {
    //multiplication up to 7 times 7
    this.type = "multiplication";
    num1 = round(random(1, 7));
    num2 = round(random(1, 7));
    this.text = num1 + "x" + num2;
    this.correctAnswer = num1 * num2;
  } else {
    // qType = 4, division of whole numbers up to 7x7
    // so round the answer
    this.type = "division";
    num1 = round(random(1, 49));
    num2 = round(random(1, 7));
    this.text = num1 + "÷" + num2 + " (rounded)";
    this.correctAnswer = round(num1 / num2);
  }
  // don't always have the same answer pattern
  if (round(random(1, 2)) === 1) {
    this.wrongAnswer1 = this.correctAnswer + round(random(1, 8));
  } else {
    this.wrongAnswer1 = this.correctAnswer - round(random(1, 8));
  }
  if (round(random(1, 2)) === 1) {
    this.wrongAnswer2 = this.correctAnswer + round(random(1, 8));
  } else {
    this.wrongAnswer2 = this.correctAnswer - round(random(1, 8));
  }
  if (this.wrongAnswer1 === this.wrongAnswer2) {
    //if both wrongAnsers are the same, change one a bit
    this.wrongAnswer2 = this.wrongAnswer2 + round(random(1, 4));
  }

  this.correctPosition = round(random(1, 3));        
}