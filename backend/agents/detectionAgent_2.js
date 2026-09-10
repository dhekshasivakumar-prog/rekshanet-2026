
// Detection Agent - Multi-Hazard
function detect(state, disasterTypeOverride = null) {
  const hazards = [];
  const now = new Date();
  
  // Simulated detection logic for ALL disasters
  state.sensors.forEach(s => {
    if (s.value >= s.threshold * 0.8) {
      let type = 'flood';
      if (s.type === 'seismic') type = 'earthquake';
      if (s.type === 'weather' && s.value > 100) type = 'cyclone';
      if (s.type === 'weather') type = 'flood';
      if (s.type === 'fire_risk') type = 'wildfire';
      
      hazards.push({
        id: 'HZ-' + Date.now() + '-' + s.id,
        type: disasterTypeOverride || type,
        sensorId: s.id,
        location: s.location,
        lat: s.lat, lng: s.lng,
        severity: s.value >= s.threshold ? 'critical' : 'warning',
        confidence: Math.min(95, 60 + (s.value / s.threshold)*30),
        timestamp: now,
        raw: s
      });
    }
  });

  // If forced type from admin
  if (disasterTypeOverride) {
    const types = {
      flood: { location: 'Mithi River Basin', lat: 19.0822, lng: 72.8411 },
      earthquake: { location: 'Mumbai Western Fault', lat: 19.0760, lng: 72.8777 },
      cyclone: { location: 'Arabian Sea Coast', lat: 19.0596, lng: 72.8295 },
      wildfire: { location: 'SGNP Forest Edge', lat: 19.2314, lng: 72.9047 },
      landslide: { location: 'Hillside Region', lat: 19.2183, lng: 72.9781 },
      heatwave: { location: 'Central Mumbai', lat: 19.0760, lng: 72.8777 }
    };
    const cfg = types[disasterTypeOverride] || types.flood;
    hazards.push({
      id: 'HZ-' + Date.now(),
      type: disasterTypeOverride,
      sensorId: 'SIM',
      location: cfg.location,
      lat: cfg.lat, lng: cfg.lng,
      severity: 'critical',
      confidence: 92,
      timestamp: now,
      raw: { value: 95, threshold: 80 }
    });
  }

  return hazards;
}
module.exports = { detect };
