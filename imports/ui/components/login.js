import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './login.html';

Template.login.events({
  'form submit'(event) {
    event.preventDefault();

    const credentials = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    // console.log(`credentials: ${credentials}`);

    Meteor.loginWithPassword(credentials, (err) => {
      if (err) {
        console.log(`err: ${err}`);
      } else {
        console.log('Logged in!');
      }
    });
  }
});
