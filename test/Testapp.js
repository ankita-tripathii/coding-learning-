//Require module
const express = require('express');
const mongoose = require('mongoose');  //new add
const routes = require('./routes/Testroutes'); 


require('dotenv').config();   //new add

const mongoString = process.env.DATABASE_URL   //new add




// Express Initialize
const app = express();

app.use(express.json());

app.use(express.json()); 

const port = 9000; // on the server this port number should be free

app.listen(port,()=> {
	mongoose.connect(mongoString);       //new add
	const database = mongoose.connection;     //new add
	
	// Callbacks ?
	database.on('error', (error) => {       //new add
	    console.log(error)
	});

	database.once('connected', () => {           //new add
	    console.log('Database Connected');               //new add
	    console.log('Hoila! your service is running successfully !! listening on port 9000');   //new add
	})

})



//test api                                         
app.get('/get_Testproduct_test', (req,res)=>{
	//res.send('Hello World');
	res.json({"product_id": 1, "product_name": "Top", "price": 999});
})

// use routes                      
app.use('/api', routes);








// //Require module
// const express = require('express');

// const routes = require('./routes/Testroutes'); //new add

// // Express Initialize
// const app = express();

// app.use(express.json());

// app.use(express.json()); // new add

// const port = 9000; // on the server this port number should be free

// app.listen(port,()=> {
// 	console.log('listen port 9000');
// })

// //test api                                         //new add
// app.get('/get_Testproduct_test', (req,res)=>{
// 	//res.send('Hello World');
// 	res.json({"product_id": 1, "product_name": "Top", "price": 999});
// })

// // use routes                       // new add
// app.use('/api', routes);










// //Require module
// const express = require('express');
// const mongoose = require('mongoose');

// // Express Initialize
// const app = express();

// app.use(express.json());



// const port = 9000; // on the server this port number should be free

// app.listen(port,()=> {
// 	console.log('listen port 9000');
// })


// //create api
// app.get('/test_product', (req,res) => {
// //res.send('Hello World');
// 	console.log('test_product API hit');
// 	res.json({"product_id": 1, "product_name": "Top", "price": 999});
// });

