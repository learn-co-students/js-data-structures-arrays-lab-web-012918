// Write your solution here!
const drivers  = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
};

function destructivelyPrependDriver(name){
  drivers.unshift(name);
};

function destructivelyRemoveLastDriver(){
  drivers.pop()
};

function destructivelyRemoveFirstDriver(){
  drivers.shift();
};

function appendDriver(name){
  const newArr = drivers.slice()
  newArr.push(name);
  return newArr
};

function prependDriver(name){
  const newArr = [name, ...drivers];
  return newArr
};

function removeLastDriver(){
  const newArr = drivers.slice()
  newArr.pop()
  return newArr
};

function removeFirstDriver(){
  newArr = drivers.slice();
  newArr.shift();
  return newArr;
};
