// Require the 'cordova-bridge' to enable communications between the
// Node.js app and the Cordova app.
const cordova = require('cordova-bridge');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const _ = require('lodash');
const q = require('q');
const request = require('request');
const requestPromise = require('request-promise');
const salti = require('salti-admin');
const socket = require('socket.io');
const sizeOf = require('object-sizeof');
const validator = require('validator');

// A sample object to show how the channel supports generic
// JavaScript objects.
class Reply {
  constructor(replyMsg, originalMsg) {
    this.reply = replyMsg;
    this.original = originalMsg;
  }
};
const bar = ['array', 'of', 'strings', {nestedObject:[1,2,3]}];


// Listen to messages from Cordova.

cordova.channel.on('objEvent', (obj) => {
  console.log('node received obj event', obj);
});
cordova.channel.on('booleanEvent', (value) => {
  console.log('node received booleanEvent', value);
});

cordova.channel.on('message', (msg) => {
  console.log('[node] MESSAGE received: "%s"', msg);
  // Reply sending a user defined object.
  cordova.channel.send(new Reply('Message received!', msg));
});

// Listen to event 'myevent' from Cordova.
cordova.channel.on('myevent', (msg) => {
  //console.log('[node] MYEVENT received with message: "%s"', msg);
  console.log(msg);
  cordova.channel.post('foo', bar);
  cordova.channel.post('func', true);
});



// Handle the 'pause' and 'resume' events.
// These are events raised automatically when the app switched to the
// background/foreground.
cordova.app.on('pause', () => {
  console.log('[node] app paused.');
});

cordova.app.on('resume', () => {
  console.log('[node] app resumed.');
  cordova.channel.post('engine', 'resumed');
});

// Send a message to Cordova.
cordova.channel.send('main.js loaded');

// Post an event to Cordova.
cordova.channel.post('started');

// Post an event with a message.
cordova.channel.post('started', 'main.js loaded');