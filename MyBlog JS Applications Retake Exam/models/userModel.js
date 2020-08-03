export let userManagement = {
    login: async (email, password) => {
        let response = await firebase.auth().signInWithEmailAndPassword(email, password);
        return response;
    },
    logout: async () => {
        await firebase.auth().signOut();
    },
    register: async (email, password) => {
        let response = await firebase.auth().createUserWithEmailAndPassword(email, password);
        if (response.status >= 400) {
            throw response;
        }
        return response;
    },
    getCurrentUserInfo: () => {
        let user = firebase.auth().currentUser;

        if (user) {
            return user;
        }
    }
}