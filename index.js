// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  return drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift();
}

function appendDriver(name) {
  const drivers_array = [...drivers, name];
  return drivers_array;
}

function prependDriver(name) {
  const drivers_array = [name, ...drivers];
  return drivers_array;
}

function removeLastDriver() {
  const drivers_array = drivers.slice(0, drivers.length - 1);
  return drivers_array;
}

function removeFirstDriver() {
  return drivers.slice(1);
}
