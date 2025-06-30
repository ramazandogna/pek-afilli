// Okuma hızı sabitleri
export const READING_SPEED = {
  WORDS_PER_MINUTE: 200
} as const;

// API sabitleri
export const API = {
  GRAPHQL_URL: process.env.GRAPHQL_URL,
  DEBOUNCE_DELAY: 300, // ms
  DEFAULT_POSTS_PER_PAGE: 5,
  MAX_POSTS_PER_PAGE: 10
} as const;

// Site sabitleri
export const SITE = {
  NAME: 'Pek Afilli',
  URL: 'https://pekafilli.com',
  LOCALE: 'tr_TR',
  DESCRIPTION: 'Genel olarak Pek Afilli Şeyler hakkında bilgi edinin.',
  KEYWORDS:
    'pek afilli, listeler, film listeleri, anime listeleri, anime özet, dizi liste, dizi öneri, film öneri',
  AUTHOR: 'Ramazan Doğan'
  //TWITTER_HANDLE: '@pekafilli'
} as const;

// SEO sabitleri
export const SEO = {
  DEFAULT_TITLE: 'Pek Afilli - Ana Sayfa',
  DEFAULT_DESCRIPTION: 'Genel olarak Pek Afilli Şeyler hakkında bilgi edinin.',
  DEFAULT_IMAGE: 'https://pekafilli.com/og-image.jpg',
  DEFAULT_IMAGE_WIDTH: 1200,
  DEFAULT_IMAGE_HEIGHT: 630
  // TWITTER_CARD_TYPE: 'summary_large_image',
  // FACEBOOK_APP_ID: 'your-facebook-app-id'
} as const;

// Kategori sabitleri
export const CATEGORIES = {
  ACTIVITIES: 'activities',
  PHOTOGRAPHY: 'photography',
  TRAVEL_TIPS: 'travel-tips',
  INSPIRATION: 'inspiration',
  DESTINATIONS: 'destinations'
} as const;

// Sosyal medya linkleri
export const SOCIAL_LINKS = {
  INSTAGRAM: '/',
  TWITTER: '/',
  YOUTUBE: '/',
  LINKEDIN: '/'
} as const;
