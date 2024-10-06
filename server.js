const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const addsRouter = require('./Routers/addsRouter');
const offersRouter = require('./Routers/offersRouter.js'); // Import offers router
const dsRouter = require('./Routers/dsRouter.js')
const districtRoutes = require("./Routers/districtRouter.js");
const searchRoutes = require("./Routers/searchRouter.js");
const freeListingRoutes = require('./Routers/freeListingRoutes_thil.js');
const cityRoutes = require('./Routers/cityRoutes_thil.js');
const districtRoutes_thil = require('./Routers/districtRoutes_thil.js');
const category_thi = require('./Routers/category_thi.js')
const addRoutes_nive = require('./Routers/addsRouter_nive.js');
const offerRoutes_nive = require('./Routers/offersRouter_nive.js');
const dscollectionRoutes_nive = require('./Routers/dscollectionRouter_nive.js');
const joinRouter = require('./Routers/joinRouter_subo.js');
const districtsRouter_subo = require('./Routers/districtsRouter_subo');
 // Import adds router
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

app.use('/dialus/api/uploads', express.static('uploads'));

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
app.use('/dialus/api/offers', offersRouter);
app.use('/dialus/api/dscollection', dsRouter);
app.use("/dialus/api/districts", districtRoutes);
app.use("/dialus/api/search", searchRoutes);

//thil
app.use('/dialus/api/category', category_thi)
app.use('/dialus/api/freelisting', freeListingRoutes);
app.use('/dialus/api/cities', cityRoutes);
app.use('/dialus/api/districts', districtRoutes_thil);

//nive
app.use('/dialus/api/adds', addRoutes_nive);
app.use('/dialus/api/offers', offerRoutes_nive);
app.use('/dialus/api/dscollection', dscollectionRoutes_nive);

// subo
app.use ('/dialus/api/join', joinRouter);
app.use ('/dialus/api/district', districtsRouter_subo);


// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


