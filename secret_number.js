'use strict';
module.exports = function() {


  var rand = Math.floor((Math.random() * 1000000) + 1);

  return function newNum( ) {
    return rand;
  };


};



