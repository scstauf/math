const LogicGate = {
	xor: (a, b) => !((a && b) || (!a && !b)),
	or: (a, b) => a || b,
	and: (a, b) => a && b,
	not: (a) => !a,
	nand: (a, b) => LogicGate.not(LogicGate.and(a, b)),
	nor: (a, b) => LogicGate.not(LogicGate.or(a, b)),
	xnor: (a, b) => LogicGate.not(LogicGate.xor(a, b))
};

const printTable = (callback) => {
	const truthtest = [
		{ a: false, b: false },
		{ a: true, b: false },
		{ a: false, b: true },
		{ a: true, b: true },
	];
	
	console.log(`logic gate: ${callback.name}`);
	console.log(`in\tin\tout\r\n${'-------------'.repeat(2)}`);
	
	for (let i in truthtest) {
		let test = truthtest[i],
			a = test.a,
			b = test.b,
			c = callback(a, b);
		
		console.log(`${a}\t${b}\t${c}`);
	}
	
	console.log();
}

printTable(LogicGate.xor);
printTable(LogicGate.or);
printTable(LogicGate.and);
printTable(LogicGate.nand);
printTable(LogicGate.nor);
printTable(LogicGate.xnor);
