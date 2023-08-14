
//create api
const getProduct = ((req,res) => {
//res.send('Hello World');
	res.json({"product_id": 1, "product_name": "Pant", "price": 140});
});




exports.getProduct = getProduct;
