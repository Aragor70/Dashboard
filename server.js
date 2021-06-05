require('dotenv').config({ path: 'config/config.env' })
const express = require('express');
const connect = require('./config/connect');
const app = express();
const path = require('path');

connect();

app.use(express.json());


app.use('/api/resources', require('./routes/api/resources'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

if (process.env.NODE_ENV === 'production') {
    // static folder
    app.use(express.static('client/build'))
    
    // get index directory
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}.`));


process.on('unhandledRejection', (err, _promise) => {
    console.error(`Error message: ${err.message}`)
    server.close(() => process.exit(1))
})