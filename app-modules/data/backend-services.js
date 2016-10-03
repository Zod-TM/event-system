import { requester } from 'requester';
import { everlive } from 'everliveSetup';

const EVERLIVE_AUTHENTICATION_KEY = '__everlive_auth_key41vzn3bx8qqhv7v0$authentication';

function register(user) {
    let displayName = `${user.firstName} ${user.secondName}`,
        attrs = {
            DisplayName: displayName
        };

    let promise = new Promise((resolve, reject) => {
        everlive.Users.register(user.username, user.password, attrs)
            .then(function (data) {
                let userId = data.result.Id;

                return createSubsciber(userId);
            })
            .then(resolve)
            .catch(reject);
    });

    return promise;
}

function createSubsciber(userId) {
    let url = 'http://api.everlive.com/v1/41vzn3bx8qqhv7v0/Subscriber'
    let body = {
        'User': userId,
        'Events': []
    }
    let requestData = {
        url,
        body
    }

    return requester.post(requestData);
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
            .catch(data => console.log(data));
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
        let url = `http://api.everlive.com/v1/41vzn3bx8qqhv7v0/Subscriber?filter={"User":"${userId}"}`;
        let requestData = {
            url
        }

        requester.get(requestData)
            .then((data) => {
                let subscriber = data.Result[0];
                resolve(subscriber);
            })
            .catch(reject);
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

        let url = 'http://api.everlive.com/v1/41vzn3bx8qqhv7v0/Subscriber/' + subscriber.Id,
            body = {
                'Events': events
            }
        let requestData = {
            url,
            body
        }

        requester.put(requestData)
            .then(resolve)
            .catch(reject);
    });

    return promise;
}

function getSubscribedEvents(subscriber) {
    let promise = new Promise(function (resolve, reject) {
        let filter = {
            "Id": { "$in": subscriber.Events }
        };
        let headers = {
            "X-Everlive-Filter": JSON.stringify(filter)
        },
            url = `http://api.everlive.com/v1/41vzn3bx8qqhv7v0/Events`;
        let requestData = {
            url,
            headers
        }

        requester.get(requestData)
            .then(resolve)
            .catch(reject);
    });

    return promise;
}


export { register, login, isLoggedIn, getAllEvents, logout, getCurrentUser, getSubscriberByUserId, addEventToSubscriber, getSubscribedEvents };