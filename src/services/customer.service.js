const CustomerRepository = require("../repositories/customer.repository");
const circuitBreaker = require("../supports/circuit-breaker");
const respository = new CustomerRepository();


const customerCircuitBreakerConfig = {
    get: {
        timeout: 3000,
        errorThresholdPercentage: 50,
        name: "customerGetActions",
        resetTimeout: 5000,
        
    }
}

class CustomerService  {


    async getCustomers() {
        
        const breaker =  circuitBreaker.create(respository.listCustomers,customerCircuitBreakerConfig.get);

        breaker.fallback(()=>{
            if(breaker.opened){
                console.log(breaker.stats)
                return {"code":"503","message":"Servicio No Disponible"}
            }
        })

        return await breaker.fire();

    }


}

module.exports = CustomerService;