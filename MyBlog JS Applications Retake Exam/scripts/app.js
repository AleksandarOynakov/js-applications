import * as controllers from '../controllers/controllers.js';

toastr.options = {
    "debug": false,
    "positionClass": "toast-bottom-right",
    "onclick": null,
    "fadeIn": 300,
    "fadeOut": 1000,
    "timeOut": 1000,
    "extendedTimeOut": 1000
};


// initialize the application
var app = Sammy('#root', function () {
    // include a plugin
    this.use('Handlebars', 'hbs');

    // define a 'route'
    this.get('#/', controllers.homeViewController.render);
    this.get('#/home', controllers.homeViewController.render);
    this.get('#/register', controllers.registerViewController.render);
    this.get('#/login', controllers.loginViewController.render);
    this.get('#/logout', controllers.loginViewController.logout);
    this.get('#/delete/:id', controllers.homeViewController.delete);
    this.get('#/details/:id', controllers.homeViewController.details);
    this.get('#/edit/:id', controllers.editViewController.edit);

    this.post('#/register', controllers.registerViewController.register);
    this.post('#/login', controllers.loginViewController.login);
    this.post('#/create-post', controllers.homeViewController.create);
    this.post('#/edit/:id', controllers.editViewController.submitEdit);
});

// start the application

app.run('#/');
