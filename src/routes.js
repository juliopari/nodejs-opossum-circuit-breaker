const express =  require('express')
const router = express.Router();


const CustomerController = require('./controllers/customer.controller')
const customerController = new CustomerController();

router.get('/customers',async (req,res)=>{
    const response =  await customerController.getCustomers();
    res.json(response)
})

module.exports = router;