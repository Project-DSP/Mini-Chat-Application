const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = messageInput.value.trim();
    if (message === '') return;

    appendMessage(message, 'user');
    messageInput.value = '';

    // Async bot reply
    handleBotReply(message);
}

async function handleBotReply(userMessage) {
    const reply = await botReply(userMessage);
    appendMessage(reply, 'bot');
}

function appendMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = text;
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