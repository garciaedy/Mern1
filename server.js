const express = require('express');

const app = express('/',(req, res) => res.send('API Running'));

const PORT = rocess.env.PORT || 3000;

app.listen(PORTR, () => console.log(`server listening on port ${PORT}`));