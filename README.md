# Boilerplate for Meteor 1.3, Blaze, FlowRouter and ES6 + template-level-auth

## Clone repo
1. cd to your meteor projects folder
2. git clone https://github.com/fede-rodes/blaze-auth.git
3. cd blaze-auth

## Install npm modules
1. meteor npm install
2. meteor npm install --save-dev eslint eslint-plugin-meteor
eslint-config-airbnb (see https://guide.meteor.com/code-style.html)
3. see https://guide.meteor.com/code-style.html to setup ESlint with your IDE
4. this project contains the following meteor packages: kadira:flow-router, kadira:blaze-layout, aldeed:collection2, underscore, accounts-password, alanning:roles

## Setup settings.json
```
{
  "mailgun": {
    "username": "xxx",
    "password": "xxx"
  }
}
```
