import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './forgot-password.html';

Template.forgotPassword.events({
  'submit form'(event) {
    event.preventDefault();

    const email = event.target.email.value;

    Meteor.call('EmailSystem.methods.recoverPassword', email, (err) => {
      if (err) {
        console.log(err.reason);
      } else {
        console.log('Email sent. Please verify your email account!');
      }
    });
  },
});
