import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { _ } from 'meteor/underscore';
import { Roles } from 'meteor/alanning:roles';
import { Users } from './namespace.js';
import './collection.js'; // Meteor.users

/**
* @summary Initialize default admin(s).
*/
Users.api.init = function () {
  console.log('PRE-POPULATE USERS COLLECTION');
  const defaultUsers = [
    { email: 'admin@example.com', password: 'apple1', roles: ['admin'], username: 'admin' },
  ];

  _.each(defaultUsers, (user) => {
    // Check if user already exist
    const userExists = !!Accounts.findUserByEmail(user.email);
    if (userExists) {
      return; // skip to the next iteration
    }

    // If not, insert user
    const id = Accounts.createUser({
      email: user.email,
      password: user.password,
      profile: { name: user.username },
    });

    if (user.roles.length > 0) {
      // Need _id of existing user record so this call must come
      // after `Accounts.createUser` or `Accounts.onCreate`
      Roles.addUsersToRoles(id, user.roles);
    }
  });
};
