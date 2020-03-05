var prev = [1]
var next = []
var all = [prev.length]

console.log(prev)

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
        all.push(next.length)
        

        prev = next
        next = []
    }
}

function gentagLaS (repeats) {
    for (let i = 0; i < repeats; i++) {
        console.log(i)
        console.log(prev)
        console.log(next)
        nextNumber()
    }
}

gentagLaS(100);