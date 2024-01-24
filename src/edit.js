import { TextControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { useBlockProps, InspectorControls, BlockControls } from '@wordpress/block-editor';
import { formatBold, formatItalic, link } from '@wordpress/icons';
import ServerSideRender from '@wordpress/server-side-render';

export default function Edit({ attributes, isSelected, setAttributes }) {

	const setPostType = ( val ) => {
		setAttributes( { post_type : val } );
	}

	const setNumberOfResults = ( val ) => {
		setAttributes( { number_of_results : val } );
	}

	console.log(attributes);

	const blockProps = useBlockProps();
	return (
		<div {...blockProps}>
			<InspectorControls>
				<SelectControl
					label="Post Type"
					value={ attributes.post_type }
					options={ wp.data.select('core').getPostTypes() !== null &&

						wp.data.select('core').getPostTypes().map( function( item ) {
							return {
								label: item.name,
								value: item.rest_base
							}
						} )

					}
					onChange={ ( post_type ) => setPostType( post_type ) }
				/>
				<TextControl
					label="Number Of Results"
					value={ attributes.number_of_results }
					onChange={ ( valnum ) => setNumberOfResults( valnum ) }
				/>
			</InspectorControls>
			<ServerSideRender
				block="create-block/bwp-search"
			/>
		</div>
	);
}
