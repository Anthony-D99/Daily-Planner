// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeBlock= document.getElementById('hour-9')
var nineAmText= document.getElementById('9AM')
var nineAmButton= document.getElementById('9amButton')

var tenAmText= document.getElementById('10AM')
var tenAmButton= document.getElementById('10amButton')





var dayToday = dayjs().format("dddd")
$("#Today").text(dayToday)
var currentTime = dayjs().format('H')
var updateCurrentDayjs = setInterval(function () {
  currentTime = dayjs().format('H')
  }, 3600000)
  console.log(currentTime)

function nineAM(){
if(currentTime > '9'){
  timeBlock.classList.add('past')
if(currentTime == '9'){ 
  timeBlock.classList.add('present')
  }
else{
   timeBlock.classList.add('future')
  }
}
}






nineAmButton.addEventListener('click', function(){
  localStorage.setItem('value1', nineAmText.value)
  nineAM()
})
nineAmText.textContent = localStorage.getItem('value1')

tenAmButton.addEventListener('click', function(){
  localStorage.setItem('value2', tenAmText.value)
  
})
tenAmText.textContent = localStorage.getItem('value2')




$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
