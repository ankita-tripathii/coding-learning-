//Require module
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes'); //new add

require('dotenv').config();

const mongoString = process.env.DATABASE_URL



// Express Initialize
const app = express();

app.use(express.json()); // new add

const port = 8000; // on the server this port number should be free

app.listen(port,()=> {
	mongoose.connect(mongoString);
	const database = mongoose.connection;
	
	// Callbacks ?
	database.on('error', (error) => {
	    console.log(error)
	});

	database.once('connected', () => {
	    console.log('Database Connected');
	    console.log('Hoila! your service is running successfully !! listening on port 8000');
	})


	
})

//test api                                         //new add
app.get('/get_product_test', (req,res)=>{
	//res.send('Hello World');
	res.json({"product_id": 1, "product_name": "Pant", "price": 140});
})

// use routes                       // new add
app.use('/api', routes);


