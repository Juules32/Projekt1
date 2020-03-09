function look(n) {
	var string = "";
	for (var i = 0; i < par(n).length; i++) {
		string+=String(par(n)[i].length)+String(par(n)[i][0])
	}
	return string
}

function par(number) {
	var ParArr = [];
	var Currentpar = ""
	number=String(number).split("")
	for (var i = 0; i < number.length; i++) {
		if(number[i]==number[i-1]){
			Currentpar+=String(number[i])
		}else{
			if(Currentpar!="")
				ParArr.push(Currentpar)
			Currentpar=""
			Currentpar+=String(number[i])
		}
	}
	ParArr.push(Currentpar)
	return ParArr
}

function rec(n){
	var number = look(n)
	count++
	console.log(count)
	rec(number)
}


// <script src="nicklas.js"></script>