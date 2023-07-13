
let renderRadioButton = (data)=>
{
    return `
    <div class="form-check col-12">
    <label class="form-check-label">
      <input type="radio" class="form-check-input" name="sigleChoice" id="" value="${data.exact}">
      ${data.content}
    </label>
  </div>`;
}



let rendersiglechoice = (question)=>
{
    console.log("Question: ",question);

    let contentHTML =/*html*/ `<p>${question.content}</p> 

    `;
    
question.answers.forEach((answer)=>{ 
    contentHTML += renderRadioButton(answer);
});

    document.getElementById("quiz_content").innerHTML = contentHTML; 
};







let renderfillinblank = (question)=>
{
    console.log("Question: ",question);
    let contentHTML =/*html*/ `<p class="col-12">${question.content}</p>

    <div class="form-group col-12">
    <input data-no-answer='${question.answers[0].content}' type="text" class="form-control " id="fillToInput"  placeholder="Câu Trả Lời Là ???">
    </div>
        

    `;

    document.getElementById("quiz_content").innerHTML = contentHTML; 
};


export let renderQuestion=(question,currentQuestionIndex,total)=>
{
    // show số thứ tự câu hỏi hiện tại
    document.getElementById("current_step").innerText=`${currentQuestionIndex + 1}/${total}`;
    console.log("Question: ",question);
    if (question.questionType == 1)
    {
        // gọi làm render sigler choice
        rendersiglechoice(question);
    }
    else{
        // gọi hàm render fill in blank

        renderfillinblank(question);
    }
};


let  checksiglechoice = ()=>
{

    if (!document.querySelector('input[name="singleChoice"]:checked'))
    {
        return false;
    }
    let userAnswer = document.querySelector('input[name = "singleChoice"]:checked').value;
    if(userAnswer == "true")
    {
        return true;
    }else{
        return false;
    }
};
let  checkfillinblank = ()=>
{
    let inputEl= document.getElementById("fillToInput");
   console.log("inputEl: ",inputEl.dataset);
   return (inputEl.value.trim() == inputEl.dataset.noAnswer.trim());
};


export let checkQuestion = (question)=>
{
    if (question.questionType == 1)
    {
        //gọi hàm check sigle choice
        return checksiglechoice();
        
    }else{
        //gọi hàm check fill in blank
        return checkfillinblank();
    }
};