const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/memes', async (req, res) => {
  try {
    const response = await axios.get('https://api.example.com/memes'); // Substitua pela URL da API real
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching memes:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
