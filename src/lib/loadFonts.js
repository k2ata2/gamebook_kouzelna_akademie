const FONT_LINK_ID = 'magic-academy-fonts';

if (typeof document !== 'undefined' && !document.getElementById(FONT_LINK_ID)) {
  const fontsLink = document.createElement('link');
  fontsLink.id = FONT_LINK_ID;
  fontsLink.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&display=swap';
  fontsLink.rel = 'stylesheet';
  document.head.appendChild(fontsLink);
}
