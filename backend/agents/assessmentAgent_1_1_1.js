
function assess(incident, resource) {
  const damage = {
    flood: { infra: 65, homes: 120, roads: 8 },
    earthquake: { infra: 85, homes: 300, roads: 15 },
    cyclone: { infra: 90, homes: 450, roads: 20 },
    wildfire: { infra: 45, homes: 80, roads: 5 },
    landslide: { infra: 55, homes: 60, roads: 12 },
    heatwave: { infra: 20, homes: 0, roads: 0 }
  }[incident.type] || { infra: 50, homes: 100, roads: 10 };

  return {
    incidentId: incident.incidentId,
    type: incident.type,
    damageScore: Math.floor(Math.random()*30)+60,
    estimatedLossINR: damage.homes * 150000,
    affectedHomes: damage.homes,
    blockedRoads: damage.roads,
    priorityForRelief: damage.homes > 200 ? 'High' : 'Medium',
    recommendations: [
      'Deploy additional medical units',
      'Restore power in affected grid',
      `Open ${resource.shelters.length} shelters at full capacity`
    ],
    timestamp: new Date()
  };
}
module.exports = { assess };
