const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response){
	response.sendFile(__dirname + "/bmiCalculator.html");
});

app.get('/about', function(request, response){
	response.send("Hello World!!");
});

app.post('/bmicalculator', function(request, response){
	var num1 = parseFloat(request.body.weight);
	var num2 = parseFloat(request.body.height);
	var result = num1 / (num2 * num2);
	response.send("Your BMI is " + result);
});

app.listen(3000, function(){
	console.log("Listening to port 3000");
})
// A comment for success