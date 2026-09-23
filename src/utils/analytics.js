const measurementId = 'G-PDNGF8WWF6';

export function initAnalytics() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId);

  const loadGoogleTag = () => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.append(script);
  };

  if (document.readyState === 'complete') {
    loadGoogleTag();
  } else {
    window.addEventListener('load', loadGoogleTag, { once: true });
  }
}
