var inputText = document.querySelector("#textArea");
var submitBtn = document.querySelector("#btn");
var output = document.querySelector("#outputBox");
var url = "https://api.funtranslations.com/translate/minion.json";

function getNewUrl(input){
    return url + "?" + "text=" + input
}
function errorHandler(error){
    console.log("error occured" ,error);
    alert("something wrong with server! try again after some time")
}

function clickHandler(){
    var inputTxt = inputText.value;


fetch(getNewUrl(inputTxt))
.then(response=>response.json())
.then(json=>{
         var translatedText = json.contents.translated;
         output.innerText = translatedText;
         
})
.catch(errorHandler);

}

submitBtn.addEventListener('click',clickHandler);

