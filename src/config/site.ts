/**
 * Kaikki yhteystiedot ja mitat luetaan täältä.
 * TODO: tarkista maneesin mitat asiakkaalta. Vanhalla etusivulla luki 24 × 64 m,
 * talli- ja vuokraussivuilla 20 × 60 m. Sivuilla näytetään 20 × 60 m.
 */
export const site = {
  name: 'Gumbölen Ratsastuskeskus',
  legalName: 'Gumbölen Ratsastuskeskus Oy',
  url: 'https://gumbolenratsastuskeskus.com',
  email: 'gumbolenratsastuskeskus@gmail.com',
  manager: 'Maarit Salin-Piisilä',
  phones: {
    manager: { tel: '+358406301233', display: '040 630 1233' },
    staff: { tel: '+358405758865', display: '040 575 8865' },
  },
  address: {
    street: 'Engelin Puistotie',
    postalCode: '02810',
    city: 'Espoo',
    country: 'FI',
  },
  businessId: '0100537-2',
  holdingPlaceId: 'FI000006157779',
  invoicing: {
    operator: 'Kollektor Scan',
    postal: 'PL 100',
    postalCode: '80020',
    email: 'invoice-01005372@kollektor.fi',
    ovt: '003701005372',
    operatorIds: ['003721291126', 'DABAFIHH'],
    iban: 'FI95 5780 4120 0504 29',
    reference: '1245',
  },
  geo: { lat: 60.22, lng: 24.61615 },
  stalls: 42,
  paddocks: 23,
  built: 1903,
  arena: { width: 20, length: 60 },
  outdoor: { width: 46, length: 60 },
  prices: {
    season: 230,
    single: 28,
    dogFirst: 50,
    dogExtra: 25,
  },
  staff: {
    permanent: ['Alar', 'Venla', 'Mia', 'Jenni'],
    hourly: ['Anni', 'Charlotta'],
  },
  social: {
    instagram: '',
    facebook: '',
  },
  employmentUrl: 'https://www.espoo.fi/fi/palvelut/tyokokeilu',
  clubName: 'Gumbölen Ratsastajat',
  pdfArena: '/files/grk-ulkokentan-mitat.pdf',
  /**
   * Seuran julkiset jäsentiedot. Talliyhtiö ja seura ovat eri toimijoita.
   * Maksut ja avustuskriteerit on poimittu seuran sivuilta; vuosi kannattaa tarkistaa vuosittain.
   */
  club: {
    name: 'Gumbölen Ratsastajat ry',
    email: 'gr@gumbolenratsastajat.fi',
    secretary: 'Kirsi Inkala',
    harassmentContact: 'Suvi Takko',
    feeYear: 2026,
    grantYear: 2025,
    shelter: { member: 20, other: 40, width: 3, length: 4.5 },
    fees: [
      { key: 'fullSenior', total: 68, srl: 58, club: 10 },
      { key: 'fullJunior', total: 61, srl: 51, club: 10 },
      { key: 'familySenior', total: 39, srl: 29, club: 10 },
      { key: 'familyJunior', total: 35.5, srl: 25.5, club: 10 },
      { key: 'support', total: 10, srl: 0, club: 10 },
    ],
    links: {
      home: 'https://www.gumbolenratsastajat.fi/jasenille/',
      join: 'https://liity.ratsastus.fi',
      fees: 'https://www.gumbolenratsastajat.fi/jasenille/jasenlajit-ja-hinnasto/',
      memberRoom: 'https://oma.ratsastus.fi',
      benefits: 'https://www.gumbolenratsastajat.fi/jasenille/srl-jasenedut-sporttiturva-vakuutus/',
      licences: 'https://www.gumbolenratsastajat.fi/jasenille/kilpailuluvat/',
      licenceApply: 'https://www.ratsastus.fi/kilpailu-ja-valmennus/kilpailijalle/kilpailuluvat/hae-kilpailulupaa/',
      rules: 'https://www.ratsastus.fi/materiaalit/kilpailusaannot/',
      grants: 'https://www.gumbolenratsastajat.fi/jasenille/kilpailulupa-avustukset-2025/',
      shelter: 'https://www.gumbolenratsastajat.fi/jasenille/katoksen-vuokraus/',
      trails: 'https://www.gumbolenratsastajat.fi/jasenille/pohjois-espoon-ratsastuspolut/',
      trailsAssociation: 'http://www.ratsastuspolut.fi/',
      feedback: 'https://www.gumbolenratsastajat.fi/jasenille/jatkuva-palaute/',
      saferSpace: 'https://www.gumbolenratsastajat.fi/seura/turvallisemman-tilan-periaatteet/',
      safety: 'https://www.gumbolenratsastajat.fi/seura/turvallisuusasiakirja/',
      pixem: 'https://www.gumbolenratsastajat.fi/jasenille/pixem-kuvausrobotti/',
      facebook: 'https://www.facebook.com/Gumbolenratsastajat/',
    },
  },
} as const;
