function main() {
	actualizar();
}

function actualizar() {
	fue = normalizar(document.getElementById('fue').value);
	des = normalizar(document.getElementById('des').value);
	con = normalizar(document.getElementById('con').value);
	car = normalizar(document.getElementById('car').value);
	int = normalizar(document.getElementById('int').value);
	sab = normalizar(document.getElementById('sab').value);

	document.getElementById('fue').value = fue;
	document.getElementById('des').value = des;
	document.getElementById('con').value = con;
	document.getElementById('car').value = car;
	document.getElementById('int').value = int;
	document.getElementById('sab').value = sab;

	document.getElementById('bfue').value = calcBono(fue);
	document.getElementById('bdes').value = calcBono(des);
	document.getElementById('bcon').value = calcBono(con);
	document.getElementById('bcar').value = calcBono(car);
	document.getElementById('bint').value = calcBono(int);
	document.getElementById('bsab').value = calcBono(sab);

	/* Calcular atributos secundarios */
	document.getElementById('mov').value = Math.floor(des/2);
	document.getElementById('lev').value = Math.floor(fue*2);
	document.getElementById('hp').value = Math.floor(con*5);
}

function normalizar(stat) {
	if (stat <= 0) {
		return 0;
	} else if (stat >= 100) {
		return 100;
	} else {
		return stat;
	}
}

function calcBono(stat, bono) {
	return Math.floor(parseInt(stat)/2 - 20);
}
