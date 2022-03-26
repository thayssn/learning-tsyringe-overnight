import "reflect-metadata"
import { container } from "tsyringe"
import Logger from './Logger'

const logger = container.resolve(Logger)

class A {
    constructor(private logger: Logger){
    }

    init(){
        this.logger.log("Log A")
    }
}

class B {
    constructor(private logger: Logger){
    }

    init(){
        this.logger.log("Log B")
    }
}

class C {
    constructor(private logger: Logger){
    }

    init(){
        this.logger.log("Log C")
    }
}

const instanceA = new A(logger)

const instanceB = new B(logger)

const instanceC = new C(logger)

instanceA.init()
instanceB.init()
instanceC.init()