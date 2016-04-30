import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './login.html';
import './forgotPassword.js';

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
      }
    });
  },
  'click .js-forgot-password'(event) {
    event.preventDefault();

    BlazeLayout.render('appContainer', { main : 'forgotPassword' });
  },
});
