function localize() {
	'use strict';

	var language = 'en';

	$.i18n( {
	    locale: language
	} );

	$.i18n().load({
		'en' : 'i18n/en.json',
		'es' : 'i18n/es.json'
	});

	setTimeout(function(){
		$('.i18n').i18n();
	}, 1000);
}

// Enable debug
$.i18n.debug = true;

$(window).on('load', function() {

	var selected = 'en';
	$( "#lang" ).click(function() {
		if (selected == 'en') {
			$.i18n( {
					locale: 'es'
			} );
			selected = 'es';
			$( "#lang" ).removeClass( "language-es" );
			$( "#lang" ).addClass( "language-en" );
		} else {
			$.i18n( {
					locale: 'en'
			} );
			selected = 'en';
			$( "#lang" ).removeClass( "language-en" );
			$( "#lang" ).addClass( "language-es" );
		}
		$('.i18n').i18n();
	});

	localize();

});

/*
$( document ).ready( function( $ ) {
	'use strict';


} );
*/
