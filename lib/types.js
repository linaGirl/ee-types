

	var util = require( "util" );


	module.exports = {
		  string: 	function( arg ){ return typeof arg === "string" || Object.prototype.toString.call( arg ) === "[object String]"; }
		, number: 	function( arg ){ return typeof arg === "number" || Object.prototype.toString.call( arg ) === "[object Number]"; }
		, boolean: 	function( arg ){ return typeof arg === "boolean" || Object.prototype.toString.call( arg ) === "[object Boolean]"; }
		, array: 	function( arg ){ return util.isArray( arg ); }
		, object: 	function( arg ){ return typeof arg === "object" }
		, function: function( arg ){ return typeof arg === "function" }
		, date: 	function( arg ){ return util.isDate( arg ); }
		, regexp: 	function( arg ){ return util.isRegExp( arg ); }
		, error: 	function( arg ){ return util.isError( arg ); }

		, s: 	function( arg ){ return typeof arg === "string" || Object.prototype.toString.call( arg ) === "[object String]"; }
		, n: 	function( arg ){ return typeof arg === "number" || Object.prototype.toString.call( arg ) === "[object Number]"; }
		, b: 	function( arg ){ return typeof arg === "boolean" || Object.prototype.toString.call( arg ) === "[object Boolean]"; }
		, a: 	function( arg ){ return util.isArray( arg ); }
		, o: 	function( arg ){ return typeof arg === "object" }
		, f: 	function( arg ){ return typeof arg === "function" }
		, d: 	function( arg ){ return util.isDate( arg ); }
		, r: 	function( arg ){ return util.isRegExp( arg ); }
		, e: 	function( arg ){ return util.isError( arg ); }
	};
	