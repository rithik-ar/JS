const InputField = document.getElementById("temp-input");
const InputBtn = document.getElementById("convert-button");

let answer;

function CelToFah (InputVal){
    return InputVal*9/5 + 32;
}

function FahToCel (InputVal){
    return (InputVal-32)*5/9;
}

InputBtn.onclick = function(){
    
    const InputVal = Number(InputField.value);  
    const Option1 = document.getElementById("ctf");
    const Option2 = document.getElementById("ftc");

    if (Option1){
        answer = Number(CelToFah(InputVal).toFixed(2))
        console.log(answer);
    }
    else if (Option2){
        answer = Number(CelToFah(InputVal).toFixed(2))
        console.log(answer);
    }

    else{
        answer = 'Check a valid box!';
    }


//Display the result on screen later instead of logging it on the console 


}

