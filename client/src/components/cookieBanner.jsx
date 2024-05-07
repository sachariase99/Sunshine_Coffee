import React, { useState } from 'react';

const CookieBanner = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleAccept = () => {
    // Set a cookie to remember user's consent
    document.cookie = "cookieConsent=true; max-age=2592000"; // Expires in 30 days. Set in seconds
    setIsBannerVisible(false);
  };

  const handleDeny = () => {
    setIsBannerVisible(false);
  };

  // Check if the user has already accepted cookies
  const cookieConsent = document.cookie.split(';').some(cookie => cookie.trim().startsWith('cookieConsent=true'));

  if (!isBannerVisible || cookieConsent) {
    return null; // If the user already has accepted cookie, don't render the banner.
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4 px-6 flex justify-between items-center z-50">
      <p className="text-sm">
        This website uses cookies to ensure you get the best experience on our website.
        <a href="/privacy-policy" className="text-blue-400 ml-1">Learn more</a>
      </p>
      <div>
        <button onClick={handleAccept} className="bg-green-500 text-white px-4 py-2 rounded mr-4">
          Accept
        </button>
        <button onClick={handleDeny} className="bg-red-500 text-white px-4 py-2 rounded">
          Deny
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
