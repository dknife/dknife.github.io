
// object
var myHotel = {
	// properties
	name: 'quay',
	rooms: 40,
	booked: 25,
	gym: true,
	roomTypes:	['twin', 'double', 'suite'],
	
	// method
	checkAvailability: function() {
		return this.rooms - this.booked;
	}
};

var elementName = document.getElementById('hotelName');
elementName.textContent = myHotel.name;
var elementRooms = document.getElementById('rooms');
elementRooms.textContent = myHotel.checkAvailability();

// adding properties to an already created object
var car = new Object();
car.name = 'kit';
car.color = 'red';
car.printInfo = function() {
	document.write("<br>Car info = " + this.name + "," + this.color);
}; // method should be followed by semicolor

car.printInfo();


// object constructor
function Hotel(name, rooms, booked) {
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	
	this.checkAvailability = function() {
		return this.rooms - this.booked;	
	};
	
	this.printInfo = function() {
		document.write("<br><br>Hotel: " + this.name);
		document.write("<br>Available Rooms: " + this.checkAvailability());
	}
}

var anotherHotel = new Hotel('hilton', 50, 35);

anotherHotel.printInfo();

