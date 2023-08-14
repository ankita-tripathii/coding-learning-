const express = require('express');

//-----------------------------------------------------------------------

const { getTestproduct } = require("../get_Testproduct"); //or const getProduct = require("../get_Testproduct").getTestproduct;


const { getAll } = require("../get_Testproduct");
const { getOneproduct } = require("../get_Testproduct");
const { Testpost } = require("../get_Testproduct");
const { updateproduct } = require("../get_Testproduct");
const { deleteproduct } = require("../get_Testproduct");

//-------------------------------------------------------------------

const { Testproductpost } = require("../get_Testproduct");
const { Testproductsearch } = require("../get_Testproduct");
const { TestgetOneproduct } = require("../get_Testproduct");
const { Testproductupdate } = require("../get_Testproduct");



//------------------------------------------------------------------------


const router = express.Router()

//----------------------------------------------------------------------

router.get('/get_Testproduct', getTestproduct);


router.get('/getAll',getAll);
router.get('/getOne/:id',getOneproduct);
router.post('/Testpost',Testpost);
router.patch('/update/:id',updateproduct);
router.delete('/delete/:id',deleteproduct);

//------------------------------------------------------------------------

router.post('/productpost',Testproductpost);
router.post('/productsearch',Testproductsearch);
router.get('/getOneproduct/:id',TestgetOneproduct);
router.patch('/updateproduct/:id',Testproductupdate);



//-------------------------------------------------------------------------

module.exports = router;




// const express = require('express');
// const { getTestproduct } = require("../get_Testproduct"); //or const getProduct = require("../get_Testproduct").getTestproduct;

// const router = express.Router()

// //create api
// //Get all Method
// router.get('/getAll', (req, res) => {
//     res.send('Get All API')
// })

// router.get('/get_Testproduct', getTestproduct);

// module.exports = router;