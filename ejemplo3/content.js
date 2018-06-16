console.log("Chrome extension funcionando")

let paragraphs =  document.getElementsByTagName('p')

for (elt of paragraphs){
    elt.style['background-color'] = '#FF00FF';
} 

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message,sender,sendResponse){
    console.log(message.txt)
    if(message.txt==="hola"){
        let paragraphs =  document.getElementsByTagName('p')

        for (elt of paragraphs){
            elt.style['background-color'] = '#003366';            
        } 

    }
}

console.log("informacion del alto del navegador: " + window.innerHeight);