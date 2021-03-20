// Your code here


function mapToNegativize(num) {
    let n = [];

    for(let i = 0; i < num.length; i++) {
        n.push(-1 * num[i]);
    }
    return n;
}

function mapToNoChange(num) {
    let n = [];

    for(let i = 0; i < num.length; i++) {
        n.push(num[i]);
    }
    return n;
}

function mapToDouble(num) {
    let n = [];

    for(let i = 0; i < num.length; i++) {
        n.push(2 * num[i]);
    }
    return n;
}

function mapToSquare(num) {
    let n = [];

    for(let i = 0; i < num.length; i++) {
        n.push(num[i] * num[i]);
    }
    return n;
}

//---------------------------------------------------------


function reduceToTotal(num, startPoint = 0) {
    let total = startPoint;

    for(let i = 0; i < num.length; i++) {
        total = total + num[i];
    }
    return total;
}

function reduceToAllTrue(b) {

    for(let i = 0; i < b.length; i++) {
        if(!b[i]) return false;
    }
    return true;
}

function reduceToAnyTrue(b) {
    
    for(let i = 0; i < b.length; i++) {
        if(b[i]) return true;
    }
    return false;
}