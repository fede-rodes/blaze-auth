import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';
import { _ } from 'meteor/underscore';
//  import '../namespace'; // EmailSystem.methods


/*
* @summary Send email with a recover password link.
* @see {@link https://themeteorchef.com/snippets/using-the-email-package/}
* @see {@link http://docs.meteor.com/#/full/accounts_sendresetpasswordemail}
* @see {@link https://meteorhacks.com/server-side-rendering}
* @see {@link http://docs.meteor.com/#/full/accounts_sendresetpasswordemail}
* @see server/accounts/emailTemplates.js
*/
Meteor.methods({'EmailSystem.methods.recoverPassword'(email) {
  console.log('about to send recover password email...');

  check(email, String);

  // User shouldn't be logged in at this stage!
  if (this.userId) {
    throw new Meteor.Error(403,
    'Mmm, user should not be logged in at sendRecoverPasswordLink');
  }

  const user = Accounts.findUserByEmail(email);

	if (!user) {
    throw new Meteor.Error('user-not-found',
    'The given email is not registered in our database');
	}

  // Check that the given email is verified.
  const addressArr = _.pluck(user.emails, 'address');
  const index = _.indexOf(addressArr, email);

	if (user.emails[index].verified === false) {
    throw new Meteor.Error(400, `Email is not verified!`);
	}

  Accounts.sendResetPasswordEmail(user._id, email);
  console.log('recover password email sent!');
} });
