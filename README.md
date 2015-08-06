# ee-types

Reliabale type detection


[![npm](https://img.shields.io/npm/dm/ee-types.svg?style=flat-square)](https://www.npmjs.com/package/ee-types)
[![Travis](https://img.shields.io/travis/eventEmitter/ee-types.svg?style=flat-square)](https://travis-ci.org/eventEmitter/ee-types)
[![node](https://img.shields.io/node/v/ee-types.svg?style=flat-square)](https://nodejs.org/)


## API


	var type = require('ee-types');


	type.string('nope'); 				// true
	type.strign(new String('yeah')); 	// true
	type.s('michael'); 					// true


	type(2) // number


## API

	type() // returns the loawercase type

	type.string()
	type.number()
	type.boolean()
	type.function()
	type.object()
	type.date()
	type.error()
	type.regexp()
	type.array()
	type.buffer()
	type.null()
	type.undefined()
	type.symbol()

shortcut methods

	type.s() // string
	type.n() // number
	type.b() // boolean
	type.u() // undefined

check array and their contents. for every type above there is an array method like the one below.

	type.stringArray([ 'hi', new String('name'), 'is', 'michael' ])	 // true
	type.sa([ 'hi', new String('name'), 'is', 'michael' ])	 		 // true
