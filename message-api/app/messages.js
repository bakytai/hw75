const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const router = express.Router();


router.post('/encode', (req, res) => {
    const code = Vigenere.Cipher(req.body.password).crypt(`${req.body.word}`);
    return  res.send({encodeWord: code});
});

router.post('/decode', (req, res) => {
    const decode = Vigenere.Decipher(req.body.password).crypt(`${req.body.word}`);
    return  res.send({decodeWord: decode});
});

module.exports = router;