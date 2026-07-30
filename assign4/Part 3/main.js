/*
Name: Joel ngniayie
File: main.js
Date: 30 July 2026
Object building practice - builds a Person constructor with greeting
and bio methods.
*/

function Person(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;

  this.bio = function () {
    let bioText = `${this.name.first} ${this.name.last} is ${this.age} years old. `;
    bioText += `${this.genderNeutralGreeting()} likes `;

    if (this.interests.length === 1) {
      bioText += `${this.interests[0]}.`;
    } else if (this.interests.length === 2) {
      bioText += `${this.interests[0]} and ${this.interests[1]}.`;
    } else {
      for (let i = 0; i < this.interests.length; i++) {
        if (i === this.interests.length - 1) {
          bioText += `and ${this.interests[i]}.`;
        } else {
          bioText += `${this.interests[i]}, `;
        }
      }
    }
    return bioText;
  };

  this.greeting = function () {
    return `Hi! I'm ${this.name.first}.`;
  };

  // Helper used inside bio() for he/she/they
  this.genderNeutralGreeting = function () {
    if (this.gender === 'male') {
      return 'He';
    } else if (this.gender === 'female') {
      return 'She';
    } else {
      return 'They';
    }
  };
}

// Create a new person object using the constructor
const person1 = new Person(
  'Bob',
  'Smith',
  32,
  'male',
  ['music', 'skiing']
);

console.log(person1.greeting());
console.log(person1.bio());