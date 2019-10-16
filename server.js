const express = require('express');

const app = express('/',(req, res) => res.send('API Running'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));