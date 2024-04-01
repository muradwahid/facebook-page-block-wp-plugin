import React, { useEffect } from 'react';

const Facebook = ({ attributes }) => {
  const {facebook}=attributes;
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_US/sdk.js';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.nonce = 'CAr8Z5Od';
    script.onload = () => {
      window.FB.init({
        xfbml: true,
        version: 'v18.0',
        appId: facebook.appId,
      });
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [facebook]);
  return (
    <div>
      <div
        className="fb-page"
        data-href={facebook.link}
        data-tabs={facebook.layout.join(',')}
        data-width={facebook.width}
        data-height={facebook.height}
        data-small-header={facebook.smallHeader}
        data-hide-cover={!facebook.coverPhoto}
        data-show-facepile={facebook.profilePhotos}
        data-hide-cta={facebook.ctaButton}
      >
      </div>
    </div>
  );
};

export default Facebook;
