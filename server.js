const express = require('express');

const app = express();

app.get('/api/test', (req,res) => {
    res.send('Hello , Nodejs AWS ')

})

app.get('/api/get/user/details', (req,res) => {
    res.send({name: 'Dev',email: 'dev@gmail.com'})

})

app.listen(7000, () => {
    console.log('Listening on PORT 7000');
})