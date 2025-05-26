function getusername() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('username').innerHTML = `${username}`;

    } else {
        document.getElementById('username').textContent = 'Guest';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    getusername();
    
});