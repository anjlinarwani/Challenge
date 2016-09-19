	// The piece of code here uses the ReadLine JS Library

	// The construct initializes the readline library

	const readline = require('readline');

	// The construct initializes the object of Class createInterface

	const r1=readline.createInterface
	({
		// Stream Input and Output declaration
		input: process.stdin,
		output: process.stdout
	});

	// The question method is used to prompt the user to key in a name

	r1.question('What is your name?', (answer) => 
	{ 
		// If the user entered a Name the text is used in the answer variable as displayed with a greeting
		if(answer.length != 0)
		{
			console.log('Hi ' + answer + ', its nice to meet you here in console')

		} 
		else console.log ('Sorry i didnt get your name');
		
		r1.close();

	});

