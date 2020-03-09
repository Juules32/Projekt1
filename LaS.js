



// Startværdien
var startVal = 1; // document.getElementById("start").value;

// prev, en midlertidig værdi som repræsenterer n værdier gennem beregningstiden
var prev = [startVal];

// next, værdien som indeholder de kommende tal
var next = []

//LaSLength er mængden af cifre ved n'te iteration
var LaSLength = []

var all = [];

function nextNumber () {

    if (prev.length >= 1) {
        if(prev[0] != prev[1]) {
            next.push(1,prev[0])
            prev.splice(0,1)
        }
        else if(prev[0] == prev [1] && prev[0] != prev[2]) {
            next.push(2, prev[0])
            prev.splice(0,2)
        }
        else if(prev[0] == prev[1] && prev[0] == prev[2]) {
            next.push(3,prev[0])
            prev.splice(0,3)
        }
        nextNumber()
    }
    else {
        
        all.push(next.join(''));

        LaSLength.push(next.length);


        
        // prev bliver til next, og next bliver nulstillet
        prev = next
        next = []
    }
}

//gentagLaS funktionen gentager nextNumber 'repeats' gange
function gentagLaS (type) {
    //Værdier nulstilles knappen kan klikkes flere gange uden fejl
    LaSLength = [0, 1]
    prev = [startVal]
    all = ["0",startVal]

    var repeats = document.getElementById("gentagelser").value
    for (let i = 0; i < repeats - 1; i++) {
        nextNumber()
    }

    if(type == "values") {
        console.clear()

        console.table(all)
        document.getElementById("numre").innerHTML = all
    }

    if (type == "length") {
        console.clear()
        console.table(LaSLength)
        document.getElementById("tal").innerHTML = LaSLength
    }
}