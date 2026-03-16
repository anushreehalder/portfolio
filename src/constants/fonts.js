// Font family constants
export const FONTS = {
  inter: '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  helveticaNeue: '"Helvetica Neue", Arial, sans-serif',
  system: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
};

// Typography presets - font family + size combinations
export const TYPOGRAPHY = {
  // Navigation
  navBase: {
    fontFamily: FONTS.inter,
    fontSize: '18px',
  },
  // Hero name/heading
  heroName: {
    fontFamily: FONTS.helveticaNeue,
    fontSize: '128px',
  },
  // Hero subtitle
  heroSubtitle: {
    fontFamily: FONTS.inter,
    fontSize: '20px',
  },
  // Heading styles
  heading1: {
    fontFamily: FONTS.inter,
    fontSize: '32px',
  },
  heading2: {
    fontFamily: FONTS.inter,
    fontSize: '24px',
  },
  heading3: {
    fontFamily: FONTS.inter,
    fontSize: '20px',
  },
  // Body text
  bodyBase: {
    fontFamily: FONTS.inter,
    fontSize: '16px',
  },
  bodySmall: {
    fontFamily: FONTS.inter,
    fontSize: '14px',
  },
  bodyLarge: {
    fontFamily: FONTS.inter,
    fontSize: '18px',
  },
  // Button text
  buttonBase: {
    fontFamily: FONTS.inter,
    fontSize: '14px',
  },
  buttonLg: {
    fontFamily: FONTS.inter,
    fontSize: '18px',
  },
};

// Helper function to get typography styles
export const getTypography = (preset) => {
  return TYPOGRAPHY[preset] || TYPOGRAPHY.bodyBase;
};
