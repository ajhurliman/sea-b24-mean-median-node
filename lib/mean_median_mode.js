//written by ajHurliman for CodeFellows week1 homework on 10-29-14
//I lifted [].slice.call(arguments).sort(); from
//http://stackoverflow.com/questions/960866/converting-the-arguments-object-to-an-array-in-javascript
// to turn the array-like arguments object into an actual array
//
//This module makes the mean, median and mode functions available
'use strict';

var MeanMedianMode = function() {
  this.mean = function(numList) {
    var sum = 0;
    for (var i = 0; i<numList.length; i++) {
      sum += numList[i];
    }
    return sum/numList.length;
  };

  this.median = function() {
    var numList = [].slice.call(arguments).sort();
    if (numList.length%2 !== 0) {
      var midNum = Math.floor(numList.length/2);
      return numList[midNum];
    } else {
      var highMidNum = Math.floor(numList/2);
      var lowMidNum = Math.ceiling(numList/2);
      return ((highMidNum + lowMidNum)/2);
    }
  };

  this.mode = function() {
    var numList = [].slice.call(arguments).sort();
    var numCount = {};

    //starts each of the counters at 0
    for (var i = 0; i<numList.length; i++) {
      numCount[numList[i]]=0;
    }

    for (i = 0; i<numList.length; i++) {
      var instance = numList[i];
      numCount[instance]++;
    }

    var numOfInstances = 0;
    var numToReturn;
    for (var key in numCount) {
      if (numCount[key] > numOfInstances) {
        numOfInstances = numCount[key];
        numToReturn = key;
      }
    }
    return +numToReturn;
  };
};

var mmm = new MeanMedianMode();
module.exports = mmm;
