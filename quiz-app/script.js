const quizData = [
{
question: "What is the capital city of Spain?",
a: "Madrid",
b: "Barcelona",
c: "Zaragoza",
d: "Mallorca",
correct: 'a'
},

{
question: "What is the capital city of Germany?",
a: "Frankfurt",
b: "Munich",
c: "Berlin",
d: "Duisburg",
correct: 'c'
},

{
question: "Which one of these countries is not located in Europe?",
a: "Belarus",
b: "Bolivia",
c: "Portugal",
d: "Greece",
correct: 'b'
},


{
question: "Which one of these countries is located in Africa?",
a: "Japan",
b: "Mongolia",
c: "Benin",
d: "Australia",
correct: 'c'
}
];

let currentQuestion = 0;

 const firstAnswer = document.getElementById("ansF");
 const secondAnswer = document.getElementById("ansS");
 const thirdAnswer = document.getElementById("ansT");
 const fourthAnswer = document.getElementById("ansFth");
 const quest = document.getElementById("headerQ");
 const btn = document.getElementById("btn");
 const inputs = document.getElementsByClassName('input');
 const inputsArray = Array.from(inputs);
 let score =0;
 let answer = undefined;




 loadQuestion();

 function loadQuestion(){
   unCheck();
    quest.textContent = quizData[currentQuestion].question;
    firstAnswer.textContent =  quizData[currentQuestion].a;
    secondAnswer.textContent =  quizData[currentQuestion].b;
    thirdAnswer.textContent =  quizData[currentQuestion].c;
    fourthAnswer.textContent =  quizData[currentQuestion].d;
 }



function checked(){
   return inputsArray.some(input => input.checked);
}

function unCheck(){
   inputsArray.forEach(input => {
      input.checked = false;
   })
}

function correctAns(){
   inputsArray.forEach(input => {
      if(input.checked){
         answer = input.id;
         answer.charAt(0);
      }
   });
}


btn.addEventListener("click" , nextQuestion);

function nextQuestion(){
   

if(checked()){

   correctAns();
   if(answer == quizData[currentQuestion].correct){
      score++;
   }
currentQuestion++;
if(currentQuestion < quizData.length ){
loadQuestion();
}

else window.alert(`Your score is ${score} / ${quizData.length}`);
}
else window.alert("Please pick an answer!");

}






