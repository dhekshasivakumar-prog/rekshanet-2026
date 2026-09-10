
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
    heroDesc: 'Detection → Coordination → Communication → Resource → Assessment. One live mesh that spots flood, quake, cyclone, wildfire, landslide & heatwave, alerts citizens in 10 languages, and routes to safe shelters.',
    launchDash: 'Launch Dashboard →', howItWorks: 'How it works',
    hazardsCovered: 'Hazards Covered', alertLatency: 'Alert Latency', languages: 'Languages',
    fiveAgents: 'Five agents, one mission', readySim: 'Ready to simulate any disaster?',
    adminDesc: 'Admin dashboard can trigger flood, earthquake, cyclone, wildfire, landslide, heatwave live.',
    goAdmin: 'Go to Admin →',
    detection: 'DETECTION', coordination: 'COORDINATION', communication: 'COMMUNICATION', resource: 'RESOURCE', assessment: 'ASSESSMENT',
    safeMode: 'SAFE MODE', citizen: 'Citizen', admin: 'Administrator',
    liveMap: 'Live Safety Map', nearestSafe: 'Nearest Safe Places', alertHistory: 'Alert History',
    safetyTips: 'Safety Tips', checkin: "I'm Safe Check-in", yourName: 'Your name', send: 'Send ✓',
    sheltersOpen: 'Shelter Open', hazardZone: 'Hazard Zone', team: 'NDRF Team',
    districtControl: 'DISTRICT CONTROL', agentPipeline: 'AGENT PIPELINE', simulate: 'SIMULATE DISASTER',
    flood: 'Flood', quake: 'Quake', cyclone: 'Cyclone', wildfire: 'Wildfire', landslide: 'Landslide', heatwave: 'Heatwave',
    reset: 'Reset Demo', liveLogs: 'LIVE LOGS', currentIncident: 'CURRENT INCIDENT', sheltersSafe: 'SHELTERS & SAFE ZONES',
    reliefTeams: 'RELIEF TEAMS', citizenCheckins: 'CITIZEN CHECK-INS', damage: 'DAMAGE ASSESSMENT'
  },
  hi: {
    appName: 'रक्षा-नेट', live: 'लाइव 2.0', login: 'लॉगिन', openApp: 'ऐप खोलें',
    hero1: 'आपदा', hero2: 'प्रतिक्रिया', hero3: 'सेकंड में।',
    heroDesc: 'पहचान → समन्वय → संचार → संसाधन → मूल्यांकन। एक लाइव सिस्टम जो बाढ़, भूकंप, चक्रवात, जंगल की आग का पता लगाता है, 10 भाषाओं में अलर्ट भेजता है।',
    launchDash: 'डैशबोर्ड शुरू करें →', howItWorks: 'कैसे काम करता है',
    hazardsCovered: 'खतरों का पता', alertLatency: 'अलर्ट गति', languages: 'भाषाएँ',
    fiveAgents: 'पाँच एजेंट, एक मिशन', readySim: 'किसी भी आपदा का अनुकरण करने के लिए तैयार?',
    adminDesc: 'एडमिन डैशबोर्ड बाढ़, भूकंप, चक्रवात, जंगल आग लाइव ट्रिगर कर सकता है।',
    goAdmin: 'एडमिन पर जाएं →',
    detection: 'पहचान', coordination: 'समन्वय', communication: 'संचार', resource: 'संसाधन', assessment: 'मूल्यांकन',
    safeMode: 'सुरक्षित मोड', citizen: 'नागरिक', admin: 'प्रशासक',
    liveMap: 'लाइव सुरक्षा मानचित्र', nearestSafe: 'निकटतम सुरक्षित स्थान', alertHistory: 'अलर्ट इतिहास',
    safetyTips: 'सुरक्षा टिप्स', checkin: 'मैं सुरक्षित हूँ', yourName: 'आपका नाम', send: 'भेजें ✓',
    sheltersOpen: 'आश्रय खुला', hazardZone: 'खतरा क्षेत्र', team: 'NDRF टीम',
    districtControl: 'जिला नियंत्रण', agentPipeline: 'एजेंट पाइपलाइन', simulate: 'आपदा अनुकरण',
    flood: 'बाढ़', quake: 'भूकंप', cyclone: 'चक्रवात', wildfire: 'जंगल आग', landslide: 'भूस्खलन', heatwave: 'लू',
    reset: 'रीसेट', liveLogs: 'लाइव लॉग', currentIncident: 'वर्तमान घटना', sheltersSafe: 'आश्रय और सुरक्षित क्षेत्र',
    reliefTeams: 'राहत दल', citizenCheckins: 'नागरिक चेक-इन', damage: 'नुकसान मूल्यांकन'
  },
  mr: {
    appName: 'रक्षा-नेट', live: 'लाइव्ह 2.0', login: 'लॉगिन', openApp: 'अॅप उघडा',
    hero1: 'आपत्ती', hero2: 'प्रतिसाद', hero3: 'सेकंदात.',
    heroDesc: 'ओळख → समन्वय → संवाद → संसाधन → मूल्यमापन. पूर, भूकंप, वादळ शोधणारी प्रणाली, 10 भाषांमध्ये अलर्ट.',
    launchDash: 'डॅशबोर्ड लाँच करा →', howItWorks: 'कसे कार्य करते',
    hazardsCovered: 'धोके', alertLatency: 'अलर्ट वेग', languages: 'भाषा',
    fiveAgents: 'पाच एजंट, एक मिशन', readySim: 'कोणत्याही आपत्तीचे अनुकरण करण्यास तयार?',
    adminDesc: 'अॅडमिन डॅशबोर्ड पूर, भूकंप, चक्रीवादळ लाइव्ह ट्रिगर करू शकतो.',
    goAdmin: 'अॅडमिनकडे जा →',
    detection: 'ओळख', coordination: 'समन्वय', communication: 'संवाद', resource: 'संसाधन', assessment: 'मूल्यांकन',
    safeMode: 'सुरक्षित मोड', citizen: 'नागरिक', admin: 'प्रशासक',
    liveMap: 'लाइव्ह सुरक्षा नकाशा', nearestSafe: 'जवळील सुरक्षित ठिकाणे', alertHistory: 'अलर्ट इतिहास',
    safetyTips: 'सुरक्षा टिपा', checkin: 'मी सुरक्षित आहे', yourName: 'तुमचे नाव', send: 'पाठवा ✓',
    sheltersOpen: 'निवारा उघडा', hazardZone: 'धोका क्षेत्र', team: 'NDRF टीम',
    districtControl: 'जिल्हा नियंत्रण', agentPipeline: 'एजंट पाइपलाइन', simulate: 'आपत्ती अनुकरण',
    flood: 'पूर', quake: 'भूकंप', cyclone: 'वादळ', wildfire: 'वणवा', landslide: 'दरड', heatwave: 'उष्णता',
    reset: 'रीसेट', liveLogs: 'लाइव्ह लॉग', currentIncident: 'सद्य घटना', sheltersSafe: 'निवारे',
    reliefTeams: 'मदत पथके', citizenCheckins: 'नागरिक चेक-इन', damage: 'नुकसान मूल्यांकन'
  },
  ta: {
    appName: 'ரக்ஷா-நெட்', live: 'நேரலை 2.0', login: 'உள்நுழை', openApp: 'செயலியைத் திற',
    hero1: 'பேரிடர்', hero2: 'பதில்', hero3: 'வினாடிகளில்.',
    heroDesc: 'கண்டறிதல் → ஒருங்கிணைப்பு → தொடர்பு → வளம் → மதிப்பீடு. வெள்ளம், நிலநடுக்கம் கண்டறியும் அமைப்பு.',
    launchDash: 'டாஷ்போர்டை தொடங்கு →', howItWorks: 'எப்படி வேலை செய்கிறது',
    hazardsCovered: 'அபாயங்கள்', alertLatency: 'எச்சரிக்கை வேகம்', languages: 'மொழிகள்',
    fiveAgents: 'ஐந்து முகவர்கள், ஒரு பணி', readySim: 'எந்த பேரிடரையும் உருவகப்படுத்த தயாரா?',
    goAdmin: 'நிர்வாகத்திற்கு செல் →', safeMode: 'பாதுகாப்பு முறை', liveMap: 'நேரடி பாதுகாப்பு வரைபடம்',
    nearestSafe: 'அருகிலுள்ள பாதுகாப்பான இடங்கள்', alertHistory: 'எச்சரிக்கை வரலாறு', checkin: 'நான் பாதுகாப்பாக இருக்கிறேன்',
    flood: 'வெள்ளம்', quake: 'நிலநடுக்கம்', cyclone: 'சூறாவளி', wildfire: 'காட்டுத்தீ', landslide: 'நிலச்சரிவு', heatwave: 'வெப்ப அலை'
  },
  te: { appName: 'రక్షా-నెట్', live: 'లైవ్ 2.0', login: 'లాగిన్', openApp: 'యాప్ తెరవండి', hero1: 'విపత్తు', hero2: 'స్పందన', hero3: 'సెకన్లలో.', flood: 'వరద', quake: 'భూకంపం', cyclone: 'తుఫాను', wildfire: 'అడవి మంట', landslide: 'కొండచరియ', heatwave: 'వడగాడ్పు', safeMode: 'సేఫ్ మోడ్', liveMap: 'లైవ్ భద్రతా మ్యాప్', nearestSafe: 'సమీప సురక్షిత ప్రదేశాలు' },
  bn: { appName: 'রক্ষা-নেট', live: 'লাইভ 2.0', login: 'লগইন', openApp: 'অ্যাপ খুলুন', hero1: 'দুর্যোগ', hero2: 'প্রতিক্রিয়া', hero3: 'সেকেন্ডে।', flood: 'বন্যা', quake: 'ভূমিকম্প', cyclone: 'ঘূর্ণিঝড়', wildfire: 'দাবানল', landslide: 'ভূমিধস', heatwave: 'তাপপ্রবাহ', safeMode: 'নিরাপদ মোড', liveMap: 'লাইভ নিরাপত্তা মানচিত্র' },
  gu: { appName: 'રક્ષા-નેટ', live: 'લાઇવ 2.0', login: 'લોગિન', openApp: 'એપ ખોલો', hero1: 'આપત્તિ', hero2: 'પ્રતિભાવ', hero3: 'સેકન્ડમાં.', flood: 'પૂર', quake: 'ભૂકંપ', cyclone: 'ચક્રવાત', wildfire: 'જંગલ આગ', landslide: 'ભૂસ્ખલન', heatwave: 'હીટવેવ', safeMode: 'સુરક્ષિત મોડ' },
  kn: { appName: 'ರಕ್ಷಾ-ನೆಟ್', live: 'ಲೈವ್ 2.0', flood: 'ಪ್ರವಾಹ', quake: 'ಭೂಕಂಪ', cyclone: 'ಚಂಡಮಾರುತ', wildfire: 'ಕಾಡ್ಗಿಚ್ಚು', landslide: 'ಭೂಕುಸಿತ', heatwave: 'ಶಾಖದ ಅಲೆ', safeMode: 'ಸುರಕ್ಷಿತ ಮೋಡ್' },
  ml: { appName: 'രക്ഷാ-നെറ്റ്', live: 'ലൈവ് 2.0', flood: 'പ്രളയം', quake: 'ഭൂകമ്പം', cyclone: 'ചുഴലിക്കാറ്റ്', wildfire: 'കാട്ടുതീ', landslide: 'മണ്ണിടിച്ചിൽ', heatwave: 'ഉഷ്ണതരംഗം', safeMode: 'സുരക്ഷിത മോഡ്' },
  pa: { appName: 'ਰਕਸ਼ਾ-ਨੈੱਟ', live: 'ਲਾਈਵ 2.0', flood: 'ਹੜ੍ਹ', quake: 'ਭੂਚਾਲ', cyclone: 'ਚੱਕਰਵਾਤ', wildfire: 'ਜੰਗਲੀ ਅੱਗ', landslide: 'ਜ਼ਮੀਨ ਖਿਸਕਣਾ', heatwave: 'ਹੀਟਵੇਵ', safeMode: 'ਸੁਰੱਖਿਅਤ ਮੋਡ' }
};

let currentLang = localStorage.getItem('rakshanet_lang') || 'en';

function t(key) {
  const langPack = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  return langPack[key] || TRANSLATIONS.en[key] || key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('rakshanet_lang', lang);
  document.documentElement.lang = lang;
  applyTranslations();
  // update selector
  document.querySelectorAll('.lang-select').forEach(s=>s.value=lang);
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });
}

function getLangSelectorHTML() {
  let opts = Object.entries(LANGUAGES).map(([code,info])=>`<option value="${code}" ${code===currentLang?'selected':''}>${info.flag} ${info.name}</option>`).join('');
  return `<select onchange="setLang(this.value)" class="lang-select text-xs border rounded-full px-3 py-1 bg-white text-black">${opts}</select>`;
}

function injectLangSelector(id='langContainer') {
  const c = document.getElementById(id);
  if(c) c.innerHTML = getLangSelectorHTML();
}

document.addEventListener('DOMContentLoaded', ()=>{
  injectLangSelector('langContainer');
  // also inject into all elements with id langSel old
  const oldSel = document.getElementById('langSel');
  if(oldSel) oldSel.outerHTML = getLangSelectorHTML();
  applyTranslations();
});
