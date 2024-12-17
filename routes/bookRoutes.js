const router = require('express').Router();
const { createBookClub, getBookClubs } = require('../controllers/bookClubController');
router.post('/create', createBookClub);
router.get('/', getBookClubs);
module.exports = router;
