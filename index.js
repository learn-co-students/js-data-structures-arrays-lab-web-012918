// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  let newAr = drivers.slice();
  newAr.push(name);
  return newAr;
}

function prependDriver(name) {
  let newAr = drivers.slice();
  newAr.unshift(name);
  return newAr;
}

function removeLastDriver() {
  let newAr = drivers.slice();
  newAr.pop();
  return newAr;
}

function removeFirstDriver() {
  let newAr = drivers.slice();
  newAr.shift();
  return newAr;
}
