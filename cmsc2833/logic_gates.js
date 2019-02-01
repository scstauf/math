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

/*
>node logic_gates.js
logic gate: xor
in      in      out
--------------------------
false   false   false
true    false   true
false   true    true
true    true    false

logic gate: or
in      in      out
--------------------------
false   false   false
true    false   true
false   true    true
true    true    true

logic gate: and
in      in      out
--------------------------
false   false   false
true    false   false
false   true    false
true    true    true

logic gate: nand
in      in      out
--------------------------
false   false   true
true    false   true
false   true    true
true    true    false

logic gate: nor
in      in      out
--------------------------
false   false   true
true    false   false
false   true    false
true    true    false

logic gate: xnor
in      in      out
--------------------------
false   false   true
true    false   false
false   true    false
true    true    true
*/
