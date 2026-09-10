
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const SECRET = 'rakshanet_secret_2026';

module.exports = (state, orchestrator, io) => {
  // Auth
  router.post('/login', (req,res)=>{
    const {username,password,role} = req.body;
    // Demo auth - any password works for demo, role based
    const users = {
      admin: {username:'admin', role:'admin', name:'District Collector'},
      citizen: {username:'citizen', role:'citizen', name:'Om Prakash'},
      ndrf: {username:'ndrf', role:'admin', name:'NDRF Commander'}
    };
    const user = users[username] || {username, role: role||'citizen', name: username};
    const token = jwt.sign(user, SECRET, {expiresIn:'24h'});
    res.json({token, user});
  });

  router.get('/shelters', (req,res)=>res.json(state.shelters));
  router.get('/teams', (req,res)=>res.json(state.teams));
  router.get('/sensors', (req,res)=>res.json(state.sensors));
  router.get('/incidents', (req,res)=>res.json(state.incidents));
  router.get('/alerts', (req,res)=>res.json(state.alerts.slice(0,20)));
  router.get('/logs', (req,res)=>res.json(state.logs.slice(0,50)));
  router.get('/stats', (req,res)=>{
    res.json({
      totalShelters: state.shelters.length,
      openShelters: state.shelters.filter(s=>s.status==='open').length,
      totalCapacity: state.shelters.reduce((a,s)=>a+s.capacity,0),
      occupied: state.shelters.reduce((a,s)=>a+s.occupied,0),
      incidents: state.incidents.length,
      activeTeams: state.teams.filter(t=>t.status!=='standby').length
    });
  });

  router.post('/checkin', (req,res)=>{
    const {name, lat, lng, status} = req.body;
    const checkin = {id:'CHK-'+Date.now(), name, lat, lng, status, time: new Date()};
    state.checkins.unshift(checkin);
    io.emit('checkin:new', checkin);
    res.json(checkin);
  });

  router.post('/simulate', async (req,res)=>{
    const {type} = req.body; // flood, earthquake, cyclone, wildfire, landslide, heatwave
    const result = await orchestrator.runPipeline(state, io, type||'flood');
    res.json(result);
  });

  router.post('/reset', (req,res)=>{
    state.incidents=[]; state.alerts=[]; state.logs=[]; state.assessments=[]; state.checkins=[];
    state.teams.forEach(t=>t.status='standby');
    io.emit('system:reset');
    res.json({ok:true});
  });

  return router;
};
