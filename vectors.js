var Trig = {
	dotprod: function(a1, a2, b1, b2, round) {
		var dotProduct = (a1 * b1) + (a2 * b2),
			angleA = ((a1) ** 2) + ((a2) ** 2),
			angleB = ((b1) ** 2) + ((b2) ** 2),
			angleBetweenRad = Math.acos(dotProduct / Math.sqrt(angleA * angleB)),
			angleBetweenDeg = angleBetweenRad * 180 / Math.PI;
		
		console.log(
			'vector a = ' + a1 + 'i' + (a2 > 0 ? '+' : '-') + Math.abs(a2) + 'j' + '\r\n' +
			'vector b = ' + b1 + 'i' + (b2 > 0 ? '+' : '-') + Math.abs(b2) + 'j' + '\r\n' +
			'dot product a * b = ' + dotProduct + '\r\n' +
			'angle between: radians: ' + angleBetweenRad + ', degrees: ' + angleBetweenDeg + '\r\n' +
			'rounded to ' + dec + ' decimal place(s): radians: ' + angleBetweenRad.toFixed(round) + ', degrees: ' + angleBetweenDeg.toFixed(round) + '\r\n'
		);
		
		return {
			dotProduct: dotProduct,
			angleBetween: {
				radians: {
					raw: angleBetweenRad,
					rounded: angleBetweenRad.toFixed(round)
				},
				degrees: {
					raw: angleBetweenDeg,
					rounded: angleBetweenDeg
				}
			}
		}
	}
}
