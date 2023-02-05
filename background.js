chrome.contextMenus.create({
    title: "Read Aloud",
    contexts:["selection"],
    onclick: readSelectedText
});



function readSelectedText(info, tab) {
    chrome.tabs.executeScript({
        code: `
            var selectedText = window.getSelection().toString();
            var msg = new SpeechSynthesisUtterance(selectedText);
            window.speechSynthesis.speak(msg);
            
        `
        
    });
  
}



/*
function readSelectedText(info,tab){
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        //code in here will run every time a user goes onto a new tab, so you can insert your scripts into every new tab
        code: `
            var selectedText = window.getSelection().toString();
            var msg = new SpeechSynthesisUtterance(selectedText);
            window.speechSynthesis.speak(msg);
        `
    });

}
console.log("working")

function readSelectedText(){
    
    var a = "Hell0";
    alert(a);
}

*/
