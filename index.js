const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// const rootCall = (req, res) => res.send('Thank you very much');

const users = 
[
    {
        name: 'Mintu Das',
        age: 49,
        occupation: 'Businessman'
    },
    {
        name: 'Zinu Das',
        age: 40,
        occupation: 'housewife'
    },
    {
        name: 'Riya Das',
        age: 17,
        occupation: 'student'
    },
    {
        name: 'Roky Das',
        age: 22,
        occupation: 'student'
    }
];

app.get('/', (req, res) => {
    const user = {
        name: 'Roky Das',
        age: 22,
        phone: '01521227862',
        address: 'machua jharna, ctg'
    }
    // res.send('AMi onek node pari');
    res.send(user);
});

app.get('/special', (req, res) => {
    const specialUser = {
        name: 'Jhankar Mahbub',
        age: 35,
        phone: 01567675645,
        address: 'America'
    }
    res.send(specialUser);
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(users[userId]);
})

//post

app.post('/addUser', (req, res) => {
    // console.log('data received', req.body);

    // save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
})

app.listen(3000, () => console.log('Listening to port 3000'));