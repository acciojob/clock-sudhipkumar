//your JS code here. If required.
function updateTime() {
            const now = new Date();
            const formattedTime = now.toLocaleString();
            document.getElementById('timer').textContent = formattedTime;
        }