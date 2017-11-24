
function nextStep(id)
{
	switch(id) {
		case "step-1":
			$("#step-3").hide();
			$("#step-1").show();
			$("#continuebutton").hide();
			break
		case "step-2":
			$("#step-1").hide();
			$("#step-2").show();
			$("#continue").hide();
			break
		case "step-3":
			$("#step-2").hide();
			$("#step-3").show();
			break
		default:
			$("#step-3").hide();
			$("#step-2").hide();
			$("#step-1").show();
			$("#continuebutton").hide();
	}
}

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
	$("#continue").show();
}

function decrementValue()
{
    var value = parseInt(document.getElementById('tickectnum').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
	value = value < 0 ? 0 : value;
	document.getElementById('tickectnum').value = value;
	if(value == 0){
		$("#continue").hide();
	}
}

function buytickets()
{
	window.alert("Tickets bought. Thank you!");
	endTime = performance.now();
	var durationtime = endTime-startTime;
	var message = "Starttime: "+startTime +"ms\n" + "Endtime: " +endTime + "ms\n" + "Duration: " + durationtime + "ms"; 
	window.alert(message);
	clearall();
	nextStep("step-1");
}

function clearall()
{
	if(document.getElementById("selectedtseats").childElementCount > 0){
		var ul = document.getElementById("selectedtseats");
		while (ul.firstChild) {
			ul.removeChild(ul.firstChild);
		}
		window.history.go(-2);

	}
	else{
		document.getElementById('tickectnum').value = 0;
		movies.forEach(unselectmovie);
		movies.forEach(unselectimage);
		if (window.location.href.indexOf('#') > -1){
			window.history.go(-2);
		}
		else{
			window.history.back();
		}
	}
}

function addseat(seat, version)
{
	var value = document.getElementById('tickectnum').value;
	var selectedseats = document.getElementById("selectedtseats").childElementCount;

	if(selectedseats < value){
		$("#continuebutton").show();
		var elem = document.getElementById(seat);
		elem.parentNode.removeChild(elem);
		
		var ul = document.getElementById("selectedtseats")
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(seat));
		var button = document.createElement("button");
		button.setAttribute("class", "btn btn-default");
		button.setAttribute("style", "display:block;margin-left:275px;margin-top:-31px;height:40px;");
		if(version == "icon"){
			button.innerHTML = "<span class='glyphicon glyphicon-remove'></span>";
		}
		else{
			button.innerHTML = "Remove";
		}
		var idname = "seat" + seat;
		var functionname = "removeSeat('" + idname + "', '"+ version +"')";
		button.setAttribute("onClick", functionname);
		li.appendChild(button);
		li.setAttribute("class", "list-group-item seatitem");
		li.setAttribute("id", idname);
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

function removeSeat(seat, version){
	var item = document.getElementById(seat);
	item.parentNode.removeChild(item);

	var elementname = seat.slice(4);
	var dropdown = document.getElementById("dropdownlist");
	var li = document.createElement("li");
	li.setAttribute("id", elementname);
	var link = document.createElement("a");
	link.setAttribute("href", "#");
	var functionname = "addseat('"+elementname+"', '"+ version + "')";
	link.setAttribute("onClick", functionname);
	link.innerHTML = elementname;
	li.appendChild(link);
	dropdown.appendChild(li);
}

movies = ['movie1', 'movie2', 'movie3', 'movie4', 'movie5', 'movie6', 'movie7', 'movie8'];

function selectmovie(movie)
{
	movies.forEach(unselectmovie);
	document.getElementById(movie).style.backgroundColor = "grey";
	nextStep("step-2");
}

function unselectmovie(item, index)
{
	document.getElementById(item).style.backgroundColor = "white";
}

function selectimage(movie)
{
	movies.forEach(unselectimage);
	document.getElementById(movie).style.border = " 5px solid black";
	nextStep("step-2");
}

function unselectimage(item, index)
{
	document.getElementById(item).style.border = " 0px solid white";
}

var startTime;
var endTime;

function startTimer()
{
	startTime = performance.now();
}