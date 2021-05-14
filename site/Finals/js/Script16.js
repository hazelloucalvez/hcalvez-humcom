var fname = "Hazel Lou";
var lname = " Calvez";
var age = 25;
var myDays=["Monday ","Tuesday ","Wednesday ","Thursday ","Friday ","Saturday ","Sunday "]

console.log(fname + lname + " " + age)

document.writeln(myDays + "<br><br>")

today=new Date()
thisDay=today.getDay()
thisDay=myDays[thisDay - 1]
document.write("Today is " + thisDay)