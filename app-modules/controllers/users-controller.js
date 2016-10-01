import { register as registerUser, login as loginUser, isLoggedIn, logout as logoutUser } from 'backendServices';
import { get as getTemplate } from 'templateLoader';

function validateUsername(text){
    if(text.match(/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/) !== null)
        return true;
    else{
        return false;
    }
}

function validateFields(text){
    if(text.match(/[a-zA-Z0-9]{3,18}/) !== null)
        return true;
    else{
        return false;
    }
}

function register() {
    getTemplate('register')
        .then((template) => {
            $('#content').html(template());

            $('#btn-register').on('click', function () {
                
                if(!validateUsername($('#tb-reg-username').val())){
                    toastr.error("Invalid Username");
                    return;
                }
                if(!validateFields($('#tb-first-name').val()) 
                    || !validateFields($('#tb-second-name').val()) 
                    || !validateFields($('#tb-reg-pass').val())){
                    toastr.error("Invalid input");
                    return;
                }

                var user = {
                    username: $('#tb-reg-username').val(),
                    password: $('#tb-reg-pass').val(),
                    firstName: $('#tb-first-name').val(),
                    secondName: $('#tb-second-name').val()
                };

                registerUser(user)
                    .then(function () {
                        window.location.href = '/#';
                        toastr.success('User registered!');
                    });
            });
        });
}

function login() {
    getTemplate('login')
        .then((template) => {
            $('#content').html(template());

            $('#btn-login').on('click', function () {
                var user = {
                    username: $('#tb-login-username').val(),
                    password: $('#tb-login-pass').val()
                };

                loginUser(user)
                    .then(function () {
                        window.location.href = '/#';
                        $('#menu-items').addClass('logged-in');
                        toastr.success('You are logged in!');
                    });
            });
        });
}

function logout() {
    logoutUser()
        .then(() => {
            $('#menu-items').removeClass('logged-in');
            toastr.warning('You have logged out');
        })
}

export { register, login, logout };