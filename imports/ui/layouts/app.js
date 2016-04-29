import { Template } from 'meteor/templating';
import './app.html';
import '../components/header.html';
import '../components/login.js';

Template.appContainer.onCreated(function () {
  // Current template instance
  const instance = this;

  // Set global subscriptions
  instance.autorun(() => {
    /* instance.subscribe('curUser');
    instance.subscribe('playersList');
    instance.subscribe('stats');
    instance.subscribe('score'); */
  });
});
//------------------------------------------------------------------------------
Template.appContainer.helpers({
  appReady() {
    return Template.instance().subscriptionsReady();
  },
});
