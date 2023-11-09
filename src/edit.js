/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
import { TextControl, ColorPalette, ToolbarButton } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls, BlockControls } from '@wordpress/block-editor';
import { formatBold, formatItalic, link } from '@wordpress/icons';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	console.log(attributes);
	const colors = [
		{ name: 'red', color: '#f00' },
		{ name: 'white', color: '#fff' },
		{ name: 'blue', color: '#00f' },
	  ];

	const setTextColor = ( color ) => {
		setAttributes( { text_color : color } );
	}

	const setBold = () => {
		if ( attributes.is_bold ) {
			setAttributes( { is_bold : false } );
		} else {
			setAttributes( { is_bold : true } );
		}
	}

	const blockProps = useBlockProps();
	return (
		<div {...blockProps}>
			<BlockControls>
				<ToolbarButton
					icon={ formatBold }
					label="Bold"
					onClick={ setBold }
					isPressed = {attributes.is_bold}
				/>
			</BlockControls>
			<InspectorControls>
				<ColorPalette
					colors={ colors }
					onChange={ setTextColor }
					value={ attributes.text_color }
				/>
			</InspectorControls>
			<TextControl
				value={attributes.message}
				onChange={(val) => setAttributes({ message: val })}
			/>
		</div>
	);
}
