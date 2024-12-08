console.log("Content running");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message);
  let paragraphs = document.getElementsByTagName('p');
  for (elt of paragraphs) {
    console.log(message.txt);
    elt.style['font-size'] = `${message.txt}px`;
  }
  let lists = document.getElementsByTagName('li');
  for (elt of lists) {
    console.log(message.txt);
    elt.style['font-size'] = `${message.txt}px`;
  }
  let theads = document.getElementsByTagName('th');
  for (elt of theads) {
    console.log(message.txt);
    elt.style['font-size'] = `${message.txt}px`;
  }
  let tdatas = document.getElementsByTagName('td');
  for (elt of tdatas) {
    console.log(message.txt);
    elt.style['font-size'] = `${message.txt}px`;
  }
}
