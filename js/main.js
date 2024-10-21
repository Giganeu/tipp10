// Funktion um die Benutzer zu registrieren
document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;

    // Hier sollten Benutzer in user_data.json gespeichert werden (im echten Projekt)
    alert(`Registriert: ${username}`);
});

// Funktion um sich anzumelden
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hier sollte die Login-Logik implementiert werden
    alert(`Eingeloggt: ${username}`);
});

// Beispiel für Logout
document.getElementById('logoutButton')?.addEventListener('click', function () {
    alert('Ausgeloggt!');
});

// Beispiel zum Hinzufügen einer Übung
document.getElementById('addExerciseForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const exerciseName = document.getElementById('exerciseName').value;

    // Hier sollte die Logik zum Speichern der Übung implementiert werden
    alert(`Übung hinzugefügt: ${exerciseName}`);
});
