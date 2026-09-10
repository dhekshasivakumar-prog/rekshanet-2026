
function allocate(incident, state) {
  // Find nearest 3 open shelters
  const openShelters = state.shelters.filter(s => s.status === 'open')
    .map(s => {
      const dist = Math.sqrt(Math.pow(s.lat-incident.lat,2)+Math.pow(s.lng-incident.lng,2))*111;
      return {...s, distanceKm: parseFloat(dist.toFixed(2))};
    })
    .sort((a,b)=>a.distanceKm-b.distanceKm)
    .slice(0,3);

  const availableTeams = state.teams.filter(t=>t.status==='standby').slice(0,2);
  availableTeams.forEach(t=>t.assignedTo=incident.incidentId);

  return {
    shelters: openShelters,
    teams: availableTeams,
    safeZones: openShelters.map(s=>({name:s.name, lat:s.lat, lng:s.lng, distance:s.distanceKm})),
    evacuationRoutes: [
      `Primary route to ${openShelters[0]?.name || 'Shelter'} - ${openShelters[0]?.distanceKm || 2}km`,
      `Secondary route via NH48 - ${((openShelters[1]?.distanceKm||3)+1)}km`
    ]
  };
}
module.exports = { allocate };
