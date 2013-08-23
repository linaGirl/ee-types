# ee-types

Reliabale type detection

## installation
	
	npm install ee-types

## usage


	var type = require( "ee-types" );


	type.string( "nope" ); 					// true
	type.strign( new String( "yeah" ) ); 	// true
	type.s( "michael" ); 					// true


## API

	type.string()
	type.number()
	type.boolean()
	type.function()
	type.object() 			// array, dates, erors, regexps & sometimes strings, numbers and bools are objects
	type.date()
	type.error()
	type.regexp()
	type.array()

shortcut methods

	type.s()
	type.n()
	type.b()
	type.f()
	type.o()
	type.d()
	type.e()
	type.r()
	type.a()