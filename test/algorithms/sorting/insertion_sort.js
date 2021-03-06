'use strict';

var insertionSort = require('../../../algorithms/sorting/insertion_sort'),
    assert = require('assert');

describe('Insertion Sort', function () {
  it('should sort the given array', function () {
    assert.deepEqual(insertionSort([]), []);
    assert.deepEqual(insertionSort([1]), [1]);
    assert.deepEqual(insertionSort([2, 1]), [1, 2]);
    assert.deepEqual(insertionSort([3, 1, 2]), [1, 2, 3]);
    assert.deepEqual(insertionSort([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
    assert.deepEqual(insertionSort([6, 5, 4, 3, 2, 1]), [1, 2, 3, 4, 5, 6]);
    assert.deepEqual(
      insertionSort([1, 295, 3, 6, 8, 10, 10, 20, 0, 5]),
      [0, 1, 3, 5, 6, 8, 10, 10, 20, 295]
    );
  });


  it('should sort the array with a specific comparison function', function () {
    var compare = function (a, b) {
      if (a.length === b.length) {
        return 0;
      }
      return (a.length < b.length) ? -1 : 1;
    };
    assert.deepEqual(insertionSort([], compare), []);
    assert.deepEqual(insertionSort(['apple'], compare), ['apple']);
    assert.deepEqual(
      insertionSort(['apple', 'banana'], compare),
      ['apple', 'banana']
    );
    assert.deepEqual(
      insertionSort(['apple', 'banana', 'car'], compare),
      ['car', 'apple', 'banana']
    );
    assert.deepEqual(
      insertionSort(['apple', 'banana', 'car', 'z'], compare),
      ['z', 'car', 'apple', 'banana']
    );

    var reverseSort = function (a, b) {
      if (a === b) {
        return 0;
      }
      return (a < b) ? 1 : -1;
    };
    assert.deepEqual(
      insertionSort([1, 295, 3, 6, 8, 10, 10, 20, 0, 5], reverseSort),
      [295, 20, 10, 10, 8, 6, 5, 3, 1, 0]
    );

    var Guy = function (age) {
      this.age = age;
    };

    var compareAgeOfGuys = function (g1, g2) {
      if (g1.age === g2.age) {
        return 0;
      }
      return (g1.age < g2.age) ? -1 : 1;
    };

    var g1 = new Guy(30),
      g2 = new Guy(80),
      g3 = new Guy(15),
      g4 = new Guy(20);

    assert.deepEqual(
      insertionSort([g1, g2, g3, g4], compareAgeOfGuys), [g3, g4, g1, g2]
    );
  });
});
