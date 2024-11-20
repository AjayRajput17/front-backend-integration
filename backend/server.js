import express from 'express';
// import dotenv from 'dotenv';

// dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        { id: 1, title: "The Programmer's Diet", joke: "Why do programmers prefer dark mode? Because light attracts bugs!" },
        { id: 2, title: "Stay Positive", joke: "Why was the math book sad? It had too many problems." },
        { id: 3, title: "Why Not Both?", joke: "Why do cows wear bells? Because their horns don’t work!" },
        { id: 4, title: "Parallel Pun", joke: "Parallel lines have so much in common… it’s a shame they’ll never meet." },
        { id: 5, title: "The Dev Struggle", joke: "How many developers does it take to change a light bulb? None, that's a hardware problem!" }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
