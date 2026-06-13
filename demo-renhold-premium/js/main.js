/* ============================================================
   VASK & RO - PREMIUM - main.js
   Vanilla, dependency-free. i18n active (NO/EN), all motion on.
   Motion/calculator/form helpers are t()-free + currentLang-free
   so the classic tier can wrap ONLY the i18n block.
   ============================================================ */
(function () {

  var REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var INSTANT = false; /* premium animates the calculator count-up */

  /* =========================================================
     TRANSLATIONS  (premium: active - classic wraps this block)
     ========================================================= */
  var translations = {
    no: {
      'nav.home': 'Hjem', 'nav.services': 'Tjenester', 'nav.prices': 'Priser',
      'nav.eco': 'Miljø', 'nav.about': 'Om oss', 'nav.contact': 'Kontakt', 'nav.cta': 'Be om tilbud',

      'hero.eyebrow': 'Renhold i Trondheim · Miljømerket',
      'hero.pre': 'Vi gjør rent',
      'hero.lead': 'Profesjonelt renhold for hjem og kontor. Trygt, grundig og med miljøvennlige midler. Fast team, forsikret, og priser du ser på forhånd.',
      'hero.cta1': 'Be om tilbud', 'hero.cta2': 'Ring 73 00 00 00',
      'hero.badge.count': '600+ hjem', 'hero.badge.rating': '★ 4,9 av 5',
      'hero.img.alt': 'Renholder vasker vindu i et lyst, nyvasket hjem',

      'trust.insured': 'Forsikret & godkjent',
      'trust.eco': 'Svanemerket-vennlig',
      'trust.team': 'Fast, kjent team',
      'trust.rating': 'snitt', 'trust.homes': 'hjem', 'trust.years': 'i Trondheim',

      'home.svc.head': 'Tjenester for hjem og bedrift',
      'home.svc.sub': 'Fra ukentlig hjemmevask til flyttevask og kontorrenhold, vi tilpasser oss ditt behov.',
      'home.svc.all': 'Se alle tjenester',

      'svc.home.title': 'Hjemmevask', 'svc.home.desc': 'Fast eller ved behov: kjøkken, bad, støvtørk og gulv.', 'svc.home.from': 'fra 449 kr/gang',
      'svc.window.title': 'Vinduspuss', 'svc.window.desc': 'Strimefritt innvendig og utvendig, også vanskelige vinduer.', 'svc.window.from': 'fra 690 kr',
      'svc.move.title': 'Hytte- & flyttevask', 'svc.move.desc': 'Grundig nedvask med overtakelsesgaranti.', 'svc.move.from': 'fra 2 490 kr',
      'svc.office.title': 'Kontorrenhold', 'svc.office.desc': 'Avtaler for kontor og næring, kvelds- eller dagtid.', 'svc.office.from': 'tilbud',

      'ba.eyebrow': 'Før / Etter',
      'ba.head': 'Se forskjellen',
      'ba.sub': 'Hold pekeren over (eller trykk) for å se resultatet. Ekte renhold, ikke retusjert markedsføring.',
      'ba.sub.classic': 'Ekte resultater fra hjem vi har vasket, før og etter, side om side.',
      'ba.room.kitchen': 'Kjøkken', 'ba.room.bath': 'Bad',
      'ba.tag.before': 'FØR', 'ba.tag.after': 'ETTER', 'ba.hint': 'hold for etter →',

      'calc.head': 'Hva koster det? Regn det ut.',
      'calc.sub': 'Dra på kvadratmeter, velg hvor ofte, så ser du prisen med en gang. Ingen overraskelser.',
      'calc.size': 'Størrelse:', 'calc.freq': 'Hvor ofte?',
      'calc.freq.once': 'Engangs', 'calc.freq.rec': 'Fast (hver 2. uke)',
      'calc.addons': 'Tillegg',
      'calc.addon.window': 'Vinduer +250', 'calc.addon.oven': 'Stekeovn +200', 'calc.addon.fridge': 'Kjøleskap +150',
      'calc.price.label': 'Din pris', 'calc.rabatt': '−20 % fast-rabatt',
      'calc.fineprint': 'Veiledende estimat. Endelig pris bekreftes ved befaring.', 'calc.cta': 'Book befaring',

      'eco.badge': 'Miljømerket renhold',
      'eco.head': 'Det du puster inn betyr noe',
      'eco.body': 'Vi bruker svanemerkede, parfymefrie midler, trygt for barn, dyr og allergikere. Like rent, uten ett eneste kjemikalie for mye.',
      'eco.li1': 'Parfyme- og allergenfrie midler',
      'eco.li2': 'Mikrofiber som rengjør med mindre kjemi',
      'eco.li3': 'Resirkulerbar emballasje og doseringskontroll',
      'eco.img.alt': 'Miljøvennlige rengjøringsprodukter med eukalyptus og sitron',

      'testi.quote': 'Samme team hver gang, alltid grundige, og hjemmet lukter rent uten parfyme. Vi merker forskjellen på allergien.',
      'testi.cite': 'Marit H. · Byåsen',

      'cta.head': 'Klar for et renere hjem?',
      'cta.body': 'Be om et uforpliktende tilbud, eller ring oss. Vi finner en tid som passer, ofte allerede denne uka.',
      'cta.btn1': 'Be om tilbud', 'cta.btn2': 'Ring 73 00 00 00',

      'footer.tagline': 'Miljømerket renhold for hjem og bedrift i Trondheim. Fast team, forsikret, og priser du ser på forhånd.',
      'footer.address': 'Innherredsveien 24, 7014 Trondheim',
      'footer.links.head': 'Sider', 'footer.contact.head': 'Kontakt',
      'footer.response': 'Vi svarer vanligvis innen 24 timer',
      'footer.dev': 'Utviklet av Bithun', 'footer.copyright': '© 2026 Vask & Ro',
      'footer.privacy': 'Personvern',

      /* tjenester */
      'tj.eyebrow': 'Tjenester',
      'tj.head': 'Renhold tilpasset ditt behov',
      'tj.sub': 'Faste avtaler eller engangsoppdrag, for hjem, hytte og næring. Alt utføres av et fast, forsikret team med miljømerkede midler.',
      'tj.incl1': 'Inkluderer:',
      'svc.home.dur': 'Ca. 2–4 timer', 'svc.window.dur': 'Ca. 1–3 timer',
      'svc.move.dur': 'Halv til hel dag', 'svc.office.dur': 'Etter avtale',
      'svc.home.cta': 'Bestill hjemmevask', 'svc.window.cta': 'Bestill vinduspuss',
      'svc.move.cta': 'Bestill flyttevask', 'svc.office.cta': 'Be om tilbud',
      'svc.home.i1': 'Kjøkken, bad og alle rom', 'svc.home.i2': 'Støvtørk, gulv og overflater', 'svc.home.i3': 'Egne kluter per rom, ingen smitte',
      'svc.window.i1': 'Innvendig og utvendig', 'svc.window.i2': 'Karmer og rammer tørkes', 'svc.window.i3': 'Strimefritt resultat',
      'svc.move.i1': 'Skap, skuffer og hvitevarer', 'svc.move.i2': 'Overtakelsesgaranti', 'svc.move.i3': 'Klar for visning eller innflytting',
      'svc.office.i1': 'Fast renholdsplan', 'svc.office.i2': 'Kveld eller dag, du velger', 'svc.office.i3': 'Egen kontaktperson',

      'tj.process.head': 'Slik jobber vi',
      'tj.process.sub': 'Enkelt fra første kontakt til skinnende resultat.',
      'step1.title': 'Befaring & tilbud', 'step1.desc': 'Vi kartlegger behovet og gir en tydelig, fast pris, uten skjulte kostnader.',
      'step2.title': 'Fast team', 'step2.desc': 'De samme renholderne kommer hver gang, og kjenner hjemmet ditt.',
      'step3.title': 'Skinnende resultat', 'step3.desc': 'Miljømerkede midler, grundig utført, og en kvalitetssjekk hver gang.',

      /* om-oss */
      'om.eyebrow': 'Om oss',
      'om.head': 'Et renere hjem, med god samvittighet',
      'om.sub': 'Vask & Ro er et lokalt renholdsbyrå i Trondheim med ett mål: renhold som er trygt å puste inn.',
      'om.story.head': 'Historien vår',
      'om.story.p1': 'Ingrid Solheim startet Vask & Ro i 2020, etter ti år i bransjen og en enkel idé: renhold skal være grundig, ærlig og trygt, også for dem som bor med allergi.',
      'om.story.p2': 'I dag er vi et fast team på tolv som kjenner hjemmene vi steller og kundene som bor i dem. Vi bruker bare miljømerkede midler, og vi tror på faste folk framfor stadig nye ansikter.',
      'om.story.sig': 'Ingrid Solheim, daglig leder',
      'om.story.img.alt': 'Ingrid Solheim, daglig leder i Vask & Ro',
      'cert.head': 'Sertifiseringer & trygghet',
      'cert.sub': 'Dokumentert kvalitet du kan stole på.',
      'cert1.title': 'Svanemerket-vennlig', 'cert1.desc': 'Kun miljømerkede, parfymefrie midler.',
      'cert2.title': 'Forsikret', 'cert2.desc': 'Fullt ansvarsforsikret for hvert oppdrag.',
      'cert3.title': 'Renholdsverk-godkjent', 'cert3.desc': 'Registrert og godkjent renholdsvirksomhet.',
      'cert4.title': 'Fast team', 'cert4.desc': 'Faste, kvalitetssikrede renholdere.',
      'team.head': 'Folkene som kommer hjem til deg',
      'team.sub': 'Faste fjes du blir kjent med, ikke et nytt vikarbyrå hver uke.',
      'team.role.leader': 'Daglig leder', 'team.role.team': 'Teamleder', 'team.role.cleaner': 'Renholder', 'team.role.window': 'Vindusspesialist',

      'equip.head': 'Vårt utstyr',
      'equip.sub': 'Profesjonelt, godt vedlikeholdt utstyr og miljømerkede midler, klart for hvert oppdrag.',
      'equip.vacuum': 'Støvsuger med HEPA-filter', 'equip.steam': 'Damprenser', 'equip.floor': 'Gulvpolerer',
      'equip.mop': 'Mopp og bøtte', 'equip.cloths': 'Mikrofiberkluter', 'equip.spray': 'Miljømerkede midler', 'equip.squeegee': 'Vindusnal og utstyr', 'equip.cart': 'Rengjøringstralle',

      /* kontakt */
      'kt.eyebrow': 'Kontakt',
      'kt.head': 'Be om tilbud eller book en befaring',
      'kt.sub': 'Fortell oss litt om hjemmet eller lokalet ditt, så tar vi kontakt, som regel innen 24 timer.',
      'form.name': 'Navn', 'form.email': 'E-post', 'form.phone': 'Telefon', 'form.service': 'Tjeneste', 'form.message': 'Melding',
      'form.service.placeholder': 'Velg tjeneste',
      'form.name.ph': 'Ola Nordmann', 'form.email.ph': 'din@epost.no', 'form.phone.ph': '400 00 000',
      'form.message.ph': 'Fortell oss om størrelse, antall rom og hvor ofte du ønsker renhold.',
      'form.cta': 'Send forespørsel',
      'form.success': 'Takk! Forespørselen er mottatt (demo). Vi tar kontakt innen 24 timer.',
      'form.err.name': 'Fyll inn navn.', 'form.err.email': 'Fyll inn en gyldig e-post.', 'form.err.service': 'Velg en tjeneste.',

      'phone.eyebrow': 'Ring oss',
      'phone.head': 'Vil du heller ringe?',
      'phone.body': 'Vi svarer gjerne på telefon og finner en tid sammen. Bekreftelse samme dag, ofte ledig allerede denne uka.',
      'phone.cta1': 'Ring 73 00 00 00', 'phone.cta2': 'Send e-post',
      'phone.note': 'Man–fre 07–18 · lør 09–14',

      'deposit.eyebrow': 'Reserver med depositum',
      'deposit.head': 'Sikre tiden din',
      'deposit.body': 'Betal et depositum på 500 kr for å reservere oppdraget. Beløpet trekkes fra sluttsummen når jobben er ferdig.',
      'deposit.field.service': 'Tjeneste', 'deposit.field.name': 'Navn', 'deposit.field.date': 'Ønsket dato',
      'deposit.service.placeholder': 'Velg tjeneste',
      'deposit.amount.label': 'Depositum', 'deposit.cta': 'Betal', 'deposit.confirm': 'Depositum 500 kr, bekreftes ved betaling',

      'contact.details.head': 'Kontaktinformasjon',
      'contact.hours.head': 'Åpningstider',
      'contact.hours.body': 'Man–fre 07–18\nLør 09–14\nSøn stengt',
      'contact.area.head': 'Vi dekker',
      'contact.area.body': 'Trondheim og omegn: Byåsen, Lade, Heimdal, Ranheim og sentrum.',

      /* stripe modal */
      'stripe.title': 'Betal depositum',
      'stripe.payingFor': 'Depositum for',
      'stripe.email': 'E-post', 'stripe.card': 'Kortnummer', 'stripe.cardHint': 'Testkort: 4242 4242 4242 4242',
      'stripe.exp': 'Utløp', 'stripe.cvc': 'CVC',
      'stripe.error': 'Fyll inn en gyldig e-post og et kortnummer.',
      'stripe.pay': 'Betal',
      'stripe.demoNote': 'Dette er en demo. Stripe-betaling aktiveres når din Stripe-konto er koblet til.',
      'stripe.success.title': 'Betaling fullført · demo',
      'stripe.receipt.booking': 'Booking-ID', 'stripe.receipt.service': 'Tjeneste',
      'stripe.receipt.amount': 'Depositum betalt', 'stripe.receipt.date': 'Bekreftet',
      'stripe.success.body': 'Vi har sendt en bekreftelse på e-post. Velkommen til Vask & Ro!',
      'stripe.success.close': 'Ferdig',

      /* 404 */
      'nf.title': 'Denne siden er allerede vasket bort',
      'nf.sub': 'Vi finner ikke siden du leter etter, men vi finner alltid flekken på gulvet.',
      'nf.cta': 'Tilbake til forsiden'
    },
    en: {
      'nav.home': 'Home', 'nav.services': 'Services', 'nav.prices': 'Prices',
      'nav.eco': 'Eco', 'nav.about': 'About', 'nav.contact': 'Contact', 'nav.cta': 'Get a quote',

      'hero.eyebrow': 'Cleaning in Trondheim · Eco-certified',
      'hero.pre': 'We clean',
      'hero.lead': 'Professional cleaning for homes and offices. Safe, thorough, and with eco-friendly products. A fixed team, fully insured, and prices you see upfront.',
      'hero.cta1': 'Get a quote', 'hero.cta2': 'Call 73 00 00 00',
      'hero.badge.count': '600+ homes', 'hero.badge.rating': '★ 4.9 of 5',
      'hero.img.alt': 'A cleaner washing a window in a bright, freshly cleaned home',

      'trust.insured': 'Insured & approved',
      'trust.eco': 'Eco-label friendly',
      'trust.team': 'Fixed, familiar team',
      'trust.rating': 'average', 'trust.homes': 'homes', 'trust.years': 'in Trondheim',

      'home.svc.head': 'Services for home and business',
      'home.svc.sub': 'From weekly home cleaning to move-out and office cleaning, we adapt to your needs.',
      'home.svc.all': 'See all services',

      'svc.home.title': 'Home cleaning', 'svc.home.desc': 'Regular or as needed: kitchen, bath, dusting and floors.', 'svc.home.from': 'from 449 kr/visit',
      'svc.window.title': 'Window cleaning', 'svc.window.desc': 'Streak-free inside and out, even tricky windows.', 'svc.window.from': 'from 690 kr',
      'svc.move.title': 'Cabin & move-out', 'svc.move.desc': 'Thorough deep-clean with a handover guarantee.', 'svc.move.from': 'from 2,490 kr',
      'svc.office.title': 'Office cleaning', 'svc.office.desc': 'Agreements for offices and businesses, evening or day.', 'svc.office.from': 'quote',

      'ba.eyebrow': 'Before / After',
      'ba.head': 'See the difference',
      'ba.sub': 'Hover (or tap) to reveal the result. Real cleaning, not retouched marketing.',
      'ba.sub.classic': 'Real results from homes we have cleaned, before and after, side by side.',
      'ba.room.kitchen': 'Kitchen', 'ba.room.bath': 'Bathroom',
      'ba.tag.before': 'BEFORE', 'ba.tag.after': 'AFTER', 'ba.hint': 'hold for after →',

      'calc.head': 'What does it cost? Work it out.',
      'calc.sub': 'Drag the square metres, pick how often, and see the price instantly. No surprises.',
      'calc.size': 'Size:', 'calc.freq': 'How often?',
      'calc.freq.once': 'One-off', 'calc.freq.rec': 'Recurring (every 2 weeks)',
      'calc.addons': 'Add-ons',
      'calc.addon.window': 'Windows +250', 'calc.addon.oven': 'Oven +200', 'calc.addon.fridge': 'Fridge +150',
      'calc.price.label': 'Your price', 'calc.rabatt': '−20% recurring discount',
      'calc.fineprint': 'Guide estimate. Final price confirmed at the survey.', 'calc.cta': 'Book a survey',

      'eco.badge': 'Eco-certified cleaning',
      'eco.head': 'What you breathe in matters',
      'eco.body': 'We use eco-labelled, fragrance-free products, safe for children, pets and allergy sufferers. Just as clean, without a single chemical too many.',
      'eco.li1': 'Fragrance- and allergen-free products',
      'eco.li2': 'Microfibre that cleans with less chemistry',
      'eco.li3': 'Recyclable packaging and dosage control',
      'eco.img.alt': 'Eco-friendly cleaning products with eucalyptus and lemon',

      'testi.quote': 'The same team every time, always thorough, and the home smells clean without any fragrance. We notice the difference for our allergies.',
      'testi.cite': 'Marit H. · Byåsen',

      'cta.head': 'Ready for a cleaner home?',
      'cta.body': 'Ask for a no-obligation quote, or call us. We will find a time that suits, often this very week.',
      'cta.btn1': 'Get a quote', 'cta.btn2': 'Call 73 00 00 00',

      'footer.tagline': 'Eco-certified cleaning for homes and businesses in Trondheim. A fixed team, insured, and prices you see upfront.',
      'footer.address': 'Innherredsveien 24, 7014 Trondheim',
      'footer.links.head': 'Pages', 'footer.contact.head': 'Contact',
      'footer.response': 'We usually reply within 24 hours',
      'footer.dev': 'Developed by Bithun', 'footer.copyright': '© 2026 Vask & Ro',
      'footer.privacy': 'Privacy',

      'tj.eyebrow': 'Services',
      'tj.head': 'Cleaning tailored to your needs',
      'tj.sub': 'Regular agreements or one-off jobs, for homes, cabins and businesses. All carried out by a fixed, insured team with eco-labelled products.',
      'tj.incl1': 'Includes:',
      'svc.home.dur': 'Approx. 2–4 hours', 'svc.window.dur': 'Approx. 1–3 hours',
      'svc.move.dur': 'Half to full day', 'svc.office.dur': 'By agreement',
      'svc.home.cta': 'Book home cleaning', 'svc.window.cta': 'Book window cleaning',
      'svc.move.cta': 'Book move-out clean', 'svc.office.cta': 'Get a quote',
      'svc.home.i1': 'Kitchen, bath and all rooms', 'svc.home.i2': 'Dusting, floors and surfaces', 'svc.home.i3': 'Dedicated cloths per room, no cross-contamination',
      'svc.window.i1': 'Inside and outside', 'svc.window.i2': 'Frames and sills wiped', 'svc.window.i3': 'Streak-free result',
      'svc.move.i1': 'Cupboards, drawers and appliances', 'svc.move.i2': 'Handover guarantee', 'svc.move.i3': 'Ready for viewing or move-in',
      'svc.office.i1': 'Fixed cleaning schedule', 'svc.office.i2': 'Evening or day, you choose', 'svc.office.i3': 'Your own contact person',

      'tj.process.head': 'How we work',
      'tj.process.sub': 'Simple from first contact to a sparkling result.',
      'step1.title': 'Survey & quote', 'step1.desc': 'We map the need and give a clear, fixed price, with no hidden costs.',
      'step2.title': 'Fixed team', 'step2.desc': 'The same cleaners come every time and know your home.',
      'step3.title': 'Sparkling result', 'step3.desc': 'Eco-labelled products, thorough work, and a quality check every time.',

      'om.eyebrow': 'About us',
      'om.head': 'A cleaner home, with a clear conscience',
      'om.sub': 'Vask & Ro is a local cleaning company in Trondheim with one goal: cleaning that is safe to breathe in.',
      'om.story.head': 'Our story',
      'om.story.p1': 'Ingrid Solheim founded Vask & Ro in 2020, after ten years in the trade and one simple idea: cleaning should be thorough, honest and safe, also for those who live with allergies.',
      'om.story.p2': 'Today we are a fixed team of twelve who know the homes we care for and the people who live in them. We use only eco-labelled products, and we believe in familiar faces rather than ever-changing ones.',
      'om.story.sig': 'Ingrid Solheim, managing director',
      'om.story.img.alt': 'Ingrid Solheim, managing director of Vask & Ro',
      'cert.head': 'Certifications & assurance',
      'cert.sub': 'Documented quality you can rely on.',
      'cert1.title': 'Eco-label friendly', 'cert1.desc': 'Only eco-labelled, fragrance-free products.',
      'cert2.title': 'Insured', 'cert2.desc': 'Fully liability-insured for every job.',
      'cert3.title': 'Approved cleaner', 'cert3.desc': 'Registered and approved cleaning business.',
      'cert4.title': 'Fixed team', 'cert4.desc': 'Permanent, quality-assured cleaners.',
      'team.head': 'The people who come to your home',
      'team.sub': 'Familiar faces you get to know, not a new agency every week.',
      'team.role.leader': 'Managing director', 'team.role.team': 'Team lead', 'team.role.cleaner': 'Cleaner', 'team.role.window': 'Window specialist',

      'equip.head': 'Our equipment',
      'equip.sub': 'Professional, well-maintained equipment and eco-labelled products, ready for every job.',
      'equip.vacuum': 'HEPA-filter vacuum', 'equip.steam': 'Steam cleaner', 'equip.floor': 'Floor polisher',
      'equip.mop': 'Mop and bucket', 'equip.cloths': 'Microfibre cloths', 'equip.spray': 'Eco-labelled products', 'equip.squeegee': 'Squeegee & window kit', 'equip.cart': 'Cleaning trolley',

      'kt.eyebrow': 'Contact',
      'kt.head': 'Get a quote or book a survey',
      'kt.sub': 'Tell us a little about your home or premises and we will be in touch, usually within 24 hours.',
      'form.name': 'Name', 'form.email': 'Email', 'form.phone': 'Phone', 'form.service': 'Service', 'form.message': 'Message',
      'form.service.placeholder': 'Choose a service',
      'form.name.ph': 'Jane Doe', 'form.email.ph': 'you@email.com', 'form.phone.ph': '400 00 000',
      'form.message.ph': 'Tell us about the size, number of rooms and how often you want cleaning.',
      'form.cta': 'Send request',
      'form.success': 'Thank you! Your request has been received (demo). We will be in touch within 24 hours.',
      'form.err.name': 'Please enter your name.', 'form.err.email': 'Please enter a valid email.', 'form.err.service': 'Please choose a service.',

      'phone.eyebrow': 'Call us',
      'phone.head': 'Would you rather call?',
      'phone.body': 'We are happy to talk on the phone and find a time together. Same-day confirmation, often available this very week.',
      'phone.cta1': 'Call 73 00 00 00', 'phone.cta2': 'Send email',
      'phone.note': 'Mon–Fri 07–18 · Sat 09–14',

      'deposit.eyebrow': 'Reserve with a deposit',
      'deposit.head': 'Secure your time',
      'deposit.body': 'Pay a 500 kr deposit to reserve the job. The amount is deducted from the final total when the work is done.',
      'deposit.field.service': 'Service', 'deposit.field.name': 'Name', 'deposit.field.date': 'Preferred date',
      'deposit.service.placeholder': 'Choose a service',
      'deposit.amount.label': 'Deposit', 'deposit.cta': 'Pay', 'deposit.confirm': 'Deposit 500 kr, confirmed on payment',

      'contact.details.head': 'Contact information',
      'contact.hours.head': 'Opening hours',
      'contact.hours.body': 'Mon–Fri 07–18\nSat 09–14\nSun closed',
      'contact.area.head': 'We cover',
      'contact.area.body': 'Trondheim and surroundings: Byåsen, Lade, Heimdal, Ranheim and the city centre.',

      'stripe.title': 'Pay deposit',
      'stripe.payingFor': 'Deposit for',
      'stripe.email': 'Email', 'stripe.card': 'Card number', 'stripe.cardHint': 'Test card: 4242 4242 4242 4242',
      'stripe.exp': 'Expiry', 'stripe.cvc': 'CVC',
      'stripe.error': 'Enter a valid email and a card number.',
      'stripe.pay': 'Pay',
      'stripe.demoNote': 'This is a demo. Stripe payment is activated when your Stripe account is connected.',
      'stripe.success.title': 'Payment complete · demo',
      'stripe.receipt.booking': 'Booking ID', 'stripe.receipt.service': 'Service',
      'stripe.receipt.amount': 'Deposit paid', 'stripe.receipt.date': 'Confirmed',
      'stripe.success.body': 'We have sent a confirmation by email. Welcome to Vask & Ro!',
      'stripe.success.close': 'Done',

      'nf.title': 'This page has already been cleaned away',
      'nf.sub': 'We can’t find the page you’re looking for, but we always find the spot on the floor.',
      'nf.cta': 'Back to home'
    }
  };

  var currentLang = localStorage.getItem('renhold-lang') || 'no';

  function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) ||
           (translations.no && translations.no[key]) || key;
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (val === key) return;                 /* missing key - keep existing HTML, never paint the raw key */
      if (el.tagName === 'IMG') el.alt = val;
      else if (el.hasAttribute('placeholder')) el.placeholder = val;
      else if (el.hasAttribute('data-i18n-html')) el.innerHTML = val;
      else el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-ph'); var v = t(k);
      if (v !== k) el.placeholder = v;
    });
    document.documentElement.lang = (currentLang === 'en') ? 'en' : 'nb';
    window.__lang = currentLang;
    window.__baBefore = t('ba.tag.before'); window.__baAfter = t('ba.tag.after');
    document.querySelectorAll('.lang-toggle').forEach(function (lt) { lt.setAttribute('data-lang', currentLang); });
  }

  function toggleLanguage() {
    currentLang = (currentLang === 'no') ? 'en' : 'no';
    localStorage.setItem('renhold-lang', currentLang);
    applyTranslations();
    if (typeof window.__twRestart === 'function') window.__twRestart();
    if (typeof window.__calcRefresh === 'function') window.__calcRefresh();
  }

  function initLangToggle() {
    document.querySelectorAll('.lang-toggle').forEach(function (lt) {
      lt.addEventListener('click', toggleLanguage);
    });
  }

  /* =========================================================
     NAV - scroll shadow + mobile menu + active state
     ========================================================= */
  function initNav() {
    var nav = document.querySelector('.nav');
    if (nav) window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });

    var burger = document.getElementById('hamburger');
    var menu = document.getElementById('mobile-menu');
    if (burger && menu) {
      function close() { menu.classList.remove('open'); burger.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
      burger.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = menu.classList.toggle('open');
        burger.classList.toggle('open', open);
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
      document.addEventListener('click', function (e) {
        if (!menu.classList.contains('open')) return;
        if (menu.contains(e.target) || burger.contains(e.target)) return;
        close();
      });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menu.classList.contains('open')) close(); });
    }

    var here = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href === here || (here === '' && href === 'index.html')) a.classList.add('active');
    });
  }

  /* =========================================================
     SCROLL REVEAL
     ========================================================= */
  function initScrollReveal() {
    if (REDUCE) { document.querySelectorAll('[data-reveal]').forEach(function (el) { el.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: .15 });
    document.querySelectorAll('[data-reveal]').forEach(function (el) { io.observe(el); });
  }

  /* =========================================================
     HERO ROTATING-HIGHLIGHT TYPEWRITER (lang-aware, restartable)
     ========================================================= */
  function initTypewriter() {
    var rot = document.getElementById('rot');
    if (!rot) return;
    var NO = ['så hjemmet ditt skinner', 'så du får tid til familien', 'med miljømerkede midler', 'som er trygt å puste inn'];
    var EN = ['so your home shines', 'so you get time for family', 'with eco-certified products', 'that is safe to breathe'];
    var phrases = (window.__lang === 'en') ? EN : NO;
    var pi = 0, ci = 0, del = false, gen = 0;

    function tick(my) {
      if (my !== gen) return;
      var w = phrases[pi];
      rot.textContent = del ? w.slice(0, ci - 1) : w.slice(0, ci + 1);
      if (!del && ci < w.length) { ci++; setTimeout(function () { tick(my); }, 55); }
      else if (!del && ci === w.length) { del = true; setTimeout(function () { tick(my); }, 1700); }
      else if (del && ci > 0) { ci--; setTimeout(function () { tick(my); }, 30); }
      else { del = false; pi = (pi + 1) % phrases.length; setTimeout(function () { tick(my); }, 280); }
    }
    function start() {
      phrases = (window.__lang === 'en') ? EN : NO;
      gen++; pi = 0; ci = 0; del = false;
      var my = gen;
      rot.textContent = phrases[0];           /* first phrase visible immediately (LCP-safe) */
      if (!REDUCE) setTimeout(function () { ci = phrases[0].length; del = true; tick(my); }, 1700);
    }
    window.__twRestart = start;
    if (REDUCE) { rot.textContent = phrases[0]; return; }
    start();
  }

  /* =========================================================
     ATMOSPHERIC CROSSFADE BACKDROP (premium)
     ========================================================= */
  function initFixedBackdrop() {
    var stage = document.querySelector('.bg-stage');
    if (!stage) return;
    var layers = [stage.querySelector('.bg-a'), stage.querySelector('.bg-b')];
    if (!layers[0] || !layers[1]) return;
    var first = document.querySelector('[data-bg]');
    var cur = 0, curSrc = first ? first.getAttribute('data-bg') : '';
    if (curSrc) { layers[0].style.backgroundImage = "url('" + curSrc + "')"; layers[0].classList.add('is-active'); }
    if (REDUCE) return;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var src = e.target.getAttribute('data-bg');
        if (src && src !== curSrc) {
          var nx = cur ^ 1;
          layers[nx].style.backgroundImage = "url('" + src + "')";
          layers[nx].classList.add('is-active');
          layers[cur].classList.remove('is-active');
          cur = nx; curSrc = src;
        }
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
    document.querySelectorAll('[data-bg]').forEach(function (s) { io.observe(s); });
  }

  /* =========================================================
     PRICE-BY-AREA CALCULATOR
     ========================================================= */
  function initCalculator() {
    var kvm = document.getElementById('kvm');
    if (!kvm) return;
    var kvmv = document.getElementById('kvmv'),
        total = document.getElementById('total'),
        unit = document.getElementById('unit'),
        rabatt = document.getElementById('rabatt'),
        freq = document.getElementById('freq'),
        addons = document.getElementById('addons');
    var mode = 'once', shown = parseInt(total.textContent, 10) || 0;
    var UNIT = {
      once: { no: 'per gang', en: 'per visit' },
      rec: { no: 'per gang · hver 2. uke', en: 'per visit · every 2 weeks' }
    };

    function fillTrack() { var p = (kvm.value - kvm.min) / (kvm.max - kvm.min) * 100; kvm.style.setProperty('--fill', p + '%'); }
    function addonSum() { var s = 0; addons.querySelectorAll('.chip').forEach(function (c) { if (c.getAttribute('aria-pressed') === 'true') s += parseInt(c.dataset.add, 10); }); return s; }
    function compute() { return Math.round((+kvm.value * 3.2 + 290 + addonSum()) * (mode === 'rec' ? 0.8 : 1)); }
    function countTo(target) {
      if (INSTANT || REDUCE) { total.textContent = target; shown = target; return; }
      var start = shown, t0 = null;
      function step(ts) { if (!t0) t0 = ts; var p = Math.min((ts - t0) / 350, 1); total.textContent = Math.round(start + (target - start) * p); if (p < 1) requestAnimationFrame(step); else shown = target; }
      requestAnimationFrame(step);
    }
    function refresh() {
      var lang = (window.__lang === 'en') ? 'en' : 'no';
      kvmv.textContent = kvm.value;
      fillTrack();
      countTo(compute());
      unit.textContent = UNIT[mode][lang];
      rabatt.classList.toggle('show', mode === 'rec');
    }
    window.__calcRefresh = refresh;
    kvm.addEventListener('input', refresh);
    if (freq) freq.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      mode = b.dataset.f;
      freq.querySelectorAll('button').forEach(function (x) { x.classList.toggle('on', x === b); });
      refresh();
    });
    if (addons) addons.addEventListener('click', function (e) {
      var c = e.target.closest('.chip'); if (!c) return;
      c.setAttribute('aria-pressed', c.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
      refresh();
    });
    refresh();
  }

  /* =========================================================
     BEFORE / AFTER - touch twin + tag swap (premium crossfade)
     ========================================================= */
  function initBeforeAfter() {
    document.querySelectorAll('.ba-frame').forEach(function (frame) {
      var tag = frame.querySelector('.ba-tag');
      var before = frame.getAttribute('data-tag-before') || 'FØR';
      var after = frame.getAttribute('data-tag-after') || 'ETTER';
      function setTag(on) { if (tag) tag.textContent = on ? (window.__baAfter || after) : (window.__baBefore || before); }
      frame.addEventListener('mouseenter', function () { setTag(true); });
      frame.addEventListener('mouseleave', function () { if (!frame.classList.contains('is-tapped')) setTag(false); });
      frame.addEventListener('touchstart', function () { var on = frame.classList.toggle('is-tapped'); setTag(on); }, { passive: true });
    });
  }

  /* =========================================================
     CARD TAP HOVER - iOS .is-tapped twin (family rule #22)
     ========================================================= */
  function initCardTapHover() {
    var selector = '.cards .card, .service-list .service-row, .equip-grid .equip-card';
    var activeEl = null, timer = null;
    document.addEventListener('touchstart', function (e) {
      var card = e.target.closest(selector);
      if (!card) return;
      if (timer) clearTimeout(timer);
      if (activeEl && activeEl !== card) activeEl.classList.remove('is-tapped');
      card.classList.add('is-tapped');
      activeEl = card;
      timer = setTimeout(function () { card.classList.remove('is-tapped'); if (activeEl === card) activeEl = null; }, 1400);
    }, { passive: true });
  }

  /* =========================================================
     STRIPE DEMO DEPOSIT CHECKOUT (booking-led; flat 500 kr)
     ========================================================= */
  function initStripeCheckout() {
    var backdrop = document.getElementById('stripe-modal');
    if (!backdrop) return;
    var DEPOSIT_KR = 500;
    var serviceSel = document.getElementById('deposit-service');
    var dateInput = document.getElementById('deposit-date');
    var checkoutView = document.getElementById('stripe-checkout');
    var successView = document.getElementById('stripe-success');
    var form = document.getElementById('stripe-form');
    var errorEl = document.getElementById('stripe-error');

    function setText(id, v) { var el = document.getElementById(id); if (el) el.textContent = v; }
    function serviceLabel() {
      if (serviceSel && serviceSel.selectedIndex > 0) return serviceSel.options[serviceSel.selectedIndex].textContent;
      return serviceSel ? serviceSel.options[0].textContent : '';
    }
    function confirmedDate() {
      var d;
      if (dateInput && dateInput.value) d = new Date(dateInput.value + 'T09:00');
      else { d = new Date(); d.setDate(d.getDate() + 2); }
      var locale = (window.__lang === 'en') ? 'en-GB' : 'nb-NO';
      return d.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long' }) + ' · 09:00';
    }
    function open() {
      if (serviceSel && !serviceSel.value) { serviceSel.classList.add('field-error'); serviceSel.focus(); return; }
      if (serviceSel) serviceSel.classList.remove('field-error');
      if (errorEl) errorEl.hidden = true;
      checkoutView.hidden = false; successView.hidden = true;
      setText('stripe-service-name', serviceLabel());
      backdrop.classList.add('open'); document.body.style.overflow = 'hidden';
      var f = document.getElementById('stripe-email'); if (f) setTimeout(function () { f.focus(); }, 60);
    }
    function close() { backdrop.classList.remove('open'); document.body.style.overflow = ''; }
    function pay() {
      var email = (document.getElementById('stripe-email').value || '').trim();
      var card = (document.getElementById('stripe-card').value || '').replace(/\s+/g, '');
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !/^\d{12,19}$/.test(card)) { if (errorEl) errorEl.hidden = false; return; }
      if (errorEl) errorEl.hidden = true;
      setText('stripe-booking-id', 'VR-' + String(Date.now()).slice(-6));
      setText('stripe-receipt-service', serviceLabel());
      setText('stripe-receipt-amount', DEPOSIT_KR + ' kr');
      setText('stripe-receipt-date', confirmedDate());
      checkoutView.hidden = true; successView.hidden = false;
    }

    document.querySelectorAll('.stripe-trigger').forEach(function (b) { b.addEventListener('click', open); });
    if (form) form.addEventListener('submit', function (e) { e.preventDefault(); pay(); });
    backdrop.querySelectorAll('.modal-close-btn, .modal-x').forEach(function (b) { b.addEventListener('click', close); });
    backdrop.addEventListener('click', function (e) { if (e.target === backdrop) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && backdrop.classList.contains('open')) close(); });
    if (serviceSel) serviceSel.addEventListener('change', function () { serviceSel.classList.remove('field-error'); });

    /* service -> deposit pre-select via ?svc= or .book-trigger[data-svc] */
    function applySvc(svc) {
      if (svc && serviceSel && Array.prototype.some.call(serviceSel.options, function (o) { return o.value === svc; })) {
        serviceSel.value = svc; serviceSel.classList.remove('field-error');
      }
    }
    var svcParam = new URLSearchParams(window.location.search).get('svc');
    if (svcParam) applySvc(svcParam);
    document.querySelectorAll('.book-trigger').forEach(function (b) { b.addEventListener('click', function () { applySvc(b.getAttribute('data-svc')); }); });

    var cardEl = document.getElementById('stripe-card');
    if (cardEl) cardEl.addEventListener('input', function () {
      var d = cardEl.value.replace(/\D/g, '').slice(0, 19);
      cardEl.value = d.replace(/(.{4})/g, '$1 ').trim();
    });
  }

  /* =========================================================
     CONTACT FORM - inline validation + demo success
     ========================================================= */
  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;
    var success = document.getElementById('contact-success');
    var nameF = form.querySelector('[name=name]'),
        emailF = form.querySelector('[name=email]'),
        svcF = form.querySelector('[name=service]');

    /* pre-select service from ?svc= */
    var svcParam = new URLSearchParams(window.location.search).get('svc');
    if (svcParam && svcF && Array.prototype.some.call(svcF.options, function (o) { return o.value === svcParam; })) svcF.value = svcParam;

    function mark(field, ok) { var wrap = field.closest('.form-field'); if (wrap) wrap.classList.toggle('invalid', !ok); return ok; }
    function valid() {
      var ok = true;
      ok = mark(nameF, nameF.value.trim().length > 1) && ok;
      ok = mark(emailF, /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailF.value.trim())) && ok;
      if (svcF) ok = mark(svcF, !!svcF.value) && ok;
      return ok;
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!valid()) return;
      if (success) { success.classList.add('show'); success.scrollIntoView({ behavior: REDUCE ? 'auto' : 'smooth', block: 'center' }); }
      form.reset();
    });
    [nameF, emailF, svcF].forEach(function (f) { if (f) f.addEventListener('input', function () { var wrap = f.closest('.form-field'); if (wrap) wrap.classList.remove('invalid'); }); });
  }

  /* =========================================================
     INIT
     ========================================================= */
  document.addEventListener('DOMContentLoaded', function () {
    applyTranslations();
    initLangToggle();
    initNav();
    initScrollReveal();
    initTypewriter();
    initFixedBackdrop();
    initCalculator();
    initBeforeAfter();
    initCardTapHover();
    initStripeCheckout();
    initContactForm();
    var main = document.querySelector('main'); if (main) main.classList.add('page-fade');
  });

})();
