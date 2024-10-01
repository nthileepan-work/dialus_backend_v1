const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const addsRouter = require('./Routers/addsRouter'); // Import adds router
// const { sequelize } = require('./Models/addsModel'); // Import Sequelize connection
const path = require('path'); 
const sequelize = require('./config/db.js')
const mailRouter = require('./mail');
const categoriesRouter = require('./Routers/categoriesRouter');


const app = express();

// Middleware
app.use(cors({ origin: '*' }));  // Allow all origins, or specify your frontend origin
    
app.use(express.json());
dotenv.config();


// Serve the images folder
app.use('/dialus/api/images', express.static(path.join(__dirname, 'images')));



// Connect to MySQL
sequelize.authenticate()
    .then(() => {
        console.log('Connected to MySQL database!');
        return sequelize.sync();
    })
    .then(() => {
        console.log('database connected sucessfully!');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

// routing
app.use('/dialus/api/adds', addsRouter);
app.use('/dialus/api',mailRouter)
app.use('/dialus/api/categories', categoriesRouter);


// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


