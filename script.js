const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = messageInput.value.trim();
    if (message === '') return;

    appendMessage(message, 'user');
    messageInput.value = '';

    handleBotReply(message);
}

async function handleBotReply(userMessage) {
    const reply = await botReply(userMessage);
    appendMessage(reply, 'bot');
}

function appendMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');

    const avatar = document.createElement('img');
    avatar.classList.add('avatar');

    avatar.src = sender === 'user'
        ? "https://cdn-icons-png.flaticon.com/512/847/847969.png"
        : "https://cdn-icons-png.flaticon.com/512/4712/4712109.png";

    const textDiv = document.createElement('div');
    textDiv.classList.add('text');
    textDiv.textContent = text;

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(textDiv);

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function botReply(msg) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Reply to: " + msg);
           
        }, 1000);
    });
}