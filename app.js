var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txtinput");
var outputDiv = document.querySelector("#output-text");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslatorURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    console.log("error occured" + error);
    alert("Some issue with the server! please try after sometime")
}

function clickHandler(){
    console.log("clicked!")
    var inputText = txtInput.value;
    fetch(getTranslatorURL(inputText))
    .then(response => response.json())
    .then(json => {outputDiv.innerText = json.contents.translated;})
    .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler);