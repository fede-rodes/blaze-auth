import { Template } from 'meteor/templating';
import './second.html';
import '../layouts/default.js';
import '../layouts/force-login.js';
import '../layouts/force-verify.js';

Template.secondPage.helpers({
  username() {
    return 'fede';
  },
});
