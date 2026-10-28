export function submitData(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const password = document.getElementById("password").value;

    alert(`Login berhasil, username: ${nama}`);
}

document
    .getElementById("login-form")
    .addEventListener("submit", submitData);