var a=10;
var b=20;
var c=40;
var name = "koushik" +"<br>";
name +="chowdarys" +"<br>"
name +="krishna" + "<br>"
var arr = ['koushik','krishna','chowdary']
var arr1 = ['koushik','krishna',1]
var arr2 = ['koushik',1,true]
// object
var obj= [{
	'name':'koushik',
	'roll-no':'510',
},
{
	'campus':'acet',
	'year':'3rd',
},
{
	'name':'krishna',
	'roll-no': '511',
},
{
	'campus':'t-hub',
	'trainee':'fsd',
},
{
	'name':'koushik',
	'roll-no':'510',
},
{
	'campus':'acet',
	'year':'3rd',
},
{
	'name':'krishna',
	'roll-no': '511',
},
{
	'campus':'t-hub',

	'trainee':'fsd',
}]
for(i=0;i<obj.length;i++)
{
	for(let x in obj)
	{
		console.log(obj[x]);
		console.log(+ "<br>");
	}
}
// document.write(name.length+"<br>")
// document.write(name.length+"<br>")
document.write(name)
document.write(name.length +"<br>");
document.write(typeof(name) +"<br>");
document.write(typeof(arr) + "<br>");
document.write(typeof(arr1) + "<br>");
document.write(typeof(arr2) + "<br>");
document.write(arr[1] + "<br>");
document.write(arr[0] + "<br>");
document.write(arr2[1] + "<br>");
document.write(typeof(arr2[2]) +"<br>");
// calling object
console.log(obj.name);

console.log(obj);
document.write(obj);

document.write(a);
document.write(" </br> this val belonds to integer </br>");
document.write("sometimes it is also floating number");
 //window.alert(c);
console.log(b);