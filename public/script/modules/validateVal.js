define( [ ], function( ) {

	/**
	* returns true, if the specified property/variable has a value other than undefined or null
	* @function		containsValue
	* @param		{object|function|array|boolean|string|number|null|undefined} p
	* @param		{boolean} deep optional, if true, validates if string/array type has atleast one character/element
	* @return		{boolean} true if the param p has a value other than undefined or null
	*
	* @ref			http://tobyho.com/2011/01/28/checking-types-in-javascript/
	*
	* @usage
	* var myVar;
	* console.log( containsValue( myVar ) );
	*
	* myVar = "";
	* console.log( containsValue( myVar, true) );
	*
	* myVar = "bob";
	* console.log( containsValue( myVar, true) );
	*
	* myVar = { name: "bob" }
	* console.log( containsValue( myVar.name, true) );
	*
	*/
	function containsValue( val, deep ) {
		"use strict";

		var r;
		r = ( val !== undefined && val !== null );
		if( r === true && deep === true ) {
			var jsTypes = /Object|Function|Array|Boolean|String|Number|Null|Undefined/g;
			var type = jsTypes.exec( Object.prototype.toString.call( val ) ) || [];
			if( type[0] === "Array" || type[0] === "String" ) {
				r = ( val.length === 0 ) ? false : true;	
			}
		}
		return r;
	}

	/**
	* returns true, if the specified property exists on the object
	* @function		containsProperty
	* @param		{object} obj
	* @param		{string} prop 
	* @param		{boolean} deep optional, if true, validates if string/array type has atleast one character/element
	* @return		{boolean} true if the param p has a value other than undefined or null
	*
	* @ref			http://tobyho.com/2011/01/28/checking-types-in-javascript/
	*
	* @usage
	* var person;
	* console.log( containsProperty( person, "name.firstName" ) );
	*
	* person = {};
	* console.log( containsProperty( person, "name.firstName" ) );
	*
	* person = {
	*	name: {
	*	  	firstName: ""
	*	  	, lastName: ""
	*	}
	* };
	* console.log( containsProperty( person, "name.firstName" ) );
	*
	* var univ = {
	*	college: {
	*		name: "oxford"
	*	}
	* };
	* console.log( containsProperty( univ, "name" ) );
	*
	*/
	function containsProperty( obj, prop, deep ) {
		"use strict";

		var property = prop.split(".");
		var object = obj;
		var r = true;
		var type = ( containsValue( object ) && /Object/g.exec( Object.prototype.toString.call( object ) ) ) || [];

		if( type[0] !== "Object" ) {
			r = false;
		}
		else {
			for( var i=0, max=property.length; i<max; i++ ) {
				object = object[ property[ i ] ];
				if ( containsValue( object, deep ) === false ) {
					r = false;
					break;
				}
			}	
		}
		return r;
	}

	return {
		containsValue: containsValue
		, containsProperty: containsProperty
	}

} );