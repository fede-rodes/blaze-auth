import { Accounts } from 'meteor/accounts-base';
import { Template } from 'meteor/templating';
import { SSR } from 'meteor/meteorhacks:ssr';

console.log('STARTUP CONFIG');

/**
* @see {@link https://themeteorchef.com/snippets/sign-up-with-email-verification/}
* @see {@link http://docs.meteor.com/#/full/accounts_emailtemplates}
* @see {@link http://docs.meteor.com/#/full/accounts_sendverificationemail}
* @see {@link: https://meteorhacks.com/server-side-rendering}
*/
Accounts.emailTemplates.siteName = 'Site Name';
Accounts.emailTemplates.from = 'Site Name <no-reply@sitename.com>';

Accounts.emailTemplates.verifyEmail = {
  subject() {
    return '[Site Name] Verify Your Email Address';
  },
  text(user, url) {
    const emailAddress = user.emails[0].address;
    const urlWithoutHash = url.replace('#/', '');
    const supportEmail = 'support@sitename.com';
    const emailBody = `To verify your email address (${emailAddress}), please
    visit the following link:\n\n${urlWithoutHash}\n\n If you did not request
    this verification, please ignore this email. If you feel something is wrong,
    please contact our support team: ${supportEmail}.`;

    return emailBody;
  },
  html(user, url) {
    // Compile HTML email using the data provided by the helper(s) defined below.
    // 'verificationEmailTemplate.html' refers to the template used to create the email
    // while 'htmlEmail' is the result of the compilation.
    SSR.compileTemplate('htmlEmail', Assets.getText('verificationEmailTemplate.html'));
    Template.htmlEmail.helpers({
      title() {
        return 'Site Name';
      },
      firstName() {
        return user.profile.firstName;
      },
      emailAddress() {
        return user.emails[0].address;
      },
      urlWithoutHash() {
        return url.replace('#/', '');
      },
      supportEmail() {
        return 'support@sitename.com';
      },
    });

    return SSR.render('htmlEmail');
  }
};

Accounts.emailTemplates.resetPassword = {
  subject() {
    return '[Site Name] Reset Your Password';
  },
  text(user, url) {
    const emailAddress = user.emails[0].address;
    const urlWithoutHash = url.replace('#/', '');
    const supportEmail = 'support@sitename.com';
    const emailBody = `To reset your password, please visit the following link:
    \n\n${urlWithoutHash}\n\n If you did not request for a new password, please
    ignore this email. If you feel something is wrong, please contact our
    support team: ${supportEmail}.`;

    return emailBody;
  },
  html(user, url) {
    // Compile HTML email using the data provided by the helper(s) defined below.
    // 'resetPasswordEmailTemplate.html' refers to the template used to create the email
    // while 'htmlEmail' is the result of the compilation.
    SSR.compileTemplate('htmlEmail', Assets.getText('resetPasswordEmailTemplate.html'));
    Template.htmlEmail.helpers({
      title() {
        return 'Site Name';
      },
      firstName() {
        return user.profile.firstName;
      },
      emailAddress() {
        return user.emails[0].address;
      },
      urlWithoutHash() {
        return url.replace('#/', '');
      },
      supportEmail() {
        return 'support@sitename.com';
      },
    });

    return SSR.render('htmlEmail');
  }
};
