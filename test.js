

	var type = require( "./" );



	console.log( type.s( "some string" ) );
	console.log( type.number( new Number(55) ) );
	console.log( type.boolean( false ) );
	console.log( type.function( function(){} ) );
	console.log( type.object( {} ) );
	console.log( type.date( new Date() ) );
	console.log( type.error( new Error() ) );
	console.log( type.regexp( /gg/ ) );
	console.log( type.array( [] ) );



	console.log( type.stringArray( [ 1, "asas" ] ) );
	console.log( type.ba( [  true, false ] ) );


	console.log( type( "ee" ), type( /f/ ) );
