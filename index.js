const setResult = result => document.getElementById('result').innerHTML = `Результат: ${result}`;

const addition = (a, b) => { 
	result = parseInt(a) + parseInt(b);
	setResult(`${a} + ${b} = ${result}`); 
};
const minus = (a, b) => { 
	result = parseInt(a) - parseInt(b);
	setResult(`${a} - ${b} = ${result}`); 
};
const proiz = (a, b) => { 
	result = parseInt(a) * parseInt(b);
	setResult(`${a} * ${b} = ${result}`); 
};
const delen = (a, b) => { 
	result = parseInt(a) / parseInt(b);
	setResult(`${a} / ${b} = ${result}`); 
};