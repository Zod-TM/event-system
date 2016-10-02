import { register, login, logout, contactUs } from 'usersController';
import { all as homeAll} from 'homeController';
import { isLoggedIn } from 'backendServices';

let router = new Navigo(null, false);
router.on('#register', () => register())
    .on('#login', () => login())
    .on('#', () => homeAll())
    .on('', () => homeAll())
    .on('#contact', () => contactUs())
    .resolve();

$('#logout').on('click', logout);

if (isLoggedIn()) {
    $('#menu-items').addClass('logged-in');
}