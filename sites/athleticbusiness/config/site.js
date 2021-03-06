const ads = require('./ads');

module.exports = {
  ads,
  company: 'Athletic Business',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/abm/ab/ab-navbar-logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/abm/ab/ab-navbar-logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/abm/ab/ab-navbar-logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/abm/ab/ab-navbar-logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/athleticbusiness' },
    { provider: 'twitter', href: 'https://twitter.com/Athleticbiz' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/773251' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/AthleticBusinessMag' },
    { provider: 'instagram', href: 'https://www.instagram.com/athleticbiz' },
  ],
  primaryNavItems: [
    { href: '/facilities', label: 'Facilities' },
    { href: '/programming', label: 'Programming' },
    { href: '/business', label: 'Business' },
    { href: '/media-technology', label: 'Media & Technology' },
    { href: '/safety-security', label: 'Safety & Security' },
    { href: '/law-policy', label: 'Law & Policy' },
    { href: '/leadership', label: 'Leadership' },
  ],
  secondaryNavItems: [
    { href: 'https://www.abshow.com', label: 'Attend AB Show', target: '_blank' },
    { href: 'https://athleticbusiness.info', label: 'Advertise', target: '_blank' },
    { href: '#', label: 'Buyers Guide' },
    { href: '#', label: 'Subscribe' },
    { href: '#', label: 'Magazine' },
  ],
  footerNavItems: [
    { href: '/page/about-us', label: 'About Us' },
    { href: '#', label: 'Subscribe' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '#', label: 'Events' },
    { href: '#', label: 'Privacy Policy' },
  ],
  menuItems: {
    resources: [
      { href: '#', label: 'Magazine' },
      { href: '#', label: 'Buyers Guide' },
    ],
    userTools: [
      { href: '#', label: 'Subscribe' },
      { href: 'https://athleticbusiness.info', label: 'Advertise', target: '_blank' },
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '#', label: 'Privacy Policy' },
    ],
  },
  gtmContainer: '',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:mb2grfhfx08',
  },
  subscriptions: {
    newsletters: 'https://formdesigner.ecn5.com/GetForm?tokenuid=4146284e-f8ba-462a-b1d1-f09a3cee4696',
    publications: {
      '/subscribe/print/ab': 'https://formdesigner.ecn5.com/GetForm?tokenuid=4146284e-f8ba-462a-b1d1-f09a3cee4696',
    },
  },
  magazines: {
    description: 'Athletic Business offers a complimentary monthly subscription to qualified professionals within the athletic, fitness and recreation industries and is read by individuals representing colleges and universities, high schools, park and recreation departments, military branches and bases, health clubs, YMCAs, professional sports teams, stadiums and arenas, sports architecture firms, and hospital and corporate wellness centers.',
  },
  contactUs: {
    branding: {
      bgColor: '#a6181c',
      logo: 'https://base.imgix.net/files/base/abm/ab/logo.png?h=60',
    },
  },
};
