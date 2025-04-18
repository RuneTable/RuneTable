// © 2025 RuneTable | © 2025 Tylor Lenskold
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Basic API route to fetch monster data from Open5e
app.get('/api/monster/:name', async (req, res) => {
  const monsterName = req.params.name.toLowerCase();
  try {
    const response = await fetch(`https://api.open5e.com/monsters/?search=${monsterName}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching monster data:', error);
    res.status(500).json({ error: 'Failed to fetch monster data.' });
  }
});

// Health check endpoint (useful for Render deployments)
app.get('/', (req, res) => {
  res.send('RuneTable Backend is Live!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
