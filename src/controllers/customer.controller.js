
const CustomerService = require('../services/customer.service');
const service = new CustomerService()

class CustomerController  {


    async getCustomers() {

        return await service.getCustomers()
    }


}

module.exports = CustomerController;