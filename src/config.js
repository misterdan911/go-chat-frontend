export default {
  url: import.meta.env.VITE_BACKEND_URL,
  url2: import.meta.env.VITE_BACKEND_URL2,
  demo: import.meta.env.VITE_DEMO === 'true',
  appName: import.meta.env.VITE_SITE_TITLE || 'Clover',
  brand: import.meta.env.VITE_SITE_BRAND || 'Honeyside',
  showCredits: import.meta.env.VITE_SHOW_CREDITS === 'true',
};
