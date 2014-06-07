
/**
* @function		
* @purpose		defines a library
* @param		{object} global window object
* @return		{undefined}
*
* param signature
* global-
* 
* @description
* - registers itself a library in the global scope as "window.calc"
* - capable of registering itself as a module
* - defines a noConflict function, to release the global variable reference "window.calc"
*
*/
( function( global ) {
	"use strict";

	// variable to hold the library
	var calc = {}
    // capture the original value of global "calc" property
	var _calc = global.calc;
	// expose the library reference as the global "calc" property 
	global.calc = calc;

	/**
	* @function		
	* @purpose		registers the library as AMD compatible module and removes the library object reference from global scope
	* @return		{undefined}
	*/
	( function( ) {
		if( typeof define === "function" && define.amd ) {
			calc.noConfict();
			define( "calc", [], function( ) {
				return calc;
			})
		}
	} )( );

	// ** define the library **
	
	/**
	* @method		noConfict
	* @purpose		returns the original value of global "calc" property
	* @return		{object} - the library object
	*/
	calc.noConfict = function( ) {
		global.calc = _calc;
		return calc;
	}

	/**
	* @method		add
	* @purpose		performs addition and returns the value
	* @param		{arguments} arguments function argument are retrieved from the "arguments" object
	* @return		{number}
	*/
	calc.add = function( ) {
		var sum = 0;
		for( var i=0, max=arguments.length; i < max; i++ ) {
			sum += arguments[i]
		}
		return sum;
	}

	/**
	* @method		sub
	* @purpose		performs subtraction and returns the value
	* @param		{arguments} arguments function argument are retrieved from the "arguments" object
	* @return		{number}
	*/
	calc.sub = function( ) {
		var sub = arguments[0];
		for( var i=1, max=arguments.length; i < max; i++ ) {
			sub -= arguments[i]
		}
		return sub;
	}

} )( this );
