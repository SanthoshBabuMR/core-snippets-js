requirejs.config( {
	  baseUrl: "/public/script"
	, paths : {
		// lib
		"requireLib": "lib/requirejs/require"
		, "jquery": "lib/jquery/jquery"
		, "calc": "modules/calc"
		, "links": "modules/links"
		, "validateVal": "modules/validateVal"
	  }
	, shim: {

	  }
	, urlArgs : "bust=" + ( new Date() ).getTime()

} );