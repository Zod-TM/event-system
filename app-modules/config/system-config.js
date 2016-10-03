SystemJS.config({
    'transpiler': 'plugin-babel',
    'map': {
        'plugin-babel': '../../node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': '../../node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
        'main': '../../app-modules/main.js',
        'backendServices': '../../app-modules/data/backend-services.js',
        'usersController': '../../app-modules/controllers/users-controller.js',
        'homeController': '../../app-modules/controllers/home-controller.js',
        'contactController': '../../app-modules/controllers/contact-controller.js',
        'templateLoader': '../../app-modules/utils/template-loader.js',
        'requester': '../../app-modules/utils/requester.js',
        'externalEvents' : '../../app-modules/controllers/external-eventbrite.js'
    }
});