import { Template } from 'meteor/templating';
import './first.html';
import '../layouts/default.js';

Template.firstPage.helpers({
  username() {
    return 'fede';
  },
});
