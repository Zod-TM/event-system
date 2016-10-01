import { register as registerUser, login as loginUser, isLoggedIn } from 'backendServices';
import { get as getTemplate } from 'templateLoader';

function register() {
    getTemplate('register')
        .then(function (template) {
            $('#content').html(template());

            $('#btn-register').on('click', function () {
                var user = {
                    username: $('#tb-reg-username').val(),
                    password: $('#tb-reg-pass').val(),
                    firstName: $('#tb-first-name').val(),
                    secondName: $('#tb-second-name').val()
                };

                registerUser(user)
                    .then(function () {
                        window.location = '/#';
                        toastr.success('User registered!');
                    });
            });
        });
}

function login() {
    getTemplate('login')
        .then(function (template) {
            $('#content').html(template());

            $('#btn-login').on('click', function () {
                var user = {
                    username: $('#tb-login-username').val(),
                    password: $('#tb-login-pass').val()
                };

                loginUser(user)
                    .then(function () {
                        window.location = '/#';
                        toastr.success('You are logged in!');
                        isLoggedIn().then((result) => console.log(result));
                    });
            });
        });
}

export { register, login };