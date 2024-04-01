import { useEffect,Fragment } from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import Facebook from './Components/Facebook/Facebook';
import Settings from './Components/Settings/Settings';
const Edit = props => {
	const { className, setAttributes, clientId, attributes } = props;
	const {cId} = attributes;
	useEffect(() => { clientId && setAttributes({ cId: clientId.substring(0, 10) }); }, [clientId]); // Set & Update clientId to cId
	return (
		<Fragment>
			<InspectorControls>
				<Settings attributes={attributes} setAttributes={setAttributes} />
			</InspectorControls>
			<div className={className} id={`fbpg-facebook-page-${clientId}`}>
				<Facebook attributes={attributes} />
			</div>
    </Fragment>
  );
};
export default Edit;