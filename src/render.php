<?php
wp_enqueue_script( 'jquery' );
?>
<div class="bwp-search-wrap">
    <div id="search-sidebar">
        <form id="search-form" method="post">
            <input type="text" id="search-input" name="search" placeholder="Enter your search...">
            <button type="submit">Search</button>
        </form>
        <script>
        var ajaxurl = '<?php echo trailingslashit( site_url() ) . 'wp-json/wp/v2/' . $attributes['post_type']. '/?per_page=' . $attributes['number_of_results']; ?>';
        jQuery(document).ready(function($) {

            jQuery(document).on('submit', '#search-form', function(e) {

                e.preventDefault();
                var data = {
                    'search': jQuery( '#search-input' ).val(),
                };
                jQuery.get( ajaxurl, data, function( response ) {
                    var html = '';
                    jQuery.each(response, function(index, item) {
                        var title = item.title.rendered;
                        html += '<div class="result-item">';
                        html += '<h3>' + title + '</h3>';
                        html += '</div>';
                    });
                    jQuery( '#search-results' ).html( html );
                });
            });
        });
    </script>
    </div>
    <div id="search-results"></div><!-- Search result goes here -->
</div><!-- .bwp-search-wrap -->