function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString();
}

setInterval(updateTime, 1000);
updateTime();
