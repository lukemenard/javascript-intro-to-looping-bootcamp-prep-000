function forLoop(array){
  for (let i = 0; i<25; i++) {
    if (i === 1) {
      array.push("I am " + i  + " strange loop.")
    }
    else {
      array.push("I am " + i + " strange loops.")
    }
  }
  return array
}

function whileLoop(number) {
  let countdown = number
  while (countdown >0) {
    console.log(--countdown)
  }
  return 'done'
}

function doWhileLoop(integer){
  do {
    console.log("I run once regardless.");
  }
  while 
  var i = 0
}