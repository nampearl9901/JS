
import { checkQuestion, renderQuestion } from "./questionController.js";
import { dataRaw } from "../data/questions.js";
let currentQuestionIndex = 0;


    

let data_question = dataRaw.map((question)=>{
    return{...question, isCorrect:null};

});
console.log('data_question: ',data_question);
renderQuestion(
    data_question[currentQuestionIndex],
    currentQuestionIndex,
    data_question.length
  );
  

// user click
let handleNextQuestion = ()=>
{
    let currentQuestion = data_question[currentQuestionIndex];

    currentQuestion.isCorrect = checkQuestion( currentQuestion);
  


   currentQuestionIndex++;
    currentQuestion = data_question[currentQuestionIndex];

   if(currentQuestionIndex >= data_question.length)
   {
    document.getElementById("quizList").style.display="none";
    document.getElementById("quizResult").style.display="block";
    return;

   }
    renderQuestion(currentQuestion,currentQuestionIndex,data_question.length)
};

window.handleNextQuestion = handleNextQuestion;