# 3 Constructors in JS

### First Constructor

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

### Second Constructor

function family (FirstName){
	this.address = '22 Jackson Dr.';
	this.LastName = 'Huston';
	this.FirstName = FirstName || '????';
	this.living = true;

	this.moves = function(){
		this.address = '33 Woodlane Drive';
		return FirstName + ' now lives at 33 Woodlane Drive.';
	}
}

var tyler  = new family ('Tyler');
var connor = new family ('Connor');
var jay    = new family ('Jay');
var kate   = new family ('Kate');

// For a family member to move type firstName.moves()


### Second Constructor

function skydivingCrew (name){
	this.name = name || '????';
	this.alive = true;
	this.helmet = true;
	this.parachute = true;


	this.parachuteFails = function(){
		this.alive = false;
		return name + ' is now dead!';
	}
}

var billy   = new skydivingCrew ('Billy');
var george  = new skydivingCrew ('George');
var jason   = new skydivingCrew ('Jason');
var anthony = new skydivingCrew ('Anthony');

// For a skydiver to die type name.parachuteFails()


### Link

http://tyhus14.github.io/js-new-constructor-hw/