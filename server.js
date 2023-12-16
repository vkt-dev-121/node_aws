const express = require('express');

const app = express();

app.get('/api/test', (req,res) => {
    res.send('Hello , Nodejs AWS ')

})

app.listen(7000, () => {
    console.log('Listening on PORT 7000');
})