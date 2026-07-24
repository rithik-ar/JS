const InputField = document.getElementById("input");
const RollBtn = document.getElementById("button");
const Result = document.getElementById("result");

RollBtn.onclick = function(){

    let ToGenerate = Number(InputField.value);

    let GeneratedValues = [];
    let Images = [];

    for(i = 0; i<ToGenerate; i++){

        let number = Number(Math.floor(Math.random()*6 + 1));

        GeneratedValues.push(number);
        Images.push(`<img src ="./images/${number}.png">`);

    }

    //console.log(...GeneratedValues);

    Result.innerHTML = Images.join('');



}