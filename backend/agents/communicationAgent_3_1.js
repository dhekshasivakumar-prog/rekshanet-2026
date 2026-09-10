
const templates = {
  flood: {
    en: "FLOOD ALERT: River level critical near {location}. Evacuate to nearest shelter immediately. Avoid low-lying areas.",
    hi: "बाढ़ चेतावनी: {location} के पास नदी का जलस्तर खतरनाक है। तुरंत निकटतम आश्रय स्थल पर जाएं।",
    mr: "पूर इशारा: {location} जवळ नदी पातळी धोकादायक. त्वरित जवळच्या निवारा केंद्रात जा."
  },
  earthquake: {
    en: "EARTHQUAKE ALERT: {location} - {magnitude} Richter detected. Drop, Cover, Hold. Move to open safe zones.",
    hi: "भूकंप चेतावनी: {location} में {magnitude} तीव्रता। खुले स्थान पर जाएं।",
    mr: "भूकंप इशारा: {location} येथे {magnitude} रिश्टर. मोकळ्या जागेत जा."
  },
  cyclone: {
    en: "CYCLONE WARNING: Severe storm approaching {location}. Secure indoors, stay away from coast. Shelters open.",
    hi: "चक्रवात चेतावनी: {location} में तूफान। घर के अंदर रहें।",
    mr: "वादळ इशारा: {location} मध्ये चक्रीवादळ. घरात थांबा."
  },
  wildfire: {
    en: "WILDFIRE ALERT: Fire detected near {location}. Evacuate upwind immediately. Follow NDRF instructions.",
    hi: "जंगल आग चेतावनी: {location} के पास आग। तुरंत सुरक्षित स्थान पर जाएं।",
    mr: "वणवा इशारा: {location} जवळ आग. सुरक्षित ठिकाणी जा."
  },
  landslide: {
    en: "LANDSLIDE ALERT: Slope failure risk at {location}. Avoid hillside routes. Move to flat safe zones.",
    hi: "भूस्खलन चेतावनी: {location} में पहाड़ खिसकने का खतरा।",
    mr: "दरड कोसळण्याचा इशारा: {location} येथे धोका."
  },
  heatwave: {
    en: "HEATWAVE ALERT: Extreme heat in {location}. Stay hydrated, avoid outdoors 12-4 PM. Medical shelters open.",
    hi: "लू चेतावनी: {location} में भीषण गर्मी। पानी पिएं, बाहर न जाएं।",
    mr: "उष्माघात इशारा: {location} मध्ये प्रचंड उष्णता. पाणी प्या."
  }
};

function composeAlert(incident, lang='en') {
  const t = templates[incident.type] || templates.flood;
  let msg = (t[lang] || t.en)
    .replace('{location}', incident.location)
    .replace('{magnitude}', incident.hazardId ? '4.8' : '5.2');
  
  return {
    id: 'ALT-' + Date.now() + '-' + lang,
    incidentId: incident.incidentId,
    type: incident.type,
    lang,
    message: msg,
    severity: incident.severity,
    timestamp: new Date(),
    channels: ['app','sms','siren']
  };
}

module.exports = { composeAlert, templates };
