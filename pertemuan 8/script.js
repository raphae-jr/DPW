const loginForm = document.getElementById('loginForm');

const usernameInput = document.getElementById('username');

const loginCard = document.getElementById('loginCard');

const dashboardCard = document.getElementById('dashboardCard');

const welcomeMessage = document.getElementById('welcomeMessage');

const btnLogout = document.getElementById('btnLogout');

const STORAGE_KEY = 'username';

function checkLoginStatus() {

    const savedUser = localStorage.getItem(STORAGE_KEY);

    if (savedUser) {

        welcomeMessage.textContent = `Halp, ${savedUser}!`;

        loginCard.classList.add('hidden');

        dashboardCard.classList.remove('hidden');

    } else {

        loginCard.classList.remove('hidden');

        dashboardCard.classList.add('hidden');
    }
}

loginForm.addEventListener('submit', function (event) {

    event.preventDefault();

    const username = usernameInput.value.trim();

    if (username) {

        localStorage.setItem(STORAGE_KEY, username);

        loginForm.reset();

        checkLoginStatus();
    }
});

btnLogout.addEventListener('click', function () {

    localStorage.removeItem(STORAGE_KEY);

    checkLoginStatus();
});

document.addEventListener('DOMContentLoaded', checkLoginStatus);