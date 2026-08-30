const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const jwt = require('jsonwebtoken');

const app = express();
const server = http.createServer(app);

// In-memory data store placeholder
let checkIns = [];

// Middleware setup
app.use(express.json());

// Serve static frontend files from the public folder
app.use(express.static(path.join(__dirname, '../public')));

// Simple Dummy JWT Secret & Demo Credentials
const JWT_SECRET = 'rakshanet_super_secret_key';

// API: Handle Login System
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if ((username === 'citizen' || username === 'admin') && password === 'demo123') {
        const token = jwt.sign({ username, role: username }, JWT_SECRET, { expiresIn: '1h' });
        return res.json({ success: true, token, role: username });
    }
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
});

// API: Handle Citizen Check-In Signal
app.post('/api/checkin', (req, res) => {
    const { status, message } = req.body;
    const newCheckIn = { status, message, timestamp: new Date().toISOString() };
    checkIns.unshift(newCheckIn);
    return res.json({ success: true, data: newCheckIn });
});

// API: Fetch All Logs
app.get('/api/logs', (req, res) => {
    res.json({ success: true, checkIns });
});

// Catch-all route to serve the landing page if routes aren't matched
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// CRITICAL FIX: Only run app.listen locally! Vercel manages ports natively.
if (process.env.NODE_ENV !== 'production' && require.main === module) {
    const PORT = process.env.PORT || 4000;
    server.listen(PORT, () => {
        console.log(`Server running locally at http://localhost:${PORT}`);
    });
}

// Export the app instance for Vercel Serverless environment
module.exports = app;
