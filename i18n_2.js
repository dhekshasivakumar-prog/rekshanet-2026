
const LANGUAGES = {
  en: { name: 'English', flag: '🇬🇧' },
  hi: { name: 'हिन्दी', flag: '🇮🇳' },
  mr: { name: 'मराठी', flag: '🚩' },
  ta: { name: 'தமிழ்', flag: '🇮🇳' },
  te: { name: 'తెలుగు', flag: '🇮🇳' },
  bn: { name: 'বাংলা', flag: '🇮🇳' },
  gu: { name: 'ગુજરાતી', flag: '🇮🇳' },
  kn: { name: 'ಕನ್ನಡ', flag: '🇮🇳' },
  ml: { name: 'മലയാളം', flag: '🇮🇳' },
  pa: { name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' }
};

const TRANSLATIONS = {
  en: {
    appName: 'RakshaNet', live: 'LIVE 2.0', login: 'Login', openApp: 'Open App',
    hero1: 'Disaster', hero2: 'response', hero3: 'in seconds.',
    heroDesc: 'Detection → Coordination → Communication → Resource → Assessment. One live mesh that spots flood, quake, cyclone, wildfire, landslide & heatwave, alerts citizens in 10 languages.',
    launchDash: 'Launch Dashboard →', howItWorks: 'How it works',
    hazards: 'Hazards Covered', latency: 'Alert Latency', langs: 'Languages',
    fiveAgents: 'Five agents, one mission', ready: 'Ready to simulate any disaster?',
    readyDesc: 'Admin dashboard can trigger flood, earthquake, cyclone, wildfire, landslide, heatwave live.',
    goAdmin: 'Go to Admin →',
    detection: 'Detection', coordination: 'Coordination', communication: 'Communication', resource: 'Resource', assessment: 'Assessment',
    detectionDesc: 'Fuses river, seismic, weather, fire sensors. All-hazard.',
    coordDesc: 'Verifies, scores severity, creates incident.',
    commDesc: 'EN/HI/MR/TA/TE/BN... alerts via app, SMS, siren.',
    resDesc: 'Nearest shelters + NDRF auto-dispatch.',
    assessDesc: 'Damage scoring & relief priority.',
    safeMode: 'SAFE MODE', citizen: 'Citizen Safety', adminTitle: 'District Command',
    liveMap: 'Live Safety Map', nearest: 'Nearest Safe Places', history: 'Alert History',
    tips: 'Safety Tips', checkin: "I'm Safe Check-in", yourName: 'Your name', send: 'Send ✓',
    open: 'Shelter Open', hazard: 'Hazard Zone', team: 'NDRF Team',
    pipeline: 'AGENT PIPELINE', simulate: 'SIMULATE DISASTER',
    flood: '🌊 Flood', quake: '🌋 Quake', cyclone: '🌀 Cyclone', wildfire: '🔥 Wildfire', landslide: '⛰️ Landslide', heatwave: '☀️ Heatwave',
    reset: 'Reset Demo', logs: 'LIVE LOGS', incident: 'CURRENT INCIDENT', shelters: 'SHELTERS & SAFE ZONES',
    teams: 'RELIEF TEAMS', checkins: 'CITIZEN CHECK-INS', damage: 'DAMAGE ASSESSMENT',
    noIncident: 'No active incident. Trigger simulation.', awaiting: 'Awaiting assessment...',
    secure: 'Secure access to RakshaNet', secureDesc: 'Citizen Safety App and District Command. Demo credentials prefilled.',
    role: 'Role', username: 'Username', password: 'Password', cont: 'Continue →', back: '← Back to landing',
    incidents: 'INCIDENTS', sheltersOpen: 'SHELTERS OPEN', teamsLabel: 'TEAMS'
  },
  hi: {
    appName: 'रक्षा-नेट', live: 'लाइव 2.0', login: 'लॉगिन', openApp: 'ऐप खोलें',
    hero1: 'आपदा', hero2: 'प्रतिक्रिया', hero3: 'सेकंड में।',
    heroDesc: 'पहचान → समन्वय → संचार → संसाधन → मूल्यांकन। बाढ़, भूकंप, चक्रवात, जंगल आग का पता, 10 भाषाओं में अलर्ट।',
    launchDash: 'डैशबोर्ड शुरू करें →', howItWorks: 'कैसे काम करता है',
    hazards: 'खतरे', latency: 'अलर्ट गति', langs: 'भाषाएँ',
    fiveAgents: 'पाँच एजेंट, एक मिशन', ready: 'किसी भी आपदा का अनुकरण तैयार?', readyDesc: 'एडमिन डैशबोर्ड लाइव आपदा ट्रिगर कर सकता है।', goAdmin: 'एडमिन पर जाएं →',
    detection: 'पहचान', coordination: 'समन्वय', communication: 'संचार', resource: 'संसाधन', assessment: 'मूल्यांकन',
    detectionDesc: 'नदी, भूकंप, मौसम सेंसर। सभी आपदा।', coordDesc: 'सत्यापित, गंभीरता स्कोर।', commDesc: '10 भाषाओं में अलर्ट।', resDesc: 'निकटतम आश्रय + NDRF।', assessDesc: 'नुकसान स्कोरिंग।',
    safeMode: 'सुरक्षित मोड', citizen: 'नागरिक सुरक्षा', adminTitle: 'जिला कमान',
    liveMap: 'लाइव सुरक्षा मानचित्र', nearest: 'निकटतम सुरक्षित स्थान', history: 'अलर्ट इतिहास',
    tips: 'सुरक्षा टिप्स', checkin: 'मैं सुरक्षित हूँ', yourName: 'आपका नाम', send: 'भेजें ✓',
    open: 'आश्रय खुला', hazard: 'खतरा क्षेत्र', team: 'NDRF टीम',
    pipeline: 'एजेंट पाइपलाइन', simulate: 'आपदा अनुकरण', flood: '🌊 बाढ़', quake: '🌋 भूकंप', cyclone: '🌀 चक्रवात', wildfire: '🔥 जंगल आग', landslide: '⛰️ भूस्खलन', heatwave: '☀️ लू',
    reset: 'रीसेट', logs: 'लाइव लॉग', incident: 'वर्तमान घटना', shelters: 'आश्रय', teams: 'राहत दल', checkins: 'नागरिक चेक-इन', damage: 'नुकसान मूल्यांकन',
    noIncident: 'कोई सक्रिय घटना नहीं।', awaiting: 'मूल्यांकन प्रतीक्षा...',
    secure: 'रक्षा-नेट सुरक्षित पहुँच', secureDesc: 'नागरिक सुरक्षा ऐप और जिला कमान।', role: 'भूमिका', username: 'उपयोगकर्ता नाम', password: 'पासवर्ड', cont: 'जारी रखें →', back: '← वापस',
    incidents: 'घटनाएं', sheltersOpen: 'खुले आश्रय', teamsLabel: 'दल'
  },
  mr: {
    appName: 'रक्षा-नेट', live: 'लाइव्ह 2.0', login: 'लॉगिन', openApp: 'अॅप उघडा',
    hero1: 'आपत्ती', hero2: 'प्रतिसाद', hero3: 'सेकंदात.',
    heroDesc: 'ओळख → समन्वय → संवाद → संसाधन → मूल्यमापन. पूर, भूकंप, वादळ शोध, 10 भाषांमध्ये अलर्ट.',
    launchDash: 'डॅशबोर्ड लाँच करा →', howItWorks: 'कसे कार्य करते',
    hazards: 'धोके', latency: 'अलर्ट वेग', langs: 'भाषा',
    fiveAgents: 'पाच एजंट, एक मिशन', ready: 'आपत्ती अनुकरण तयार?', readyDesc: 'अॅडमिन डॅशबोर्ड लाइव्ह ट्रिगर करू शकतो.', goAdmin: 'अॅडमिनकडे जा →',
    detection: 'ओळख', coordination: 'समन्वय', communication: 'संवाद', resource: 'संसाधन', assessment: 'मूल्यमापन',
    detectionDesc: 'नदी, भूकंप सेन्सर.', coordDesc: 'सत्यापित, स्कोअर.', commDesc: '10 भाषांमध्ये अलर्ट.', resDesc: 'जवळील निवारा + NDRF.', assessDesc: 'नुकसान मूल्यमापन.',
    safeMode: 'सुरक्षित मोड', citizen: 'नागरिक सुरक्षा', adminTitle: 'जिल्हा कमान',
    liveMap: 'लाइव्ह सुरक्षा नकाशा', nearest: 'जवळील सुरक्षित ठिकाणे', history: 'अलर्ट इतिहास',
    tips: 'सुरक्षा टिपा', checkin: 'मी सुरक्षित आहे', yourName: 'तुमचे नाव', send: 'पाठवा ✓',
    open: 'निवारा उघडा', hazard: 'धोका क्षेत्र', team: 'NDRF टीम',
    pipeline: 'एजंट पाइपलाइन', simulate: 'आपत्ती अनुकरण', flood: '🌊 पूर', quake: '🌋 भूकंप', cyclone: '🌀 वादळ', wildfire: '🔥 वणवा', landslide: '⛰️ दरड', heatwave: '☀️ उष्णता',
    reset: 'रीसेट', logs: 'लाइव्ह लॉग', incident: 'सद्य घटना', shelters: 'निवारे', teams: 'मदत पथके', checkins: 'नागरिक चेक-इन', damage: 'नुकसान मूल्यांकन',
    noIncident: 'कोणतीही सक्रिय घटना नाही.', awaiting: 'मूल्यांकन प्रतीक्षा...',
    secure: 'सुरक्षित प्रवेश', secureDesc: 'नागरिक सुरक्षा अॅप.', role: 'भूमिका', username: 'वापरकर्तानाव', password: 'पासवर्ड', cont: 'पुढे →', back: '← मागे',
    incidents: 'घटना', sheltersOpen: 'उघडे निवारे', teamsLabel: 'पथके'
  },
  ta: {
    appName: 'ரக்ஷா-நெட்', live: 'நேரலை 2.0', login: 'உள்நுழை', openApp: 'செயலியைத் திற',
    hero1: 'பேரிடர்', hero2: 'பதில்', hero3: 'வினாடிகளில்.',
    heroDesc: 'கண்டறிதல் → ஒருங்கிணைப்பு → தொடர்பு → வளம் → மதிப்பீடு. 10 மொழிகளில் எச்சரிக்கை.',
    launchDash: 'டாஷ்போர்டை தொடங்கு →', howItWorks: 'எப்படி வேலை செய்கிறது',
    hazards: 'அபாயங்கள்', latency: 'எச்சரிக்கை வேகம்', langs: 'மொழிகள்',
    fiveAgents: 'ஐந்து முகவர்கள், ஒரு பணி', ready: 'பேரிடர் உருவகப்படுத்த தயாரா?', readyDesc: 'நிர்வாக டாஷ்போர்டு நேரலை தூண்டும்.', goAdmin: 'நிர்வாகத்திற்கு செல் →',
    detection: 'கண்டறிதல்', coordination: 'ஒருங்கிணைப்பு', communication: 'தொடர்பு', resource: 'வளம்', assessment: 'மதிப்பீடு',
    detectionDesc: 'ஆறு, நிலநடுக்க சென்சார்.', coordDesc: 'சரிபார்த்து ஸ்கோர்.', commDesc: '10 மொழிகளில் எச்சரிக்கை.', resDesc: 'அருகிலுள்ள தங்குமிடம்.', assessDesc: 'சேத மதிப்பீடு.',
    safeMode: 'பாதுகாப்பு முறை', citizen: 'குடிமகன் பாதுகாப்பு', adminTitle: 'மாவட்ட கட்டளை',
    liveMap: 'நேரடி பாதுகாப்பு வரைபடம்', nearest: 'அருகிலுள்ள பாதுகாப்பான இடங்கள்', history: 'எச்சரிக்கை வரலாறு',
    tips: 'பாதுகாப்பு குறிப்புகள்', checkin: 'நான் பாதுகாப்பாக இருக்கிறேன்', yourName: 'உங்கள் பெயர்', send: 'அனுப்பு ✓',
    open: 'தங்குமிடம் திறப்பு', hazard: 'அபாய மண்டலம்', team: 'NDRF குழு',
    pipeline: 'முகவர் பைப்லைன்', simulate: 'பேரிடர் உருவகம்', flood: '🌊 வெள்ளம்', quake: '🌋 நிலநடுக்கம்', cyclone: '🌀 சூறாவளி', wildfire: '🔥 காட்டுத்தீ', landslide: '⛰️ நிலச்சரிவு', heatwave: '☀️ வெப்ப அலை',
    reset: 'மீட்டமை', logs: 'நேரலை பதிவுகள்', incident: 'தற்போதைய சம்பவம்', shelters: 'தங்குமிடங்கள்', teams: 'நிவாரண குழுக்கள்', checkins: 'குடிமகன் செக்-இன்', damage: 'சேத மதிப்பீடு',
    noIncident: 'செயலில் சம்பவம் இல்லை.', awaiting: 'மதிப்பீடு காத்திருக்கிறது...',
    secure: 'பாதுகாப்பான அணுகல்', secureDesc: 'குடிமகன் பாதுகாப்பு செயலி.', role: 'பங்கு', username: 'பயனர்பெயர்', password: 'கடவுச்சொல்', cont: 'தொடரவும் →', back: '← பின்',
    incidents: 'சம்பவங்கள்', sheltersOpen: 'திறந்த தங்குமிடங்கள்', teamsLabel: 'குழுக்கள்'
  },
  te: { appName: 'రక్షా-నెట్', live: 'లైవ్ 2.0', login: 'లాగిన్', openApp: 'యాప్ తెరవండి', hero1: 'విపత్తు', hero2: 'స్పందన', hero3: 'సెకన్లలో.', heroDesc: '10 భాషలలో హెచ్చరికలు.', launchDash: 'డాష్‌బోర్డ్ ప్రారంభించు →', howItWorks: 'ఎలా పని చేస్తుంది', hazards: 'ప్రమాదాలు', latency: 'హెచ్చరిక వేగం', langs: 'భాషలు', fiveAgents: 'ఐదు ఏజెంట్లు, ఒక మిషన్', ready: 'విపత్తు అనుకరణకు సిద్ధమా?', goAdmin: 'అడ్మిన్‌కు వెళ్లు →', detection: 'గుర్తింపు', coordination: 'సమన్వయం', communication: 'కమ్యూనికేషన్', resource: 'వనరు', assessment: 'అంచనా', safeMode: 'సేఫ్ మోడ్', liveMap: 'లైవ్ భద్రతా మ్యాప్', nearest: 'సమీప సురక్షిత ప్రదేశాలు', history: 'హెచ్చరిక చరిత్ర', tips: 'భద్రతా చిట్కాలు', checkin: 'నేను సురక్షితంగా ఉన్నాను', yourName: 'మీ పేరు', send: 'పంపు ✓', open: 'ఆశ్రయం తెరిచి ఉంది', hazard: 'ప్రమాద జోన్', pipeline: 'ఏజెంట్ పైప్‌లైన్', simulate: 'విపత్తు అనుకరణ', flood: '🌊 వరద', quake: '🌋 భూకంపం', cyclone: '🌀 తుఫాను', wildfire: '🔥 అడవి మంట', landslide: '⛰️ కొండచరియ', heatwave: '☀️ వడగాడ్పు', reset: 'రీసెట్', logs: 'లైవ్ లాగ్స్', incident: 'ప్రస్తుత సంఘటన', shelters: 'ఆశ్రయాలు', teams: 'సహాయ బృందాలు', checkins: 'చెక్-ఇన్‌లు', damage: 'నష్ట అంచనా', noIncident: 'క్రియాశీల సంఘటన లేదు.', awaiting: 'అంచనా కోసం వేచి ఉంది...', secure: 'సురక్షిత ప్రాప్యత', role: 'పాత్ర', username: 'వినియోగదారు పేరు', password: 'పాస్‌వర్డ్', cont: 'కొనసాగించు →', back: '← వెనుకకు', incidents: 'సంఘటనలు', sheltersOpen: 'తెరిచిన ఆశ్రయాలు', teamsLabel: 'బృందాలు', citizen: 'పౌర భద్రత', adminTitle: 'జిల్లా కమాండ్' },
  bn: { appName: 'রক্ষা-নেট', live: 'লাইভ 2.0', login: 'লগইন', openApp: 'অ্যাপ খুলুন', hero1: 'দুর্যোগ', hero2: 'প্রতিক্রিয়া', hero3: 'সেকেন্ডে।', heroDesc: '10 ভাষায় সতর্কতা।', launchDash: 'ড্যাশবোর্ড চালু করুন →', howItWorks: 'কিভাবে কাজ করে', hazards: 'বিপদ', latency: 'সতর্কতা গতি', langs: 'ভাষা', fiveAgents: 'পাঁচ এজেন্ট, এক মিশন', ready: 'দুর্যোগ অনুকরণ প্রস্তুত?', goAdmin: 'অ্যাডমিনে যান →', detection: 'সনাক্তকরণ', coordination: 'সমন্বয়', communication: 'যোগাযোগ', resource: 'সম্পদ', assessment: 'মূল্যায়ন', safeMode: 'নিরাপদ মোড', liveMap: 'লাইভ নিরাপত্তা মানচিত্র', nearest: 'নিকটতম নিরাপদ স্থান', history: 'সতর্কতা ইতিহাস', tips: 'নিরাপত্তা টিপস', checkin: 'আমি নিরাপদ', yourName: 'আপনার নাম', send: 'পাঠান ✓', open: 'আশ্রয় খোলা', hazard: 'বিপদ অঞ্চল', pipeline: 'এজেন্ট পাইপলাইন', simulate: 'দুর্যোগ অনুকরণ', flood: '🌊 বন্যা', quake: '🌋 ভূমিকম্প', cyclone: '🌀 ঘূর্ণিঝড়', wildfire: '🔥 দাবানল', landslide: '⛰️ ভূমিধস', heatwave: '☀️ তাপপ্রবাহ', reset: 'রিসেট', logs: 'লাইভ লগ', incident: 'বর্তমান ঘটনা', shelters: 'আশ্রয়', teams: 'ত্রাণ দল', checkins: 'চেক-ইন', damage: 'ক্ষতি মূল্যায়ন', noIncident: 'কোন সক্রিয় ঘটনা নেই।', awaiting: 'মূল্যায়ন অপেক্ষায়...', secure: 'নিরাপদ অ্যাক্সেস', role: 'ভূমিকা', username: 'ব্যবহারকারীর নাম', password: 'পাসওয়ার্ড', cont: 'চালিয়ে যান →', back: '← পিছনে', incidents: 'ঘটনা', sheltersOpen: 'খোলা আশ্রয়', teamsLabel: 'দল', citizen: 'নাগরিক নিরাপত্তা', adminTitle: 'জেলা কমান্ড' },
  gu: { appName: 'રક્ષા-નેટ', live: 'લાઇવ 2.0', login: 'લોગિન', openApp: 'એપ ખોલો', hero1: 'આપત્તિ', hero2: 'પ્રતિભાવ', hero3: 'સેકન્ડમાં.', heroDesc: '10 ભાષામાં ચેતવણી.', launchDash: 'ડેશબોર્ડ લોન્ચ કરો →', howItWorks: 'કેવી રીતે કામ કરે છે', hazards: 'જોખમો', latency: 'ચેતવણી ઝડપ', langs: 'ભાષાઓ', fiveAgents: 'પાંચ એજન્ટ, એક મિશન', ready: 'આપત્તિ સિમ્યુલેશન તૈયાર?', goAdmin: 'એડમિન પર જાઓ →', detection: 'શોધ', coordination: 'સંકલન', communication: 'સંચાર', resource: 'સંસાધન', assessment: 'મૂલ્યાંકન', safeMode: 'સુરક્ષિત મોડ', liveMap: 'લાઇવ સુરક્ષા નકશો', nearest: 'નજીકના સલામત સ્થળો', history: 'ચેતવણી ઇતિહાસ', tips: 'સુરક્ષા ટિપ્સ', checkin: 'હું સુરક્ષિત છું', yourName: 'તમારું નામ', send: 'મોકલો ✓', open: 'આશ્રય ખુલ્લો', hazard: 'જોખમ ઝોન', pipeline: 'એજન્ટ પાઇપલાઇન', simulate: 'આપત્તિ સિમ્યુલેશન', flood: '🌊 પૂર', quake: '🌋 ભૂકંપ', cyclone: '🌀 ચક્રવાત', wildfire: '🔥 જંગલ આગ', landslide: '⛰️ ભૂસ્ખલન', heatwave: '☀️ હીટવેવ', reset: 'રીસેટ', logs: 'લાઇવ લોગ્સ', incident: 'વર્તમાન ઘટના', shelters: 'આશ્રયસ્થાનો', teams: 'રાહત ટીમો', checkins: 'ચેક-ઇન', damage: 'નુકસાન આકારણી', noIncident: 'કોઈ સક્રિય ઘટના નથી.', awaiting: 'આકારણીની રાહ...', secure: 'સુરક્ષિત પ્રવેશ', role: 'ભૂમિકા', username: 'વપરાશકર્તા નામ', password: 'પાસવર્ડ', cont: 'ચાલુ રાખો →', back: '← પાછળ', incidents: 'ઘટનાઓ', sheltersOpen: 'ખુલ્લા આશ્રયો', teamsLabel: 'ટીમો', citizen: 'નાગરિક સુરક્ષા', adminTitle: 'જિલ્લા કમાન્ડ' },
  kn: { appName: 'ರಕ್ಷಾ-ನೆಟ್', live: 'ಲೈವ್ 2.0', login: 'ಲಾಗಿನ್', openApp: 'ಅಪ್ಲಿಕೇಶನ್ ತೆರೆಯಿರಿ', hero1: 'ವಿಪತ್ತು', hero2: 'ಪ್ರತಿಕ್ರಿಯೆ', hero3: 'ಸೆಕೆಂಡುಗಳಲ್ಲಿ.', heroDesc: '10 ಭಾಷೆಗಳಲ್ಲಿ ಎಚ್ಚರಿಕೆ.', launchDash: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಪ್ರಾರಂಭಿಸಿ →', howItWorks: 'ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ', hazards: 'ಅಪಾಯಗಳು', latency: 'ಎಚ್ಚರಿಕೆ ವೇಗ', langs: 'ಭಾಷೆಗಳು', fiveAgents: 'ಐದು ಏಜೆಂಟ್, ಒಂದು ಮಿಷನ್', ready: 'ವಿಪತ್ತು ಅನುಕರಣೆಗೆ ಸಿದ್ಧ?', goAdmin: 'ಅಡ್ಮಿನ್‌ಗೆ ಹೋಗಿ →', detection: 'ಪತ್ತೆ', coordination: 'ಸಮನ್ವಯ', communication: 'ಸಂವಹನ', resource: 'ಸಂಪನ್ಮೂಲ', assessment: 'ಮೌಲ್ಯಮಾಪನ', safeMode: 'ಸುರಕ್ಷಿತ ಮೋಡ್', liveMap: 'ಲೈವ್ ಸುರಕ್ಷತಾ ನಕ್ಷೆ', nearest: 'ಹತ್ತಿರದ ಸುರಕ್ಷಿತ ಸ್ಥಳಗಳು', history: 'ಎಚ್ಚರಿಕೆ ಇತಿಹಾಸ', tips: 'ಸುರಕ್ಷತಾ ಸಲಹೆಗಳು', checkin: 'ನಾನು ಸುರಕ್ಷಿತವಾಗಿದ್ದೇನೆ', yourName: 'ನಿಮ್ಮ ಹೆಸರು', send: 'ಕಳುಹಿಸಿ ✓', open: 'ಆಶ್ರಯ ತೆರೆದಿದೆ', hazard: 'ಅಪಾಯ ವಲಯ', pipeline: 'ಏಜೆಂಟ್ ಪೈಪ್‌ಲೈನ್', simulate: 'ವಿಪತ್ತು ಅನುಕರಣೆ', flood: '🌊 ಪ್ರವಾಹ', quake: '🌋 ಭೂಕಂಪ', cyclone: '🌀 ಚಂಡಮಾರುತ', wildfire: '🔥 ಕಾಡ್ಗಿಚ್ಚು', landslide: '⛰️ ಭೂಕುಸಿತ', heatwave: '☀️ ಶಾಖದ ಅಲೆ', reset: 'ಮರುಹೊಂದಿಸಿ', logs: 'ಲೈವ್ ಲಾಗ್‌ಗಳು', incident: 'ಪ್ರಸ್ತುತ ಘಟನೆ', shelters: 'ಆಶ್ರಯಗಳು', teams: 'ಪರಿಹಾರ ತಂಡಗಳು', checkins: 'ಚೆಕ್-ಇನ್', damage: 'ಹಾನಿ ಮೌಲ್ಯಮಾಪನ', noIncident: 'ಯಾವುದೇ ಸಕ್ರಿಯ ಘಟನೆ ಇಲ್ಲ.', awaiting: 'ಮೌಲ್ಯಮಾಪನಕ್ಕಾಗಿ ಕಾಯಲಾಗುತ್ತಿದೆ...', secure: 'ಸುರಕ್ಷಿತ ಪ್ರವೇಶ', role: 'ಪಾತ್ರ', username: 'ಬಳಕೆದಾರ ಹೆಸರು', password: 'ಪಾಸ್‌ವರ್ಡ್', cont: 'ಮುಂದುವರಿಸಿ →', back: '← ಹಿಂದೆ', incidents: 'ಘಟನೆಗಳು', sheltersOpen: 'ತೆರೆದ ಆಶ್ರಯಗಳು', teamsLabel: 'ತಂಡಗಳು', citizen: 'ನಾಗರಿಕ ಸುರಕ್ಷತೆ', adminTitle: 'ಜಿಲ್ಲಾ ಆಜ್ಞೆ' },
  ml: { appName: 'രക്ഷാ-നെറ്റ്', live: 'ലൈവ് 2.0', login: 'ലോഗിൻ', openApp: 'ആപ്പ് തുറക്കുക', hero1: 'ദുരന്തം', hero2: 'പ്രതികരണം', hero3: 'സെക്കൻഡുകളിൽ.', heroDesc: '10 ഭാഷകളിൽ മുന്നറിയിപ്പ്.', launchDash: 'ഡാഷ്‌ബോർഡ് ആരംഭിക്കുക →', howItWorks: 'എങ്ങനെ പ്രവർത്തിക്കുന്നു', hazards: 'അപകടങ്ങൾ', latency: 'മുന്നറിയിപ്പ് വേഗത', langs: 'ഭാഷകൾ', fiveAgents: 'അഞ്ച് ഏജന്റുമാർ, ഒരു ദൗത്യം', ready: 'ദുരന്ത സിമുലേഷന് തയ്യാറാണോ?', goAdmin: 'അഡ്മിനിലേക്ക് പോകുക →', detection: 'കണ്ടെത്തൽ', coordination: 'ഏകോപനം', communication: 'ആശയവിനിമയം', resource: 'വിഭവം', assessment: 'വിലയിരുത്തൽ', safeMode: 'സുരക്ഷിത മോഡ്', liveMap: 'ലൈവ് സുരക്ഷാ മാപ്പ്', nearest: 'അടുത്തുള്ള സുരക്ഷിത സ്ഥലങ്ങൾ', history: 'മുന്നറിയിപ്പ് ചരിത്രം', tips: 'സുരക്ഷാ നുറുങ്ങുകൾ', checkin: 'ഞാൻ സുരക്ഷിതനാണ്', yourName: 'നിങ്ങളുടെ പേര്', send: 'അയയ്ക്കുക ✓', open: 'അഭയകേന്ദ്രം തുറന്നിരിക്കുന്നു', hazard: 'അപകട മേഖല', pipeline: 'ഏജന്റ് പൈപ്പ്‌ലൈൻ', simulate: 'ദുരന്ത സിമുലേഷൻ', flood: '🌊 പ്രളയം', quake: '🌋 ഭൂകമ്പം', cyclone: '🌀 ചുഴലിക്കാറ്റ്', wildfire: '🔥 കാട്ടുതീ', landslide: '⛰️ മണ്ണിടിച്ചിൽ', heatwave: '☀️ ഉഷ്ണതരംഗം', reset: 'റീസെറ്റ്', logs: 'ലൈവ് ലോഗുകൾ', incident: 'നിലവിലെ സംഭവം', shelters: 'അഭയകേന്ദ്രങ്ങൾ', teams: 'ദുരിതാശ്വാസ ടീമുകൾ', checkins: 'ചെക്ക്-ഇൻ', damage: 'നാശനഷ്ട വിലയിരുത്തൽ', noIncident: 'സജീവ സംഭവമൊന്നുമില്ല.', awaiting: 'വിലയിരുത്തലിനായി കാത്തിരിക്കുന്നു...', secure: 'സുരക്ഷിത ആക്‌സസ്', role: 'റോൾ', username: 'ഉപയോക്തൃനാമം', password: 'പാസ്‌വേഡ്', cont: 'തുടരുക →', back: '← പിന്നിലേക്ക്', incidents: 'സംഭവങ്ങൾ', sheltersOpen: 'തുറന്ന അഭയകേന്ദ്രങ്ങൾ', teamsLabel: 'ടീമുകൾ', citizen: 'പൗര സുരക്ഷ', adminTitle: 'ജില്ലാ കമാൻഡ്' },
  pa: { appName: 'ਰਕਸ਼ਾ-ਨੈੱਟ', live: 'ਲਾਈਵ 2.0', login: 'ਲੌਗਇਨ', openApp: 'ਐਪ ਖੋਲ੍ਹੋ', hero1: 'ਆਫ਼ਤ', hero2: 'ਜਵਾਬ', hero3: 'ਸਕਿੰਟਾਂ ਵਿੱਚ.', heroDesc: '10 ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਚੇਤਾਵਨੀ।', launchDash: 'ਡੈਸ਼ਬੋਰਡ ਲਾਂਚ ਕਰੋ →', howItWorks: 'ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ', hazards: 'ਖ਼ਤਰੇ', latency: 'ਚੇਤਾਵਨੀ ਗਤੀ', langs: 'ਭਾਸ਼ਾਵਾਂ', fiveAgents: 'ਪੰਜ ਏਜੰਟ, ਇੱਕ ਮਿਸ਼ਨ', ready: 'ਆਫ਼ਤ ਸਿਮੂਲੇਸ਼ਨ ਤਿਆਰ?', goAdmin: 'ਐਡਮਿਨ ਤੇ ਜਾਓ →', detection: 'ਖੋਜ', coordination: 'ਤਾਲਮੇਲ', communication: 'ਸੰਚਾਰ', resource: 'ਸਰੋਤ', assessment: 'ਮੁਲਾਂਕਣ', safeMode: 'ਸੁਰੱਖਿਅਤ ਮੋਡ', liveMap: 'ਲਾਈਵ ਸੁਰੱਖਿਆ ਨਕਸ਼ਾ', nearest: 'ਨੇੜਲੇ ਸੁਰੱਖਿਅਤ ਸਥਾਨ', history: 'ਚੇਤਾਵਨੀ ਇਤਿਹਾਸ', tips: 'ਸੁਰੱਖਿਆ ਸੁਝਾਅ', checkin: 'ਮੈਂ ਸੁਰੱਖਿਅਤ ਹਾਂ', yourName: 'ਤੁਹਾਡਾ ਨਾਮ', send: 'ਭੇਜੋ ✓', open: 'ਆਸਰਾ ਖੁੱਲ੍ਹਾ', hazard: 'ਖ਼ਤਰਾ ਜ਼ੋਨ', pipeline: 'ਏਜੰਟ ਪਾਈਪਲਾਈਨ', simulate: 'ਆਫ਼ਤ ਸਿਮੂਲੇਸ਼ਨ', flood: '🌊 ਹੜ੍ਹ', quake: '🌋 ਭੂਚਾਲ', cyclone: '🌀 ਚੱਕਰਵਾਤ', wildfire: '🔥 ਜੰਗਲੀ ਅੱਗ', landslide: '⛰️ ਜ਼ਮੀਨ ਖਿਸਕਣਾ', heatwave: '☀️ ਹੀਟਵੇਵ', reset: 'ਰੀਸੈੱਟ', logs: 'ਲਾਈਵ ਲੌਗ', incident: 'ਮੌਜੂਦਾ ਘਟਨਾ', shelters: 'ਆਸਰਾ', teams: 'ਰਾਹਤ ਟੀਮਾਂ', checkins: 'ਚੈੱਕ-ਇਨ', damage: 'ਨੁਕਸਾਨ ਮੁਲਾਂਕਣ', noIncident: 'ਕੋਈ ਕਿਰਿਆਸ਼ੀਲ ਘਟਨਾ ਨਹੀਂ।', awaiting: 'ਮੁਲਾਂਕਣ ਦੀ ਉਡੀਕ...', secure: 'ਸੁਰੱਖਿਅਤ ਪਹੁੰਚ', role: 'ਭੂਮਿਕਾ', username: 'ਯੂਜ਼ਰਨੇਮ', password: 'ਪਾਸਵਰਡ', cont: 'ਜਾਰੀ ਰੱਖੋ →', back: '← ਪਿੱਛੇ', incidents: 'ਘਟਨਾਵਾਂ', sheltersOpen: 'ਖੁੱਲ੍ਹੇ ਆਸਰੇ', teamsLabel: 'ਟੀਮਾਂ', citizen: 'ਨਾਗਰਿਕ ਸੁਰੱਖਿਆ', adminTitle: 'ਜ਼ਿਲ੍ਹਾ ਕਮਾਂਡ' }
};

let currentLang = localStorage.getItem('rakshanet_lang') || 'en';

function t(key) {
  const pack = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  return pack[key] || TRANSLATIONS.en[key] || key;
}

function setLang(lang) {
  if(!LANGUAGES[lang]) return;
  currentLang = lang;
  localStorage.setItem('rakshanet_lang', lang);
  document.documentElement.lang = lang;
  applyTranslations();
  const sel = document.getElementById('globalLangSelect');
  if(sel) sel.value = lang;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = val;
    else el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
}

function createLangSelector() {
  const sel = document.createElement('select');
  sel.id = 'globalLangSelect';
  sel.className = 'text-xs border rounded-full px-3 py-1.5 bg-white text-black font-semibold shadow-sm cursor-pointer';
  sel.innerHTML = Object.entries(LANGUAGES).map(([code,info])=>`<option value="${code}" ${code===currentLang?'selected':''}>${info.flag} ${info.name}</option>`).join('');
  sel.onchange = (e)=> setLang(e.target.value);
  return sel;
}

function injectLangSelectors() {
  document.querySelectorAll('#langContainer').forEach(container=>{
    container.innerHTML = '';
    container.appendChild(createLangSelector());
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  injectLangSelectors();
  applyTranslations();
  // re-apply when socket updates inject new HTML? use mutation observer
  const obs = new MutationObserver(()=>applyTranslations());
  obs.observe(document.body, {childList:true, subtree:true});
});

window.setLang = setLang;
window.t = t;
