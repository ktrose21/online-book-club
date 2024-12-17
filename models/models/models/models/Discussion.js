const mongoose = require('mongoose');
const DiscussionSchema = new mongoose.Schema({
    bookClub: { type: mongoose.Schema.Types.ObjectId, ref: 'BookClub' },
    topic: String,
    comments: [{ user: String, content: String, timestamp: Date }]
});
module.exports = mongoose.model('Discussion', DiscussionSchema);
