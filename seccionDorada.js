var intervalos = [0,2];
var x1 = null;
var x2 = null;

var contNumIteraciones = 0;
var errorMin = 1/100;


function getXi() {
	return parseFloat(intervalos[0]);
}
function setXi(newXi) {
	intervalos[0] = newXi;
}

function getXs() {
	return parseFloat(intervalos[1]);
}
function setXs(newXs) {
	intervalos[1] = newXs;
}

function fun(x) {
	return (-1.5 * (Math.pow(x, 6)) - 2 * (Math.pow(x, 4)) + 12*(x)).toFixed(4);
}

function getDistance() {
	return ((Math.sqrt(5) - 1)/2) * (getXs() - getXi());
}

function getX1(argument) {	 
	return (getXi() + getDistance()).toFixed(4);
}
function getX2(argument) {	 
	return (getXs() - getDistance()).toFixed(4);
}

function showLineX(final) {
	if (final) console.log(`%c <-${getXi()}------${x2}------${x1}------${getXs()}->`, 'font-weight: bold; font-size: 20px;color: red; margin: 0 auto');
	else console.log(`<-${getXi()}------${x2}------${x1}------${getXs()}->`);	
}

function iterar() {
	if (contNumIteraciones==0) {
		x1 = getX1();
		x2 = getX2();	
		showLineX();
	} 

	var evalFunX1 = fun(x1);
	var evalFunX2 = fun(x2);

	if (evalFunX1 > evalFunX2) {
		setXi(x2);
		x2 = x1;
		x1 = '?';
		showLineX();
		x1 = getX1();	
	} else {
		setXs(x1);
		x1 = x2;
		x2 = '?';
		showLineX();
		x2 = getX2();
	}

	contNumIteraciones++;
	return Math.abs(x1-x2);
}

do {
	var diferenceX = iterar();
} while(diferenceX > errorMin)

console.warn('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n%c 👇 SOLUCIÓN ENCONTRADA 👇\n', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
showLineX(true);