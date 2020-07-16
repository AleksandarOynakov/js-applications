function logger() {
    let userInfo = document.getElementById('user-info');
    let login = document.getElementById('Login');
    login.addEventListener('click', () => {
        firebase.auth().signInWithEmailAndPassword('test@mail.com', 'passswords123')
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                userInfo.textContent = `${errorCode}: ${errorMessage}`;
            });
    });

    let logout = document.getElementById('Logout');
    logout.addEventListener('click', () => {
        firebase.auth().signOut()
            .catch(() => {
                userInfo.textContent = 'Error';
            });
    });

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            userInfo.textContent = user.email;
        } else {
            userInfo.textContent = 'User signed out';
        }
    });
}

logger();