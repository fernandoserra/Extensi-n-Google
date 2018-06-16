console.log("background running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    console.log("Button presionando")
    console.log(tab)
    
    let msg={

        txt:"hola"
    }

    chrome.tabs.sendMessage(tab.id, msg);
}