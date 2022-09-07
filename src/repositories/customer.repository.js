const { CUSTOMERS_PROVIDER_A, CUSTOMERS_PROVIDER_B } = require('../config');

const axios = require('axios').default


class CustomerRepository {

    async listCustomers (){ 

           console.log('no entra')
           const response = await axios.get(CUSTOMERS_PROVIDER_A);
           console.log(`listCustomersOfSourceA: ${JSON.stringify(response.data)}`)
           return response.data;
           
    } 
        
    

}


module.exports = CustomerRepository;