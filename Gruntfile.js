module.exports = function( grunt ) {

	// configure task(s)
	grunt.initConfig( {

		connect: {
		// connect begin
			appServer: {
			// appServer begin
				options: {
					  protocol: "http"
					, hostname: "localhost"
					, port: 6234
					, base: "."
					, keepalive: true
				}
			// appServer end
			}
		// connect end
		}	

	} );

	// load task(s)
	grunt.loadNpmTasks( "grunt-contrib-connect" );

	// register task(s)
	grunt.registerTask( "appServer", "connect:appServer" );

};
