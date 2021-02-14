const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const people = require('./routes/people');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

app.get('/', (req, res) => {
    res.send('Hi Ammu')
});

app.get('/example', (req, res) => {
    res.send(
        [{
            name: 'Ammu',
            dob: '05.04.2015'
        },
        {
            name: 'Maryam',
            dob: '15.09.2011'
        }
    ])   
});

//http://localhost:3000/weather?address=bremen
app.get('/weather', (req, res) => {

    if(!req.query.address) {
        return res.send({ error: "No location provided"})
    }

    geocode(req.query.address, (error, { latitude, longitude, location }) => {
        if (error) {
            return res.send(error)
        }

        forecast(latitude, longitude, (error, forecast) => {
            console.log(forecast)
            res.send(forecast)
        })
    })

    // res.send({
    //     location: req.query.address,
    //     forcast: 'Schneit'
    // })
    // res.send({ location: req.query.search })
})

debugger
app.get('/users', (req, res) => {
    const user1 = {firstname: 'Amna', lastname:'Wasim'};
    const user2 = {firstname: 'Maryam', lastname:'Wasim'};

    res.json([user1, user2]);
});

app.get('/example/:name/:age', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name +':' + req.params.age);

});

app.post('/', (req, res) => {
    console.log(req.body);
    // Database work is done
    res.json({ success:true });
});
 
app.use('/people',people);

app.listen(3000, () => {
    console.log('server is up and running on port 3000')
});