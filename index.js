const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: 'salam', email: 'salam@email.com', phone: '01788888888' },
    { id: 2, name: 'jalam', email: 'jalam@email.com', phone: '01766666666' },
    { id: 3, name: 'kalam', email: 'kalam@email.com', phone: '01744444444' },
    { id: 4, name: 'balam', email: 'balam@email.com', phone: '01733333333' },
    { id: 5, name: 'talam', email: 'talam@email.com', phone: '01799999999' },
    { id: 6, name: 'malam', email: 'malam@email.com', phone: '01722222222' },
    { id: 7, name: 'falam', email: 'falam@email.com', phone: '01755555555' }
]

app.get('/users', (req, res) => {
    // filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }

});

app.get('/user/:id', (req, res) => {
    console.log(req.params)
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request', req.body)
    const user = req.body;
    user.id = users.length + 1;
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['Mango', 'Orange', 'Banana'])
})

app.listen(port, () => {
    console.log('Welcome to my Smarty node', port);
});