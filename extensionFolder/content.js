console.log("Chrome extension go?");



chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponce) {
    console.log(message.txt);
    if (message.txt == "Hello") {
        let paragraphs = document.getElementsByTagName('p');
        for (elt of paragraphs) {
            elt.style['background-color'] = '#FF00FF';
        }
    }
}