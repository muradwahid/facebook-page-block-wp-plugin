import { PanelBody, RangeControl, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { produce } from 'immer';
import React, { Fragment } from 'react';
import AnchorsByTag from '../Panel/AnchorsByTag/AnchorsByTag';

const Settings = ({ attributes, setAttributes }) => {
  const { facebook } = attributes;
  const update = (property, value) => {
    const updatedData = produce(facebook, (draft) => {
      draft[property] = value;
    });
    setAttributes({facebook:updatedData});
  };
  return (
    <Fragment>
      <PanelBody title={__('Page', 'b-blocks')}>
        <TextControl
          label={__('Facebook App Id', 'b-blocks')}
          value={facebook.appId}
          onChange={(value) => update('appId', value)}
        />
        <TextControl
          label={__('Link', 'b-blocks')}
          value={facebook.link}
          onChange={(value) => update('link', value)}
        />
        <div>
          <span>{__('Layout', 'b-blocks')}</span>
          <AnchorsByTag
            value={facebook.layout}
            options={['timeline', 'events', 'messages']}
            onChange={(value) =>
              setAttributes({ facebook: { ...facebook, layout: value } })
            }
          />
        </div>
        <ToggleControl
          label={__('Small Header', 'b-blocks')}
          checked={facebook.smallHeader}
          value={facebook.smallHeader}
          onChange={(value) => update('smallHeader', value)}
        />
        <ToggleControl
          label={__('Cover Photo', 'b-blocks')}
          checked={facebook.coverPhoto}
          value={facebook.coverPhoto}
          onChange={(value) => update('coverPhoto', value)}
        />
        <ToggleControl
          label={__('Profile Photos', 'b-blocks')}
          checked={facebook.profilePhotos}
          value={facebook.profilePhotos}
          onChange={(value) => update('profilePhotos', value)}
        />
        <ToggleControl
          label={__('Custom CTA Button', 'b-blocks')}
          checked={facebook.ctaButton}
          value={facebook.ctaButton}
          onChange={(value) => update('ctaButton', value)}
        />
        <RangeControl label={__("Width","b-blocks")} value={facebook.width} onChange={(value) => update('width', value)} min={0} max={1000} />
        <RangeControl label={__("Height","b-blocks")} value={facebook.height} onChange={(value) => update('height', value)} min={0} max={1000} />
      </PanelBody>
    </Fragment>
  );
};

export default Settings;
