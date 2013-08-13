/**
* detector.js v0.1.0
* 
* MIT licensed
*
* Copyright (C) 2013 Thomas Loudon, Axisto Media Ltd
*/

'use strict';

function Detector() {
  this.data = {};

  // Store the current time
  this.data.time = new Date();
}

Detector.prototype.collect = function (property, collector) {

  if (property === undefined || typeof property === 'number') {
    throw new Error('Properties must be a string property name or an array of property names');
  }

  if (Object.prototype.toString.call(property) === '[object Array]') {
    for (var i = 0; i < property.length; i++) {
      this.data[property[i]] = this[this.getMethodByProperty(property[i])]();
    }
  } else if (typeof property === 'string' && collector !== undefined && typeof collector === 'function') {
    this.data[property] = collector();
  } else {
    this.data[property] = (this[this.getMethodByProperty(property)]());
  }

  return this;

};

Detector.prototype.getMethodByProperty = function (method) {

  return 'get' + method.charAt(0).toUpperCase() + method.substr(1).toLowerCase();

};

Detector.prototype.getBrowser = function () {

  return navigator.userAgent;

};

Detector.prototype.getFlash = function () {

  if (window.swfobject === undefined) {
    throw new Error('SWFObject is not available. SWFObject is required for Adobe Flash detection.');
  } else {
    return window.swfobject.getFlashPlayerVersion();
  }

};


