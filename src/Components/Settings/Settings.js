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
    setAttributes({ facebook: updatedData });
  };
  return (
    <Fragment>
      <PanelBody title={__('Page', 'social-media-page-block')}>
        <TextControl
          label={__('Facebook App Id', 'social-media-page-block')}
          value={facebook.appId}
          onChange={(value) => update('appId', value)}
        />
        <div style={{ marginTop: "-25px", marginBottom: "10px" }}>
          <small>{__("Don't have an APP Id ", "social-media-page-block")} <a href="https://developers.facebook.com/apps/">click here</a></small>
        </div>
        <TextControl
          label={__('Link', 'social-media-page-block')}
          value={facebook.link}
          onChange={(value) => update('link', value)}
        />
        <div>
          <span>{__('Layout', 'social-media-page-block')}</span>
          <AnchorsByTag
            value={facebook.layout}
            options={['timeline', 'events', 'messages']}
            onChange={(value) =>
              setAttributes({ facebook: { ...facebook, layout: value } })
            }
          />
        </div>
        <ToggleControl
          label={__('Small Header', 'social-media-page-block')}
          checked={facebook.smallHeader}
          value={facebook.smallHeader}
          onChange={(value) => update('smallHeader', value)}
        />
        <ToggleControl
          label={__('Cover Photo', 'social-media-page-block')}
          checked={facebook.coverPhoto}
          value={facebook.coverPhoto}
          onChange={(value) => update('coverPhoto', value)}
        />
        <ToggleControl
          label={__('Profile Photos', 'social-media-page-block')}
          checked={facebook.profilePhotos}
          value={facebook.profilePhotos}
          onChange={(value) => update('profilePhotos', value)}
        />
        <ToggleControl
          label={__('Custom CTA Button', 'social-media-page-block')}
          checked={facebook.ctaButton}
          value={facebook.ctaButton}
          onChange={(value) => update('ctaButton', value)}
        />
        <RangeControl label={__("Width", "social-media-page-block")} value={facebook.width} onChange={(value) => update('width', value)} min={0} max={1000} />
        <RangeControl label={__("Height", "social-media-page-block")} value={facebook.height} onChange={(value) => update('height', value)} min={0} max={1000} />
      </PanelBody>
    </Fragment>
  );
};

export default Settings;
