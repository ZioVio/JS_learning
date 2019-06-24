function printDate() {
  var curr_date = new Date()
  let elem = document.getElementById("demo")
  elem.innerHTML = curr_date.toUTCString()
  console.log(elem)
}

setInterval(printDate, 999)
