const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("welcometo the homeXD");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});