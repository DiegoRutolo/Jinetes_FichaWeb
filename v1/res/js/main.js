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

	/* Calcular AC */
	document.getElementById('acBDES').value = calcBono(des);
	acArmadura = document.getElementById('acArmadura').value;
	acModRaza = document.getElementById('acModRaza').value;
	acExtras = document.getElementById('acExtras').value;
	document.getElementById('acTotal').value = 15 + calcBono(des) + parseInt(acArmadura) + parseInt(acModRaza) + parseInt(acExtras);
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

function nuevaLinea(lugar) {
	if (lugar == 'equipo') {
		document.getElementById('lineasEquipo').innerHTML += '<input type="text" class="lineaTexto">';
		document.getElementById('lineasPasivas').innerHTML += '<input type="text" class="lineaTexto">';
	}
}

function generarPj() {
	//Generales
	nombre = document.getElementById('iNom').value;
	raza = document.getElementById('iRaza').value;
	clase = document.getElementById('iClase').value;
	edad = document.getElementById('iEdad').value;
	altura = document.getElementById('iAltur').value;
	peso = document.getElementById('iPeso').value;

	//principales
	fue = normalizar(document.getElementById('fue').value);
	des = normalizar(document.getElementById('des').value);
	con = normalizar(document.getElementById('con').value);
	car = normalizar(document.getElementById('car').value);
	int = normalizar(document.getElementById('int').value);
	sab = normalizar(document.getElementById('sab').value);

	//Secundario
	apariencia = document.getElementById('apar').value;

	//Ac
	acArm = document.getElementById('acArmadura').value;
	acExtra = document.getElementById('acExtras').value;

	armTexto = document.getElementById('iACnomArmadura').value;

	var pj = {
		pj: {
			general: {
				nombre: document.getElementById('iNom').value,
				raza: document.getElementById('iRaza').value,
				clase: document.getElementById('iClase').value,
				edad: document.getElementById('iEdad').value,
				altura: document.getElementById('iAltur').value,
				peso: document.getElementById('iPeso').value
			},
			atributos: {
				fue: fue,
				des: des,
				con: con,
				car: car,
				int: int,
				sab: sab,
				apar: apariencia
			},
			ac: {
				acArm: acArm,
				acExtra: acExtra
			},
			pasivas: [],
			equipo: []
		}
	}

	for (i = 0; i < document.getElementById('lineasPasivas').children.length; i++) {
		hab = document.getElementById('lineasPasivas').children[i].value;
		pj['pj']['pasivas'].push(hab);
	}

	for (i = 0; i < document.getElementById('lineasEquipo').children.length; i++) {
		hab = document.getElementById('lineasEquipo').children[i].value;
		pj['pj']['equipo'].push(hab);
	}

	return pj;
}

function descargar() {
	var pj = generarPj();
	var jsonPj = JSON.stringify(pj);

	var blob = new Blob([jsonPj], {type: "application/json"});
	var url = URL.createObjectURL(blob);
	var fileName = "pj_"+pj['pj']['general']['nombre']+".json";

	var a = document.getElementById('linkDescarga');
	a.download = fileName;
	a.href = url;
	a.click();
}
