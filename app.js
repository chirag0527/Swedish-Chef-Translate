let translate = document.querySelector("#btn");
let input = document.querySelector("#input");
let output = document.querySelector(".output");
let audioTurn = new Audio("ting.mp3");

let apiURL = "https://api.funtranslations.com/translate/chef.json";

function errorHandler(error){
    console.log(`${error} type of error occured.`);
    alert("Something seems to be wrong, Try again later");
}

function translateText(){
    let text = input.value;
    if(text==""){
        alert("Please enter some text");
        return;
    }
    else{
    audioTurn.play();
    const query=`${apiURL}?text=${text}`;
    fetch(query)
    .then(response => response.json())
    .then(data => {output.innerText = data.contents.translated;})
    .catch(errorHandler)
    }
}    

translate.addEventListener('click',translateText);