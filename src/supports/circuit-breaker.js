
const CircuitBreakerPattern = require('opossum');
const BREAKERS = Symbol('breakers')

const circuitBreakerOptions = {
    timeout: 500,
    errorThresholdPercentage: 50,
    name: "default"
}

class CircuitBreaker {
    
    constructor(){
        this[BREAKERS] = {};
    }

    create(_function,config = circuitBreakerOptions) {
        const  breaker = new CircuitBreakerPattern(_function,config);
        this[BREAKERS][config.name] = breaker;
        return breaker;
    }

    getBreaker(name){
        return this[BREAKERS][name];
    }



}

const circuitBreaker = new CircuitBreaker();

module.exports = circuitBreaker;