const logList = document.createElement("ul");
document.body.appendChild(logList);

function appendLog(msg) {
  const li = document.createElement("li");
  li.textContent = msg;
  logList.appendChild(li);
}

const originalLog = console.log;
function log(...msgs) {
  appendLog(msgs.join(" "));
  originalLog.apply(console, msgs);
}

console.log = log;
