const ads = require('./ads');

module.exports = {
  ads,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/bow/logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/bow/logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/bow/logo.png?h=50',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/bow/logo.png?h=100 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/biooptics-world/' },
    { provider: 'twitter', href: 'https://twitter.com/BioOptics' },
    { provider: 'facebook', href: 'https://www.facebook.com/pages/BioOptics-World/131802223749' },
  ],
  primaryNavItems: [
    { href: '/bioscience', label: 'Bioscience' },
    { href: '/biomedicine', label: 'Biomedicine' },
    { href: '/bioimaging', label: 'Bioimaging' },
    { href: '/biophotonics-techniques', label: 'Biophotonics Techniques' },
    { href: '/biophotonics-tools', label: 'Biophotonics Tools' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  menuItems: {
    resources: [
      { href: '/magazine', label: 'Magazine' },
      { href: '/videos', label: 'Videos' },
      { href: '/white-papers', label: 'White Papers' },
      { href: '/webcasts', label: 'Webcasts' },
    ],
    userTools: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/advertise', label: 'Advertise' },
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions' },
    ],
  },
  gtmContainer: 'GTM-M24RV9Q',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:tlips421iqi',
  },
  subscriptions: {
    newsletters: 'https://eforms.kmpsgroup.com/jointforms/Forms/Subscription.aspx?pubcode=BOW&step=form',
    publications: {
      '/subscribe/print/bow': 'https://formdesigner.ecn5.com/GetForm?tokenuid=28d2fe32-119b-468e-a58a-a7b564581eaf&promoCode=NW2019&utm_source=mag_sub&utm_medium=website&utm_campaign=NW2019&utm_content=2019-02-25',
    },
  },
  magazines: {
    description: 'BioOptics World magzaine has merged with its sister publication, Laser Focus World, with coverage on optical technologies and instrumentation for the lLife Sciences.',
  },
};
