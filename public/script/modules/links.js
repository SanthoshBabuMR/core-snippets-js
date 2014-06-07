define( [ ], function( ) {

	/**
	* @function		getExternalLinks
	* @purpose		returns the list of external links in a web document
	* @param		{object} options optional
	* @return		{array} list of external links
	*
	* param signature
	* options
	*	{
	*    	internal: {
	*			addLabel: [ true | false ] if true, will set a class name for all internal links
	*			, label: [ <className> ]  optional, sets the custom class name for internal links
	*		}
	*		, external: {
	*			addLabel: [ true | false ] if true, will set a class name for all external links
	*			, label: [ <className> ]  optional, sets the custom class name for external links
	*		}
	*		, bookmark: {
	*			addLabel: [ true | false ] if true, will set a class name for all internal bookmark links
	*			, label: [ <className> ]  optional, sets the custom class name for internal bookmark links
	*		}
	*	};             
	* 
	* @logic
	* Domain Links
	* - will contain the host name same as that of the host name in url
	* - might begin with "/", synonym for root path of the current domain
	* Bookmarks
	* - URLs that are domain links and have "#" character
	* External Links
	* - URLs with host name different from that of the host name in url
	*
	*/
	function getExternalLinks( options ) {

		var host = new RegExp( location.host )
			, classInternal = ( options && options.internal ) ? ( ( options.internal.addLabel ) ? options.internal.label || "domain-url" : null ) : null
			, classExternal = ( options && options.external ) ? ( ( options.external.addLabel ) ? options.external.label || "external-url" : null ) : null
			, classBookmark = ( options && options.internal ) ? ( ( options.internal.addLabel ) ? options.bookmark.label || "bookmark-url" : null ) : null
			// an array variable to capture external links
			, extLinks = []
			, url
		;
		
		// step: act on each link
		$( "a" ).each( function( ) {
			// step: store url
			url = $( this ).attr( "href" );
			if ( url === undefined ) {
				// dummy anchor tag; do nothing
			}	
			else if( ( host.test( url ) || url.slice( 0, 1 ) === "/" ) && url.slice( 0, 1 ) === "#" ) {
				// should be internal bookmarks
				if( classBookmark !== null ) {
					$( this ).addClass( classBookmark );
				}
			}
			else if( host.test( url ) || url.slice( 0, 1 ) === "/" ) {
				// should be interal links
				if( classInternal !== null ) {
					$( this ).addClass( classInternal );
				}
			}
			else {
				// must be external links
				if( classExternal !== null ) {
					$( this ).addClass( classExternal );
				}
				extLinks.push( this );
			}
		} );
		// step: return an array of external links
		return extLinks;
	}

	return {
		getExternalLinks: getExternalLinks
	}

} );