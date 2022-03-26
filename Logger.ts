
import { injectable } from "tsyringe"

@injectable()
class Logger {
    constructor(){
        this.info('[--] Initiating class [--]')
    }
    
    info(info: string){
        return console.info("[INFO]", info)
    }

    log(log: string){
        return console.log("[LOG]", log)
    }

    warn(warning: string){
        return console.warn("[WARNING]", warning)
    }
}

export default Logger