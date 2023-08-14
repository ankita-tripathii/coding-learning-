const TestuserDetailModel = require('./model/Testuser');    //new add
const TestproductDetailModel = require('./model/Testproduct');    //new add


//create api
const getTestproduct = ((req,res) => {
//res.send('Hello World');
	console.log('get_Testproduct API hit');
	res.json({"product_id": 1, "product_name": "Top", "price": 999});
});


exports.getTestproduct = getTestproduct;


                                                  //for user
//-------------------------------------------------------------------------------------------------------------------

//Post Method. create Testuser                           
const Testpost = ((req, res) => {
     const data = new TestuserDetailModel({
        name: req.body.name,
        age: req.body.age
    })

     try{
        const dataToSave = data.save(); // mongo save
        res.status(200).json({ data: data , message: "TestuserDetail Created!"});
    }
    catch(error){
        res.status(400).json({message: "Sorry could not create TestuserDetail" }); //error.message
        
    }
//    res.send('Post API')
})


exports.Testpost = Testpost;


//--------------------------------------------------------------------------------------------------------------------

//create api
//Get all Method
const getAll = (async(req, res) => {
    try{
        const data = await TestuserDetailModel.find();
        res.status(200).json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

exports.getAll = getAll;

//---------------------------------------------------------------------------------------------------------------------

//Get by ID Method
const getOneproduct = (async (req, res) => {
    try{
        const data = await TestuserDetailModel.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


exports.getOneproduct = getOneproduct;

//-----------------------------------------------------------------------------------------------------------------------

//Update by ID Method
const updateproduct = (async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await TestuserDetailModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


exports.updateproduct = updateproduct;

//------------------------------------------------------------------------------------------------------------------------

//Delete by ID Method
const deleteproduct = (async (req, res) => {
    try {
        const id = req.params.id;
        const data =  await TestuserDetailModel.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


exports.deleteproduct = deleteproduct;


                                                //for productDetail
//-----------------------------------------------------------------------------------------------------------------------------------

//Post Method. create Testproductdetail                           
const Testproductpost = (async (req, res) => {
     const data = new TestproductDetailModel({
        name: req.body.name,
        size: req.body.size,
        color: req.body.color,
        price: req.body.price,
        description: req.body.description,
    })

     try{
        const dataToSave = await data.save(); // mongo save
        res.status(200).json({ data: data , message: "TestproductDetail Created!"});
    }
    catch(error){
        res.status(400).json({message: "Sorry could not create TestproductDetail" }); //error.message
        
    }
//    res.send('Post API')
})


exports.Testproductpost = Testproductpost;


//-------------------------------------------------------------------------------------

//Post Method. search product name and description
const Testproductsearch = (async (req, res) => {
	 const nameSearchString = req.body.nameQuery;

	 try{
	 	let productData = await TestproductDetailModel.find(
	 			{ $or: [{ name: {$regex: nameSearchString, $options: 'i'}}, {description: {$regex: nameSearchString, $options: 'i'}}]},
	 			{ name: 1,  description: 1}
	 		);

        res.status(200).json({ data: productData , message: "productDetail searched!"});
    }
    catch(error){
    	res.status(400).json({message: "Sorry could not searched productDetail" }); //error.message
        
    }
//    res.send('Post API')
})

exports.Testproductsearch = Testproductsearch;

//--------------------------------------------------------------------------------------------

//Get by ID Method
const TestgetOneproduct = (async (req, res) => {
    try{
        const data = await TestproductDetailModel.findById(req.params.id);
        res.json(data)
    }
    catch(error){
    	console.log(error.message);  // Server Logs push
        res.status(404).json({message: "Sorry this product isnt available in system. Please check the Product Id" })
    }
})


exports.TestgetOneproduct = TestgetOneproduct;

//-----------------------------------------------------------------------------------


//Update by ID Method
const Testproductupdate = (async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await TestproductDetailModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


exports.Testproductupdate = Testproductupdate;