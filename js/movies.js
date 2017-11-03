function incrementValue()
{
    var value = parseInt(document.getElementById('tickectnum').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
	if(value > 5){
		value = 5;
		window.alert("Max number of tickets is 5");
	}
    document.getElementById('tickectnum').value = value;
}

function decrementValue()
{
    var value = parseInt(document.getElementById('tickectnum').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
	value = value < 0 ? 0 : value;
    document.getElementById('tickectnum').value = value;
}

function buytickets()
{
	window.alert("Tickets bought. Thank you!");
	clearall();
}

function clearall()
{
	document.getElementById('tickectnum').value = 0;
	var ul = document.getElementById("selectedtseats");
	while (ul.firstChild) {
		ul.removeChild(ul.firstChild);
	}
	movies.forEach(unselectmovie);
	movies.forEach(unselectimage);
	window.history.back();
}

function addseat(seat)
{
	var value = document.getElementById('tickectnum').value;
	var selectedseats = document.getElementById("selectedtseats").childElementCount;

	if(selectedseats < value){
		var elem = document.getElementById(seat);
		elem.parentNode.removeChild(elem);
		
		var ul = document.getElementById("selectedtseats")
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(seat));
		li.setAttribute("class", "list-group-item");
		ul.appendChild(li);
	}
	else{
		if(value == 0){
			window.alert("Select tickets first");
		}
		else{
			window.alert("All seats selected");
		}
		
	}
}

movies = ['movie1', 'movie2', 'movie3', 'movie4', 'movie5', 'movie6', 'movie7', 'movie8']

function selectmovie(movie)
{
	movies.forEach(unselectmovie);
	document.getElementById(movie).style.backgroundColor = "grey";
}

function unselectmovie(item, index)
{
	document.getElementById(item).style.backgroundColor = "white";
}

function selectimage(movie)
{
	movies.forEach(unselectimage);
	document.getElementById(movie).style.border = " 5px solid black";
}

function unselectimage(item, index)
{
	document.getElementById(item).style.border = " 0px solid white";
}