function NflPlayer (name, age){
	this.team = 'colts';
	this.cityLocation = 'indianapolis';
	this.injuredList = false;
	this.name = name || '????';
	this.age = age || '????';

	this.injury = function(){
		this.injuredList = true;
		return name + ' is now injured!'
	}
}

var andrew = new NflPlayer ('Andrew Luck',      25);
var reggie = new NflPlayer ('Reggie Wayne',     34);
var trent  = new NflPlayer ('Trent Richardson', 24);

// For a player to get injured type name.injury()



function Family (firstName){
	this.address = '22 Jackson Dr.';
	this.LastName = 'Huston';
	this.firstName = firstName || '????';
	this.living = true;

	this.moves = function(){
		this.address = '33 Woodlane Drive';
		return firstName + ' now lives at 33 Woodlane Drive.';
	}
}

var tyler  = new Family ('Tyler');
var connor = new Family ('Connor');
var jay    = new Family ('Jay');
var kate   = new Family ('Kate');




function SkydivingCrew (name){
	this.name = name || '????';
	this.alive = true;
	this.helmet = true;
	this.parachute = true;


	this.parachuteFails = function(){
		this.alive = false;
		return name + ' is now dead!';
	}
}

var billy   = new SkydivingCrew ('Billy');
var george  = new SkydivingCrew ('George');
var jason   = new SkydivingCrew ('Jason');
var anthony = new SkydivingCrew ('Anthony');





