import { register as registerUser, login as loginUser } from 'backendServices';
import { get } from 'templates';

function register() {
    get('register')
        .then(function (template) {
            $('#content').html(template());

            $('#btn-register').on('click', function () {
                var user = {
                    username: $('#tb-reg-username').val(),
                    password: $('#tb-reg-pass').val()
                };

                registerUser(user)
                    .then(function () {
                        toastr.success('User registered!');
                        window.location.href = '/index.html';
                    });
            });
        });
}

function login() {
    get('login')
        .then(function (template) {
            $('#content').html(template());

            $('#btn-login').on('click', function () {
                var user = {
                    username: $('#tb-login-username').val(),
                    password: $('#tb-login-pass').val()
                };

                loginUser(user)
                    .then(function () {
                        toastr.success('You are logged in!');
                        window.location.href = '/index.html';
                    });
            });
        });
}

export { register, login };