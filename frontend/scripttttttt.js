
document.getElementById("clickMe1").onclick = function (){
var app = document.getElementById('root');
var container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);
var token1= "j6eSOsDAak8rZH7NGG38lA"
var token2 =""

var data = JSON.stringify({
  "token": token1,
  "data": {
	"nameFirst": "nameFirst",
	"personAvatar": "personAvatar",
	"jobTitle": "personTitle",
	"nickName": "personNickname",
	"_repeat": 9
  }
});


var request = new XMLHttpRequest();
var req = new XMLHttpRequest();
var adviceArray = []
var adviceData;
for (var x = 0; x < 9; x++) {
	req.onload = function () {
		adviceData = this.response
		console.log("yyyyyyyyyy");
		//console.log(adviceData)
		adviceArray.push(adviceData)
			
};
//req.responseType = 'text'
req.open("POST", "https://api.kanye.rest/?format=text", false);
req.send();

}


console.log(adviceArray[1])
var i = 0;
request.onload = function(){

  var fakeData = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
	
	  fakeData.forEach(companyRole => {

	 console.log(adviceArray[i])
	  var card = document.createElement('div');
	  card.setAttribute('class', 'card');

	  var elem = document.createElement("img");
	  //utilizare api identicon
	  var imagine =  "https://api.kwelo.com/v1/media/identicon/" + Math.random().toString(36).substring(7)
	
	  
	 //var sfat = quote.quote
	  
	  elem.setAttribute("src", imagine);
	  elem.setAttribute("height", "180px");
	  elem.setAttribute("width", "100%");
	  elem.setAttribute("alt", "Profile Picture");

	  var h1 = document.createElement('h1');
	  h1.textContent = companyRole.nameFirst;
	  var p3 = document.createElement('p3');
	  p3.textContent = "Favourite quote: " + adviceArray[i];
	  i++;

	  var p1 = document.createElement('p1');
	  p1.textContent = companyRole.jobTitle;

	  var p2 = document.createElement('p2');
	  p2.textContent = 'Also known as "' + companyRole.nickName + '"';
	  
	  

	  var br = document.createElement("br");

	  container.appendChild(card);

	  card.appendChild(elem);
	  card.appendChild(h1);
	  card.appendChild(p1);
	  card.appendChild(br);
	  card.appendChild(p2);
	  card.appendChild(br);
	  card.appendChild(p3);

	});
  } else {
	console.log('You shall not pass');
  }
}


//req.setRequestHeader("content-type", "application/json");

request.open("POST", "https://app.fakejson.com/q");
request.setRequestHeader("content-type", "application/json");
request.send(data);}




document.getElementById("clickMe2").onclick = function (){
var app = document.getElementById('root');
var container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);
var token1= "Go7bdYXYG0uk0mmWeGvgQw"

var data = JSON.stringify({
  "token": token1,
  "data": {
	"nameFirst": "nameFirst",
	"personAvatar": "personAvatar",
	"jobTitle": "personTitle",
	"nickName": "personNickname",
	"_repeat": 9
  }
});


var request = new XMLHttpRequest();
var req = new XMLHttpRequest();
var adviceArray = []
var adviceData;
for (var x = 0; x < 9; x++) {
	req.onload = function () {
		adviceData = this.response
		console.log("yyyyyyyyyy");
		//console.log(adviceData)
		adviceArray.push(adviceData)
			
};
//req.responseType = 'text'
req.open("POST", "https://api.kanye.rest/?format=text", false);
req.send();

}


console.log(adviceArray[1])
var i = 0;
request.onload = function(){

  var fakeData = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
	
	  fakeData.forEach(companyRole => {

	 console.log(adviceArray[i])
	  var card = document.createElement('div');
	  card.setAttribute('class', 'card');

	  var elem = document.createElement("img");
	  //utilizare api identicon
	  var imagine =  "https://api.kwelo.com/v1/media/identicon/" + Math.random().toString(36).substring(7)
	
	  
	 //var sfat = quote.quote
	  
	  elem.setAttribute("src", imagine);
	  elem.setAttribute("height", "180px");
	  elem.setAttribute("width", "100%");
	  elem.setAttribute("alt", "Profile Picture");

	  var h1 = document.createElement('h1');
	  h1.textContent = companyRole.nameFirst;
	  var p3 = document.createElement('p3');
	  p3.textContent = "Favourite quote: " + adviceArray[i];
	  i++;

	  var p1 = document.createElement('p1');
	  p1.textContent = companyRole.jobTitle;

	  var p2 = document.createElement('p2');
	  p2.textContent = 'Also known as "' + companyRole.nickName + '"';
	  
	  

	  var br = document.createElement("br");

	  container.appendChild(card);

	  card.appendChild(elem);
	  card.appendChild(h1);
	  card.appendChild(p1);
	  card.appendChild(br);
	  card.appendChild(p2);
	  card.appendChild(br);
	  card.appendChild(p3);

	});
  } else {
	console.log('You shall not pass');
  }
}


//req.setRequestHeader("content-type", "application/json");

request.open("POST", "https://app.fakejson.com/q");
request.setRequestHeader("content-type", "application/json");
request.send(data);}


document.getElementById("clickMe3").onclick = function (){
var app = document.getElementById('root');
var container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);
var token1= "R7HB7czPJ0jnxZU73eHgRg"

var data = JSON.stringify({
  "token": token1,
  "data": {
	"nameFirst": "nameFirst",
	"personAvatar": "personAvatar",
	"jobTitle": "personTitle",
	"nickName": "personNickname",
	"_repeat": 9
  }
});


var request = new XMLHttpRequest();
var req = new XMLHttpRequest();
var adviceArray = []
var adviceData;
for (var x = 0; x < 9; x++) {
	req.onload = function () {
		adviceData = this.response
		console.log("yyyyyyyyyy");
		//console.log(adviceData)
		adviceArray.push(adviceData)
			
};
//req.responseType = 'text'
req.open("POST", "https://api.kanye.rest/?format=text", false);
req.send();

}


console.log(adviceArray[1])
var i = 0;
request.onload = function(){

  var fakeData = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
	
	  fakeData.forEach(companyRole => {

	 console.log(adviceArray[i])
	  var card = document.createElement('div');
	  card.setAttribute('class', 'card');

	  var elem = document.createElement("img");
	  //utilizare api identicon
	  var imagine =  "https://api.kwelo.com/v1/media/identicon/" + Math.random().toString(36).substring(7)
	
	  
	 //var sfat = quote.quote
	  
	  elem.setAttribute("src", imagine);
	  elem.setAttribute("height", "180px");
	  elem.setAttribute("width", "100%");
	  elem.setAttribute("alt", "Profile Picture");

	  var h1 = document.createElement('h1');
	  h1.textContent = companyRole.nameFirst;
	  var p3 = document.createElement('p3');
	  p3.textContent = "Favourite quote: " + adviceArray[i];
	  i++;

	  var p1 = document.createElement('p1');
	  p1.textContent = companyRole.jobTitle;

	  var p2 = document.createElement('p2');
	  p2.textContent = 'Also known as "' + companyRole.nickName + '"';
	  
	  

	  var br = document.createElement("br");

	  container.appendChild(card);

	  card.appendChild(elem);
	  card.appendChild(h1);
	  card.appendChild(p1);
	  card.appendChild(br);
	  card.appendChild(p2);
	  card.appendChild(br);
	  card.appendChild(p3);

	});
  } else {
	console.log('You shall not pass');
  }
}


//req.setRequestHeader("content-type", "application/json");

request.open("POST", "https://app.fakejson.com/q");
request.setRequestHeader("content-type", "application/json");
request.send(data);}