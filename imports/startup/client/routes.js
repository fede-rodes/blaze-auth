import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import '../../ui/layouts/app.js'; // appContainer
import '../../ui/pages/first.js'; // firstPage
import '../../ui/pages/second.js'; // secondPage
import '../../ui/pages/not-found.html'; // notFoundPage

console.log('LOADING ROUTES');

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('appContainer', { main: 'notFoundPage' });
  },
};

FlowRouter.route('/first', {
  name: 'first',
  action() {
    BlazeLayout.render('appContainer', { main: 'firstPage' });
  },
});

FlowRouter.route('/second', {
  name: 'second',
  action() {
    BlazeLayout.render('appContainer', { main: 'secondPage' });
  },
});

FlowRouter.route('/', {
  name: 'index',
  action() {
    FlowRouter.go('second');
  },
});
