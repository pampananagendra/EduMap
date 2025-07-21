const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const collegeData = require('./data/colleges');

const app = express();
const PORT = 5001;
const JWT_SECRET = 'pathfinder-secret-key'; // In production, use environment variable

// In-memory storage (replace with database in production)
const users = [];

// Middleware
app.use(cors());
app.use(express.json());

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'PathFinder Backend is running' });
});

// College API endpoints
// Get all colleges
app.get('/api/colleges', (req, res) => {
  try {
    const { stream, type, location, course } = req.query;
    let colleges = [];
    
    // Combine all college data
    if (stream) {
      colleges = collegeData[stream] || [];
    } else {
      colleges = [
        ...collegeData.arts,
        ...collegeData.commerce,
        ...collegeData.btech,
        ...collegeData.polytechnic
      ];
    }

    // Apply filters
    if (type) {
      colleges = colleges.filter(college => 
        college.type.toLowerCase().includes(type.toLowerCase())
      );
    }

    if (location) {
      colleges = colleges.filter(college => 
        college.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (course) {
      colleges = colleges.filter(college => 
        college.courses.some(c => c.toLowerCase().includes(course.toLowerCase()))
      );
    }

    res.json({
      success: true,
      count: colleges.length,
      data: colleges
    });
  } catch (error) {
    console.error('Error fetching colleges:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get colleges by stream
app.get('/api/colleges/:stream', (req, res) => {
  try {
    const { stream } = req.params;
    const { type, location, course } = req.query;
    
    let colleges = collegeData[stream];
    
    if (!colleges) {
      return res.status(404).json({ error: 'Stream not found' });
    }

    // Apply filters
    if (type) {
      colleges = colleges.filter(college => 
        college.type.toLowerCase().includes(type.toLowerCase())
      );
    }

    if (location) {
      colleges = colleges.filter(college => 
        college.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (course) {
      colleges = colleges.filter(college => 
        college.courses.some(c => c.toLowerCase().includes(course.toLowerCase()))
      );
    }

    res.json({
      success: true,
      stream: stream,
      count: colleges.length,
      data: colleges
    });
  } catch (error) {
    console.error('Error fetching colleges by stream:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get college by ID
app.get('/api/college/:id', (req, res) => {
  try {
    const { id } = req.params;
    const collegeId = parseInt(id);
    
    // Search across all streams
    let college = null;
    for (const stream in collegeData) {
      college = collegeData[stream].find(c => c.id === collegeId);
      if (college) break;
    }

    if (!college) {
      return res.status(404).json({ error: 'College not found' });
    }

    res.json({
      success: true,
      data: college
    });
  } catch (error) {
    console.error('Error fetching college by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get available streams
app.get('/api/streams', (req, res) => {
  try {
    const streams = Object.keys(collegeData).map(stream => ({
      name: stream,
      displayName: stream.charAt(0).toUpperCase() + stream.slice(1),
      count: collegeData[stream].length
    }));

    res.json({
      success: true,
      data: streams
    });
  } catch (error) {
    console.error('Error fetching streams:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Signup endpoint
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { username, email, password, role = 'user' } = req.body;

    // Validate input
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Username, email, and password are required' });
    }

    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists with this email' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = {
      id: users.length + 1,
      username,
      email,
      password: hashedPassword,
      role,
      createdAt: new Date().toISOString()
    };

    users.push(user);

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(201).json({
      message: 'User created successfully',
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login endpoint
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find user
    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Profile endpoint
app.get('/api/profile', authenticateToken, (req, res) => {
  try {
    const user = users.find(u => u.id === req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt
    });
  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 PathFinder Backend server running on http://localhost:${PORT}`);
  console.log(`📚 API endpoints available:`);
  console.log(`   Authentication:`);
  console.log(`   - POST /api/auth/signup`);
  console.log(`   - POST /api/auth/login`);
  console.log(`   - GET /api/profile`);
  console.log(`   College Data:`);
  console.log(`   - GET /api/colleges (all colleges with optional filters)`);
  console.log(`   - GET /api/colleges/:stream (arts, commerce, btech, polytechnic)`);
  console.log(`   - GET /api/college/:id (specific college by ID)`);
  console.log(`   - GET /api/streams (available streams)`);
  console.log(`   - GET /api/health (health check)`);
});
