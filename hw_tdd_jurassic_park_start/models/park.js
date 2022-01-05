const Dinosaur = require("./dinosaur");

const Park = function (name, ticket_price) {
  this.name = name;
  this.ticket_price = ticket_price;
  this.dinosaur_collection = [];
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaur_collection.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  this.dinosaur_collection.pop(dinosaur);
};

Park.prototype.mostAttractedDinosaur = function () {
   let theMost = this.dinosaur_collection[0];
  for (i = 1; i < this.dinosaur_collection.length; i++) {
    if (this.dinosaur_collection[i].guestsAttractedPerDay > this.dinosaur_collection[0].guestsAttractedPerDay) {
      theMost = this.dinosaur_collection[i];
    }
  }
  return theMost;

};

module.exports = Park;
