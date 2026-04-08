let chatCount = 0; let taskCount = 0;

function showSection(section) { document.querySelectorAll('.section').forEach(s => s.classList.remove('active')); document.getElementById(section).classList.add('active'); }

function sendMessage() { const input = document.getElementById('userInput'); const message = input.value; if (!message) return;

addMessage(message, 'user'); input.value = '';

setTimeout(() => { const response = ' mock response to: ' + message; addMessage(response, 'ai'); chatCount++; document.getElementById('chatCount').innerText = chatCount; }, 500); }

function addMessage(text, sender) { const chatBox = document.getElementById('chatBox'); const div = document.createElement('div'); div.className = 'chat-message ' + sender; div.innerText = text; chatBox.appendChild(div); chatBox.scrollTop = chatBox.scrollHeight; }

function summarize() { processTool('Summary: '); } function generateNotes() { processTool('Notes: '); } function explainCode() { processTool('Code Explanation: '); }

function processTool(prefix) { const input = document.getElementById('toolInput').value; if (!input) return; const output = prefix + input.slice(0, 100); document.getElementById('toolOutput').innerText = output; taskCount++; document.getElementById('taskCount').innerText = taskCount; }