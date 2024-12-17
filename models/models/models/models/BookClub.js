const mongoose = require('mongoose');
const BookClubSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    discussions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Discussion' }]
});
module.exports = mongoose.model('BookClub', BookClubSchema);
