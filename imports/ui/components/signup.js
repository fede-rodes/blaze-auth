import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import './signup.html';
import './login.js';

Template.signup.events({
  'submit form'(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    Accounts.createUser({ email, password }, (err1) => {
      if (err1) {
        console.log(err1.reason);
      } else {
        Meteor.call('EmailSystem.methods.sendVerificationEmail', email, (err2) => {
          if (err2) {
            console.log(err2.reason);
          } else {
            console.log('verification email sent!');
          }
        });
      }
    });
  },
  'click .js-login'(event) {
    event.preventDefault();

    BlazeLayout.render('appContainer', { main : 'login' });
  },
});
