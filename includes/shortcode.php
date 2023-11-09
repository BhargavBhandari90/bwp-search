<?php

function bwp_search_callback( $attr ) {

	return 'This is Search Feature';

}

add_shortcode( 'bwp_search', 'bwp_search_callback' );