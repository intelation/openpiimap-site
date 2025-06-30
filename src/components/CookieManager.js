import CookieConsent from 'react-cookie-consent';
function getUserConsent() {
    const value = document.cookie
        .split('; ')
        .find(row => row.startsWith('userConsent='))
        ?.split('=')[1];

    return value ? JSON.parse(decodeURIComponent(value)) : null;
}

export function openCookiePreferencesModal(e) {
    if (e?.preventDefault) e.preventDefault();

    const consent = getUserConsent();

    const analyticsCheckbox = document.getElementById('analyticsCookies');
    const marketingCheckbox = document.getElementById('marketingCookies');

    if (analyticsCheckbox) analyticsCheckbox.checked = !!consent?.analytics;
    if (marketingCheckbox) marketingCheckbox.checked = !!consent?.marketing;

    const modal = document.getElementById('cookiePreferencesModal');
    if (modal) modal.showModal();
}



export default function CookieManager({ onAcceptAnalytics }) {
    const handleCustomizeClick = () => {
        document.getElementById('cookiePreferencesModal')?.showModal();
    };

    const handleSavePreferences = () => {
        const analytics = document.getElementById('analyticsCookies').checked;
        const marketing = document.getElementById('marketingCookies').checked;
      
        const consentPreferences = {
          analytics,
          marketing,
          necessary: true
        };
      
        if (typeof window.gtag === 'function') {
          window.gtag('consent', 'update', {
            analytics_storage: analytics ? 'granted' : 'denied',
            ad_storage: marketing ? 'granted' : 'denied',
          });
        }
      
        if (analytics) {
          onAcceptAnalytics?.();
        }
      
        document.cookie = `userConsent=${encodeURIComponent(JSON.stringify(consentPreferences))}; path=/; max-age=${60 * 60 * 24 * 180}`;
      
        const consentBanner = document.querySelector('.cookie-container');
        if (consentBanner) {
          consentBanner.style.display = 'none';
        }
      
        document.getElementById('cookiePreferencesModal')?.close();
      };




    return (
        <>
            <CookieConsent
                disableStyles
                location='bottom'
                buttonText='Accept'
                declineButtonText='Decline'
                enableDeclineButton
                cookieName='userConsent'
                containerClasses='cookie-container'
                contentClasses='cookie-message'
                buttonClasses='btn btn-secondary'
                declineButtonClasses='btn btn-secondary'
                onAccept={() => {
                    onAcceptAnalytics?.();
                }}
                onDecline={() => {
                    if (typeof window.gtag === 'function') {
                        window.gtag('consent', 'update', {
                            analytics_storage: 'denied',
                            ad_storage: 'denied',
                        });
                    }
                }}
            >
                <p>This website uses cookies to improve functionality and gather usage insights. You can choose which types of cookies you allow.</p>
                <button
                    className='btn btn-secondary' onClick={handleCustomizeClick}
                >
                    Customize
                </button>
            </CookieConsent>

            <dialog id='cookiePreferencesModal' className='cookie-modal'>
                <div className='modal-content'>
                    <p><strong>Cookie Preferences</strong></p>
                    <p className='mb-3'>Select which types of cookies you allow us to use:</p>
                    <form>
                        {/* Strictly Necessary Cookies */}
                        <div className='mb-3'>
                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox' defaultChecked disabled />
                                <label className='form-check-label fw-bold mb-2'>Strictly Necessary Cookies (Always Active)</label>
                            </div>
                            <p className='text-muted ms-4'>These cookies are essential for the website to function and cannot be switched off. They are usually only set in response to actions like setting your privacy preferences, logging in, or filling out forms.</p>
                            <ul className='small ps-4'>
                                <li><strong>userConsent</strong>: Stores the user’s cookie preferences.</li>
                            </ul>
                        </div>

                        {/* Analytics Cookies */}
                        <div className='mb-3'>
                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox' id='analyticsCookies' />
                                <label className='form-check-label fw-bold mb-2' htmlFor='analyticsCookies'>Analytics Cookies</label>
                            </div>
                            <p className='text-muted ms-4'>These cookies help us understand how visitors interact with the website by collecting and reporting information anonymously.</p>
                            <ul className='small ps-4'>
                                <li><strong>_ga*</strong>: Registers a unique ID to generate statistical data on how the user uses the site.</li>
                            </ul>
                        </div>

                        {/* Marketing Cookies */}
                        <div className='mb-3'>
                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox' id='marketingCookies' />
                                <label className='form-check-label fw-bold mb-2' htmlFor='marketingCookies'>Marketing Cookies</label>
                            </div>
                            <p className='text-muted ms-4'>These cookies are used to track visitors across websites to display ads that are relevant and engaging for the individual user.</p>
                            <ul className='small ps-4'>
                                <li><strong>bcookie</strong>: Browser Identifier cookie used for diagnostic purposes for LinkedIn</li>
                            </ul>
                        </div>
                    </form>

                    <div className='mt-4 d-flex gap-1 flex-wrap'>
                            <button
                                className='btn btn-primary'
                                onClick={() => {
                                    document.getElementById('analyticsCookies').checked = true;
                                    document.getElementById('marketingCookies').checked = true;
                                    handleSavePreferences();
                                }}
                            >
                                Accept All
                            </button>

                            <button
                                className='btn btn-primary'
                                onClick={() => {
                                    document.getElementById('analyticsCookies').checked = false;
                                    document.getElementById('marketingCookies').checked = false;
                                    handleSavePreferences();
                                }}
                            >
                                Decline All
                            </button>

                            <button className='btn btn-primary' onClick={handleSavePreferences}>
                                Save Preferences
                            </button>
                            <button
                                className='btn btn-primary'
                                onClick={() => document.getElementById('cookiePreferencesModal')?.close()}
                            >
                                Cancel
                            </button>
                    </div>

                </div>
            </dialog>
        </>
    );
}