

Router.configure({
  layoutTemplate: 'canvas_par_defaut'
});

Router.route('/', {name: 'bienvenue'});

Router.route('/poney', {name: 'poney'});

if (Meteor.isClient) {

  Accounts.ui.config({ });

  AccountsEntry.config({
    homeRoute: '/',
    dashboardRoute: '/'
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    console.log('server started');
  });
}

