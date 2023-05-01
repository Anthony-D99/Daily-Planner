// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeBlock= document.getElementById('hour-9')
var nineAmText= document.getElementById('9AM')
var nineAmButton= document.getElementById('9amButton')

var tenAmText= document.getElementById('10AM')
var tenAmButton= document.getElementById('10amButton')

var elevenAmText= document.getElementById('11AM')
var elevenAmButton= document.getElementById('11amButton')

var twelvePmText= document.getElementById('12PM')
var twelvePmButton= document.getElementById('12pmButton')

var onePmText= document.getElementById('1PM')
var onePmButton= document.getElementById('1pmButton')

var twoPmText= document.getElementById('2PM')
var twoPmButton= document.getElementById('2pmButton')

var threePmText= document.getElementById('3PM')
var threePmButton= document.getElementById('3pmButton')

var fourPmText= document.getElementById('4PM')
var fourPmButton= document.getElementById('4pmButton')

var fivePmText= document.getElementById('5PM')
var fivePmButton= document.getElementById('5pmButton')








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

elevenAmButton.addEventListener('click', function(){
  localStorage.setItem('value3', elevenAmText.value)
  
})
elevenAmText.textContent = localStorage.getItem('value3')

twelvePmButton.addEventListener('click', function(){
  localStorage.setItem('value4', twelvePmText.value)
  
})
twelvePmText.textContent = localStorage.getItem('value4')

onePmButton.addEventListener('click', function(){
  localStorage.setItem('value5', onePmText.value)
  
})
onePmText.textContent = localStorage.getItem('value5')

twoPmButton.addEventListener('click', function(){
  localStorage.setItem('value6', twoPmText.value)
  
})
twoPmText.textContent = localStorage.getItem('value6')

threePmButton.addEventListener('click', function(){
  localStorage.setItem('value7', threePmText.value)
  
})
threePmText.textContent = localStorage.getItem('value7')

fourPmButton.addEventListener('click', function(){
  localStorage.setItem('value8', fourPmText.value)
  
})
fourPmText.textContent = localStorage.getItem('value8')

fivePmButton.addEventListener('click', function(){
  localStorage.setItem('value9', fivePmText.value)
  
})
fivePmText.textContent = localStorage.getItem('value9')