
const express = require('express');
const http = require('http');
const cors = require('cors');
const path = require('path');
const { Server } = require('socket.io');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

const shelters = JSON.parse(fs.readFileSync(path.join(__dirname,'data/shelters.json')));
const teams = JSON.parse(fs.readFileSync(path.join(__dirname,'data/teams.json')));
const sensors = JSON.parse(fs.readFileSync(path.join(__dirname,'data/sensors.json')));

const state = { shelters, teams, sensors, incidents: [], alerts: [], logs: [], assessments: [], checkins: [], currentHazard: null, lastAllocation: null };

const orchestrator = require('./agents/orchestrator');
const apiRouter = require('./routes/api')(state, orchestrator, io);
app.use('/api', apiRouter);

io.on('connection', socket=>{
  socket.emit('state:init', { shelters: state.shelters, incidents: state.incidents, alerts: state.alerts, logs: state.logs });
  socket.on('citizen:checkin', data=>{ state.checkins.unshift(data); io.emit('checkin:new', data); });
});

let PORT = parseInt(process.env.PORT || '4000');
function startServer(port){
  server.listen(port, ()=>{
    console.log(`RakshaNet running at http://localhost:${port}`);
  }).on('error', (err)=>{
    if(err.code === 'EADDRINUSE'){
      console.log(`Port ${port} busy, trying ${port+1}...`);
      startServer(port+1);
    } else throw err;
  });
}
startServer(PORT);
