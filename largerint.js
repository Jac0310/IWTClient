//var num1 = parseInt(window.prompt("Enter an integer: ", "0"))
//var num2 = parseInt(window.prompt("Enter an integer: ", "0"))
//num1 > num2 ? document.write(num1) : document.write(num2)

function larger() 
{
	var num1 = parseInt(document.getElementById("firstint").value)
	var num2 = parseInt(document.getElementById("secondint").value)
	num1 > num2 ? document.write(num1) : document.write(num2)
	
}