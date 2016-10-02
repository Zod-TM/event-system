import { register, login, logout } from 'usersController';
import { all as homeAll, showSubscribedEvents} from 'homeController';
import { isLoggedIn } from 'backendServices';
import { contactUs} from 'contactController';

let router = new Navigo(null, false);
router
    .on('#register', () => register())
    .on('#login', () => login())
    .on('#contact', () => contactUs())
    .on('#subscribedEvents', () => showSubscribedEvents())
    .on('#', () => homeAll())
    .on('', () => homeAll())
    .resolve();

$('#logout').on('click', logout);

isLoggedIn()
    .then((isLoggedIn) => {
        if (isLoggedIn) {
            $('#menu-items').addClass('logged-in');
        }
    });