import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import './login.html';
import './forgot-password.js';
import './signup.js';

Template.login.events({
  'submit form'(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        console.log(`err: ${err}`);
      } else {
        console.log('Logged in!');
        // const curRoute = FlowRouter.getRouteName();
        // FlowRouter.go(curRoute);
        FlowRouter.reload();
      }
    });
  },
  'click .js-forgot-password'(event) {
    event.preventDefault();
    BlazeLayout.render('appContainer', { main : 'forgotPassword' });
  },
  'click .js-signup'(event) {
    event.preventDefault();
    BlazeLayout.render('appContainer', { main : 'signup' });
  },
});
