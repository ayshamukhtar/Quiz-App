const express = require('express');
const bcrypt = require('bcryptjs');
const pool = require('../db');

const router = express.Router();

router.post('/signup', async (req, res) => {
  // your signup code here

  localStorage.setItem('signupUsername', username);
  localStorage.setItem('signupPassword', password);
});

router.post('/login', async (req, res) => {
  // your login code here

  localStorage.setItem('signupUsername', username);
  localStorage.setItem('signupPassword', password);
});

module.exports = router;
