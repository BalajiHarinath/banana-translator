const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txtinput");
const outputDiv = document.querySelector("#output-text");

const serverURL = "https://api.funtranslations.com/translate/minion.json";

const getTranslatorURL = input=>{
    return serverURL + "?" + "text=" + input
}

const errorHandler = error=>{
    console.log("error occured" + error);
    alert("Some issue with the server! please try after sometime")
}

const clickHandler = ()=>{
    console.log("clicked!")
    const inputText = txtInput.value;
    fetch(getTranslatorURL(inputText))
    .then(response => response.json())
    .then(json => {outputDiv.innerText = json.contents.translated;})
    .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler);