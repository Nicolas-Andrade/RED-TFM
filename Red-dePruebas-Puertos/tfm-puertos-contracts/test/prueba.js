
module.exports = async(callback)=> {
const factory = artifacts.require("LotterieFactory");

const fact =  await factory.deployed();

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', function(answer) {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});



//console.log(fact);
console.log("1111111111111");
console.log(await fact.getLotteries());
console.log("2222222");
console.log(await fact.getStatus('0x964050c64D482c37F547D320b72acfB696593eC8'));
var username = prompt("What is your name?");
console.log('Hola,  ${username}');

var resultado;
   await fact.addParticipant(lotteryAddress).send({from: cuenta.address ,value: precio, gasLimit: 4300000, gasPrice: 0}).on($
       resultado = hash;
       console.log(hash);
    // return hash;
  }).on('receipt', function(receipt){
    // receipt example
    console.log(receipt);
  });



//contract("LotterieFactory", accounts => {
//it("should put 10000 MetaCoin in the first account", () =>
  //  factory.deployed()
    //  .then(instance => instance)
      //.then(() => console.log(instance.getLotteries.call())));
//});

//console.log(fact.getLotte
 return ;
 process.exit()
}
