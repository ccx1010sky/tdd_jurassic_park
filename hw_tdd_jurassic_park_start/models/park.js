const Dinosaur = require("./dinosaur");

const Park = function(name,ticket_price){
    this.name = name;
    this.ticket_price = ticket_price;
    this.dinosaur_collection = []
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaur_collection.push(Dinosaur);
}

module.exports = Park