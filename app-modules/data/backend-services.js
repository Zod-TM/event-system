const everlive = new Everlive({
    appId: "41vzn3bx8qqhv7v0",
    scheme: "https",
    authentication: {
        persist: true,
        onAuthenticationRequired: () => {
            window.location = '/#login';
        }
    }
});

function register(user) {
    let displayName = `${user.firstName} ${user.secondName}`,
        attrs = {
            DisplayName: displayName
        };

    let promise = new Promise((resolve, reject) => {
        everlive.Users.register(user.username, user.password, attrs)
            .then(resolve)
            .catch(reject);
    });

    return promise;
}

function login(user) {
    let promise = new Promise((resolve, reject) => {
        everlive.authentication.login(user.username, user.password)
            .then(resolve)
            .catch(reject => {
                toastr.error(reject.message);
            });
    });

    return promise;
}

function logout() {
    let promise = new Promise((resolve, reject) => {
        everlive.authentication.logout()
            .then(resolve)
            .catch(reject);
    });

    return promise;
}

function getCurrentUser() {
    let promise = new Promise((resolve, reject) => {
        everlive.Users.currentUser()
            .then(resolve)
            .catch(reject);
    });

    return promise;
}

function isLoggedIn() {
    let promise = new Promise((resolve, reject) => {
        getCurrentUser()
            .then((data) => {
                resolve(!!data.result);
            });
    });

    return promise;
}

function getAllEvents(){
    
    let promise = new Promise((resolve, reject) => {
        everlive.data('Events').get()
            .then(resolve);
    });

    return promise;
}


export { register, login, isLoggedIn, getAllEvents, logout, getCurrentUser, everlive };