<?php
/**
 * Plugin Name:       Bwp Search
 * Description:       A Gutenberg block to show your pride! This block enables you to type text and style it with the color font Gilbert from Type with Pride.
 * Version:           0.1.0
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bwp-search
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_bwp_search_block_init() {
	register_block_type(
		__DIR__ . '/build'
	);
}
add_action( 'init', 'create_block_bwp_search_block_init' );

function render_block_bwp_search() {
	return do_shortcode( '[bwp_search]' );
}

function create_block_custom_cat( $block_categories, $block_editor_context ) {

	if ( $block_editor_context->post ) {

		array_push(
			$block_categories,
			array(
				'slug'  => 'bwp-plugins',
				'title' => __( 'BWP Plugins', 'bwp-search' ),
				'icon'  => '',
			)
		);

	}

	return $block_categories;

}

add_filter( 'block_categories_all', 'create_block_custom_cat', 10, 2 );

include plugin_dir_path( __FILE__ ) . 'includes/shortcode.php';
