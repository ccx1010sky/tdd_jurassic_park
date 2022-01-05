const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park1;
  let dinosaur;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    
    park1 = new Park('Paris Disney Park',20)
    dinosaur = new Dinosaur("t-rex", "carnivore", 50);
    dinosaur2 = new Dinosaur("raptor", "carnivore", 90);
    dinosaur3 = new Dinosaur("megladon", "carnivore", 100);


  })

  it('should have a name',function(){
    const actual = park1.name;
    assert.strictEqual(actual,'Paris Disney Park')

    
  });

  it('should have a ticket price', function(){
    const actual = park1.ticket_price;
    assert.strictEqual(actual,20);
  });

  it('should have a collection of dinosaurs',function(){

    const actual = park1.dinosaur_collection.length
    assert.strictEqual(actual,0)
  });

  it('should be able to add a dinosaur to its collection',function(){
    park1.addDinosaur(dinosaur)
    const actual = park1.dinosaur_collection.length;
    assert.strictEqual(actual, 1);

  });

  it('should be able to remove a dinosaur from its collection',function(){

    park1.addDinosaur(dinosaur)
    park1.addDinosaur(dinosaur2)
    park1.addDinosaur(dinosaur3)
    park1.removeDinosaur()
    const actual = park1.dinosaur_collection.length
    assert.strictEqual(actual,2)
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
