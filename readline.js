var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What do you think of node.js? ", function(answer) {
  // TODO: Log the answer in a database
  //console.log("Thank you for your valuable feedback:", answer);
  if(isNaN(parseInt(answer,10)))
	 console.log('please type number');
	else if(answer>5)
     console.log('answer>5');
	 else
	  console.log('answer<=5'+'   '+typeof(parseInt(answer,10))+'   '+parseInt(answer,10));

  rl.close();
});