const userInfo = require('./information');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `My name is ${userInfo.name} I'm from the ${userInfo.campus} campus.`,
    e : "oO",
    T : "U "
}));