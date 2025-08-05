const User = require("../Model/model");

async function handlecreteuser(req, res) {
    let body = req.body
    console.log("body", body);
    const user = await User.create({ username: body.username , email: body.email , password : body.password });
    console.log("auto-generated ID:", user.id);

}
module.exports = { handlecreteuser } 