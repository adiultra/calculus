
// Numbers

function run1(){
    document.form.result.value += "1";
}

function run2(){
    document.form.result.value += "2";
}

function run3(){
    document.form.result.value += "3";
}

function run4(){
    document.form.result.value += "4";
}

function run5(){
    document.form.result.value += "5";
}

function run6(){
    document.form.result.value += "6";
}

function run7(){
    document.form.result.value += "7";
}

function run8(){
    document.form.result.value += "8";
}

function run9(){
    document.form.result.value += "9";
}

function run0(){
    document.form.result.value += "0";
}


// Functions

function runplus(){
    document.form.result.value += "+";
}

function rundiff(){
    document.form.result.value += "-";
}

function runprod(){
    document.form.result.value += "*";
}

function rundivi(){
    document.form.result.value += "/";
}

function runmodl(){
    document.form.result.value += "%";
}

function rundeci(){
    document.form.result.value += ".";
}

function runclear(){
    document.form.result.value = "";
}

function runbrktopen(){
    document.form.result.value += "(";
}

function runbrktcls(){
    document.form.result.value += ")";
}

function runsine(){
    document.form.result.value += "Math.sin(";
}

function runcos(){
    document.form.result.value += "Math.cos(";
}

function runtan(){
    document.form.result.value += "Math.tan(";
}

function runsqrt(){
    document.form.result.value += "Math.sqrt(";
}

// Result
function calcu(){
    var answer = eval(document.form.result.value);

    document.form.result.value = answer;
}
