// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var nineAmText = $('#9AM')
var nineAmButton = $('#9amButton')

var tenAmText = $('#10AM')
var tenAmButton = $('#10amButton')

var elevenAmText = $('#11AM')
var elevenAmButton = $('#11amButton')

var twelvePmText = $('#12PM')
var twelvePmButton = $('#12pmButton')

var onePmText = $('#1PM')
var onePmButton = $('#1pmButton')

var twoPmText = $('#2PM')
var twoPmButton = $('#2pmButton')

var threePmText = $('#3PM')
var threePmButton = $('#3pmButton')

var fourPmText = $('#4PM')
var fourPmButton = $('#4pmButton')

var fivePmText = $('#5PM')
var fivePmButton = $('#5pmButton')



var dayToday = dayjs().format("dddd")
$("#Today").text(dayToday)
var currentTime = dayjs().format('H')
var updateCurrentDayjs = setInterval(function () {
  currentTime = dayjs().format('H')
}, 3600000)
console.log(currentTime)

function updateHourClass(hour, element) {
  if (currentTime > hour) {
    $(element).addClass("past")
  } else if (currentTime == hour) {
    $(element).addClass("present")
    $(element).removeClass("past")
  } else {
    $(element).addClass('future')
    $(element).removeClass("past")
    $(element).removeClass("present")
  }
}

updateHourClass(9, nineAmText);
updateHourClass(10, tenAmText);
updateHourClass(11, elevenAmText);
updateHourClass(12, twelvePmText);
updateHourClass(13, onePmText);
updateHourClass(14, twoPmText);
updateHourClass(15, threePmText);
updateHourClass(16, fourPmText);
updateHourClass(17, fivePmText);



nineAmButton.on('click', function () {
  localStorage.setItem('value1', nineAmText.val)

})
nineAmText.textContent = localStorage.getItem('value1')

tenAmButton.on('click', function () {
  localStorage.setItem('value2', tenAmText.val)

})
tenAmText.textContent = localStorage.getItem('value2')

elevenAmButton.on('click', function () {
  localStorage.setItem('value3', elevenAmText.val)

})
elevenAmText.textContent = localStorage.getItem('value3')

twelvePmButton.on('click', function () {
  localStorage.setItem('value4', twelvePmText.val)

})
twelvePmText.textContent = localStorage.getItem('value4')

onePmButton.on('click', function () {
  localStorage.setItem('value5', onePmText.val)

})
onePmText.textContent = localStorage.getItem('value5')

twoPmButton.on('click', function () {
  localStorage.setItem('value6', twoPmText.val)

})
twoPmText.textContent = localStorage.getItem('value6')

threePmButton.on('click', function () {
  localStorage.setItem('value7', threePmText.val)

})
threePmText.textContent = localStorage.getItem('value7')

fourPmButton.on('click', function () {
  localStorage.setItem('value8', fourPmText.val)

})
fourPmText.textContent = localStorage.getItem('value8')

fivePmButton.on('click', function () {
  localStorage.setItem('value9', fivePmText.val)

})
fivePmText.textContent = localStorage.getItem('value9')



