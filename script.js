const myDate = new Date(); 
const xmas = Date.parse("Dec 25, "+myDate.getFullYear()) 
const today = Date.parse(myDate) 

const daysToChristmas = Math.round((xmas-today)/(1000*60*60*24)) 


if (daysToChristmas == 0) 
$('#days').text("It's Christmas!! Merry Christmas!");

if (daysToChristmas < 0) 
$('#days').text("Christmas was "+-1*(daysToChristmas)+" days ago.");

if (daysToChristmas > 0) 
$('#days').text(daysToChristmas+" days to Christmas!");

function randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};