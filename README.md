# RakshaNet 2.0 — Modern All-Disaster Agentic Platform

Modern rebuild of the INNOVIK 6.0 pitch.

## Features Modern
- **All 6 disasters**: Flood, Earthquake, Cyclone, Wildfire, Landslide, Heatwave detection
- **5 AI Agents**: Detection, Coordination, Communication, Resource, Assessment via orchestrator + Socket.IO live bus
- **Attractive Front Page**: mesh gradient, glass nav, live stats
- **Login Page**: citizen / admin roles (JWT demo) - citizen/demo123, admin/demo123
- **Citizen Page**: Leaflet live map, nearest shelters with Go navigation, multilingual alerts (EN/HI/MR), I'm Safe check-in, safety tips
- **Admin Page**: pipeline visualization, live logs, hazard zone, shelter table, team dispatch, check-ins, damage assessment
- **Safety**: Safe places auto-calculated by distance, shelter capacity tracking, evacuation routes

## Run
```
cd backend
npm install
npm start
```


- Landing: /index.html
- Login: /login.html
- Citizen: /citizen.html
- Admin: /dashboard.html

## Tech Stack (All languages used)
- Backend: Node.js, Express, Socket.IO, JWT
- Frontend: HTML5, TailwindCSS, JavaScript, Leaflet.js
- Data: JSON in-memory (replace with PostGIS+Redis for prod)
- Real-time: Socket.IO (stand-in for Kafka/LangGraph bus)

## Next prod steps
Replace in-memory with Postgres+PostGIS, live IMD/CWC/NDMA APIs, LangGraph agents, Twilio SMS, React Native app, satellite CV model, Kubernetes.
