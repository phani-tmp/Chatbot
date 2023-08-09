let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let userInput = document.getElementById("userInput");
let sendMsgBtn = document.getElementById("sendMsgBtn");
let chatContainer = document.getElementById("chatContainer");

function sendMsgBtn1() {
    let di = document.createElement("div");
    di.classList.add("msg-to-chatbot-container");
    chatContainer.appendChild(di);

    let spa = document.createElement("span");
    spa.textContent = userInput.value;
    spa.classList.add("msg-to-chatbot");
    di.appendChild(spa);
    userInput.value = "";
    msgFromBot();
}

function msgFromBot() {
    let length = chatbotMsgList.length;
    let msg = chatbotMsgList[Math.ceil(Math.random() * length) - 1];
    let div = document.createElement("div");
    div.classList.add("msg-from-chatbot-container");
    chatContainer.appendChild(div);

    let span = document.createElement("span");
    span.textContent = msg;
    span.classList.add("msg-from-chatbot");
    div.appendChild(span);

}