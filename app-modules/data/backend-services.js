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

const EVERLIVE_AUTHENTICATION_KEY = '__everlive_auth_key41vzn3bx8qqhv7v0$authentication';

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
            .then((data) => {
                let user = data.result;
                resolve(user);
            })
            .catch(reject);
    });

    return promise;
}

function isLoggedIn() {
    return Promise.resolve(!!localStorage.getItem(EVERLIVE_AUTHENTICATION_KEY));
}

function getAllEvents() {

    let promise = new Promise((resolve, reject) => {
        everlive.data('Events').get()
            .then(resolve);
    });

    return promise;
}

function getSubscriberByUserId(userId) {
    let promise = new Promise(function (resolve, reject) {
        $.ajax({
            type: 'GET',
            url: `http://api.everlive.com/v1/41vzn3bx8qqhv7v0/Subscriber?filter={"User":"${userId}"}`,
            contentType: "application/json",
            success: function (data) {
                let subscriber = data.Result[0];
                resolve(subscriber);
            },
            error: function (data) {
                reject(data);
            }
        });
    });

    return promise;
}

function addEventToSubscriber(subscriber, postID) {
    let promise = new Promise(function (resolve, reject) {
        let events = [];
        events.push(...subscriber.Events);

        for (let i = 0; i < events.length; i += 1) {
            if (events[i] === postID) {
                reject();
                return;
            }
        };

        events.push(postID);

        var object = {
            'Events': events
        }

        $.ajax({
            type: "PUT",
            url: 'http://api.everlive.com/v1/41vzn3bx8qqhv7v0/Subscriber/' + subscriber.Id,
            contentType: "application/json",
            data: JSON.stringify(object),
            success: function (data) {
                resolve(data);
            },
            error: function (error) {
                reject(error);
            }
        });
    });

    return promise;
}


export { register, login, isLoggedIn, getAllEvents, logout, getCurrentUser, getSubscriberByUserId, addEventToSubscriber };