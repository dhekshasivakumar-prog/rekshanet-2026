
function coordinate(hazard, state) {
  const severityScore = hazard.severity === 'critical' ? 9 : 6;
  const impactRadius = {
    flood: 5, earthquake: 15, cyclone: 20, wildfire: 8, landslide: 3, heatwave: 10
  }[hazard.type] || 5;

  const affectedPopulation = Math.floor(Math.random()*5000)+1000;

  return {
    incidentId: 'INC-' + Date.now(),
    hazardId: hazard.id,
    type: hazard.type,
    status: 'verified',
    severity: hazard.severity,
    severityScore,
    location: hazard.location,
    lat: hazard.lat, lng: hazard.lng,
    impactRadiusKm: impactRadius,
    affectedPopulation,
    verifiedAt: new Date(),
    actionPlan: {
      evacuate: hazard.type !== 'heatwave',
      shelterInPlace: hazard.type === 'heatwave' || hazard.type === 'earthquake',
      priority: severityScore > 8 ? 'P0 - Immediate' : 'P1 - High'
    }
  };
}
module.exports = { coordinate };
