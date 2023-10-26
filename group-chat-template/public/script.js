const messageList = document.getElementById("messages-list");
const entryInput = document.getElementById("entry-input");
const sendButton = document.getElementById("send-button");

sendButton.onclick = () => {
    const text = entryInput.value;
    console.log(text);

    const request = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            message : text
    })
    }

    fetch("/api/send",request);

    setInterval(async () => {
        //Gets Message
        const response = await fetch("/api/messages");
        let data = await response.json();
        const messages = data.messages;

        console.log(messages);

        //Creates new Block of for each new message
        messageList.innerHTML = "";
        for (const message of messages){
            const span = document.createElement("span");
            span.classList.add("message");
            span.textContent = message;
            messageList.appendChild(span);
        }

    })
}
