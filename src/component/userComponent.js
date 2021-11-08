import { BaseLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User Component Yüklendi.")



let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Sefa","Pınar","Sivas");
let user2 = new User(2,"Fehmi","Pınar","Sivas");
let user2 = new User(2,"Mehmet","Pınar","Sivas");


userService.add(user1)
userService.add(user2)
userService.add(user3)



console.log(userService.getById(1))
userService.list()



let customer = {id:1,firstName:"Sefa"}

