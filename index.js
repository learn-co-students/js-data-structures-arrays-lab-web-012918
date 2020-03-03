// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(driver){
  drivers.push(driver)
}

function destructivelyPrependDriver(driver){
  drivers.unshift(driver)
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(driver){
  let new_drivers = [...drivers, driver]
  return new_drivers
}

function prependDriver(driver){
  let new_drivers = [driver, ...drivers];
  return new_drivers
}

function removeLastDriver(){
  return drivers.slice(0, drivers.length - 1 )
}

function removeFirstDriver(){
  return drivers.slice(1)
}
