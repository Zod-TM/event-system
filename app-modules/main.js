import { register, login } from 'usersController';
import { all as homeAll} from 'homeController';

let router = new Navigo(null, false);
router.on('#register', () => register())
    .on('#login', () => login())
    .on('#', () => homeAll())
    .resolve();