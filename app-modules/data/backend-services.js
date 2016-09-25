const apiKey = 'fwgjsmld45ozyw0n',
    everlive = new Everlive(apiKey);

function register(user) {
    let promise = new Promise(function (resolve, reject) {
        everlive.Users.register(user.username, user.password)
            .then(resolve())
            .catch(reject());
    });

    return promise;
}

function login(user) {
    let promise = new Promise(function (resolve, reject) {
        everlive.Users.login(user.username, user.password)
            .then(resolve())
            .catch(reject());
    });

    return promise;
}

export { register, login };