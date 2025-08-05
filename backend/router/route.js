let route = require("express").Router()
let {handlecreteuser} = require("../Controller/index") 


route.post("/" , handlecreteuser)


module.exports = route ;