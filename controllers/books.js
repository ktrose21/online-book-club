const axios = require('axios');
exports.getRecommendations = async (req, res) => {
    const { genre } = req.query;
    try {
        const response = await axios.post('https://api.openai.com/v1/completions', {
            model: "text-davinci-003",
            prompt: `Recommend 5 books for ${genre} genre.`,
            max_tokens: 100
        }, {
            headers: { Authorization: `Bearer YOUR_API_KEY` }
        });
        res.json(response.data.choices[0].text);
    } catch (error) {
        res.status(500).json(error);
    }
};
