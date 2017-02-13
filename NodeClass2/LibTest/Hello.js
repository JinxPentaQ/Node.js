/**
 * Created by dllo on 17/2/13.
 */

module.exports = function () {
  var name;
  this.setName= function (name) {
      this.name = name;
  }
  this.sayhello = function () {
      console.log('Hello'+ this.name);
  }
};