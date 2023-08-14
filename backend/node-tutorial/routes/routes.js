const express = require('express');
const { getProduct } = require("../get_product"); //or const getProduct = require("../get_product").getProduct;

const UserDetailModel = require('../model/user');

const userproductDetailModel = require('../model/master_product');

const employeereviewDetailModel = require('../model/employees_review');

const employeebankDetailModel = require('../model/employees_bank_account');



const router = express.Router()

//create api
//Get all Method
// router.get('/getAll', (req, res) => {
//     res.send('Get All API')
// })



router.get('/get_product', getProduct);

//Post Method. create User
router.post('/user', (req, res) => {
	 const data = new UserDetailModel({
        name: req.body.name,
        age: req.body.age,
        emailId: req.body.email
    })

	 try{
	 	const dataToSave = data.save(); // mongo save
        res.status(200).json({ data: data , message: "UserDetail Created!"});
    }
    catch(error){
    	res.status(400).json({message: "Sorry could not create UserDetail" }); //error.message
        
    }
//    res.send('Post API')
})



//Post Method. create User
router.post('/user-search', async (req, res) => {
	 const emailSearchString = req.body.emailQuery;

	 try{
	 	let userData = await UserDetailModel.find(
	 			{ emailId: {$regex: emailSearchString, $options: 'i'}},
	 			{ name: 1,  emailId: 1}
	 		);

        res.status(200).json({ data: userData , message: "UserDetail searched!"});
    }
    catch(error){
    	res.status(400).json({message: "Sorry could not create UserDetail" }); //error.message
        
    }
//    res.send('Post API')
})



router.get('/getAll', async (req, res) => {
    try{
        const data= await UserDetailModel.find();
       res.status(200).json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await UserDetailModel.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})







                                              //user_product
//---------------------------------------------------------------------------------------------------


//Post Method. create user_product                          
router.post('/user_productpost',async (req, res) => {
     const data = new userproductDetailModel({
        product_name: req.body.name,
        color: req.body.color,
        price: req.body.price,
        product_description: req.body.description,
        created_user: req.body.userId
    })

     try{
        const dataToSave = await data.save(); // mongo save
        res.status(200).json({ data: data , message: "userproductDetail Created!"});
    }
    catch(error){
        res.status(400).json({message: "Sorry could not create userproductDetail" }); //error.message
        
    }
//    res.send('Post API')
})



//getAll Method
router.get('/getAlluser_product', async (req, res) => {
    try{
        const data= await userproductDetailModel.find().populate("created_user");
       res.status(200).json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


//Get by ID Method
router.get('/getOneuser_product/:id',async (req, res) => {
    try{
        const data = await userproductDetailModel.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        console.log(error.message);  // Server Logs push
        res.status(404).json({message: "Sorry this product isnt available in system. Please check the Product Id" })
    }
})


                                                        //employees_review
//---------------------------------------------------------------------------------------------------------------------


//Post Method. create employees_review                          
router.post('/employees_reviewpost',async (req, res) => {
    const {
        employee_name,
        employee_emailId,
        employee_occupation,
        employee_review: {user_id, user_email, detail}
    } = req.body;

     const data = new employeereviewDetailModel({
        employee_name,
        employee_emailId,
        employee_occupation,
        employee_review: {user_id, user_email, detail}
    })

     try{
        const dataToSave = await data.save(); // mongo save
        res.status(200).json({ data: data , message: "employeereviewDetail Created!"});
    }
    catch(error){
        res.status(400).json({message: "Sorry could not create employeereviewDetail" }); //error.message
        
    }
//    res.send('Post API')
})


//getAll Method
router.get('/getAllemployees_review', async (req, res) => {
    try{
        const data= await employeereviewDetailModel.find().populate("employee_review.user_id");
       res.status(200).json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


                                                //employee and bank account
//--------------------------------------------------------------------------------------------------------------------------


//Post Method create employee_bank_account                         
router.post('/employees_accountpost',async (req, res) => {
     const {
        employee_name,                                      //deconstruct object
        employee_emailId,
        employee_occupation,
        employee_account: {employee_id, email, account_holder_name, account_number}
    } = req.body;

     const data = new employeebankDetailModel({
        employee_name,
        employee_emailId,
        employee_occupation,
        employee_account: {employee_id, email, account_holder_name, account_number}
    })

     try{
        const dataToSave = await data.save(); // mongo save
        res.status(200).json({ data: data , message: "employeebankDetail Created!"});
    }
    catch(error){
        res.status(400).json({message: "Sorry could not create employeebankDetail" }); //error.message
        
    }
//    res.send('Post API')
})



//getAll Method
router.get('/getAllemployees_account', async (req, res) => {
    try{
        const data= await employeebankDetailModel.find()
       res.status(200).json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


//Get by ID Method
router.get('/getOneemployees_account/:id',async (req, res) => {
    try{
        const data = await employeebankDetailModel.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        console.log(error.message);  // Server Logs push
        res.status(404).json({message: "Sorry this product isnt available in system. Please check the Product Id" })
    }
})


module.exports = router;