const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/name', (req, res) => {
    // res.json({
    //     name: 'John Doe',
    //     age: 30,
    //     country: 'USA'
    // });
    res.sendFile(path.join(__dirname,"/index.html"));
});

app.listen(3000, () => {
    console.clear();
    
    
    console.log('Server is running on port 3000');
});
  