

	var util 	= require( "util" )
		Class 	= require( "ee-class" );


	var Types = new Class( {

		init: function(){
			[ "string", "number", "boolean", "array", "object", "function", "date", "regexp", "error", "undefined"].forEach( function( type ){
				this[ type + "Array" ] = function( arg ){
					return this.__array( arg, type );
				}.bind( this );

				this[ type.substr( 0, 1 ) ] = this[ type ].bind( this );				
				this[ type.substr( 0, 1 ) + "a" ] = this[ type + "Array" ].bind( this );
			}.bind( this ) );
		}

		, string: 		function( arg ){ return typeof arg === "string" || Object.prototype.toString.call( arg ) === "[object String]"; }
		, number: 		function( arg ){ return typeof arg === "number" || Object.prototype.toString.call( arg ) === "[object Number]"; }
		, boolean: 		function( arg ){ return typeof arg === "boolean" || Object.prototype.toString.call( arg ) === "[object Boolean]"; }
		, array: 		function( arg ){ return util.isArray( arg ); }
		, object: 		function( arg ){ return typeof arg === "object" }
		, function: 	function( arg ){ return typeof arg === "function" }
		, date: 		function( arg ){ return util.isDate( arg ); }
		, regexp: 		function( arg ){ return util.isRegExp( arg ); }
		, error: 		function( arg ){ return util.isError( arg ); }
		, undefined: 	function( arg ){ return typeof arg === "undefined" }


		, __array: function( arg, type ){
			if ( !this.a( arg ) ) return false;
			var i = arg.length;
			while( i-- ) if ( !this[ type ]( arg[ i ] ) ) return false;
			return true;			
		}
	} );

	

	var types = new Types();

	var type = function( item ){
		return types.s( item ) ? "string" : 
			   types.n( item ) ? "number" :
			   types.a( item ) ? "array" :
			   types.f( item ) ? "function" :
			   types.d( item ) ? "date" :
			   types.r( item ) ? "regexp" :
			   types.e( item ) ? "error" :
			   types.u( item ) ? "undefined" : "unknown";
	};

	type.__proto__ = types;


	module.exports = type;