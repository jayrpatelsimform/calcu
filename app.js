var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');





for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        switch (btntext) {
            case '×':
                btntext = '*';
                break;
            case '÷':
                btntext = '/';
                break;
            case 'mod':
                btntext = '%';
                break;

        }
        screen.value += btntext;
    });
}



function pow() {
    screen.value = Math.pow(screen.value, 2);
}



function sqrt() {
    screen.value = Math.sqrt(screen.value, 1 / 2);
}

function exp() {

    screen.value = Math.exp(screen.value);

}

function pi() {
    if (screen.value == 0) {
        screen.value = 3.14;
    } else {
        screen.value = screen.value * Math.PI;
    }
}

function log() {
    screen.value = Math.log10(screen.value);
}

function ln() {
    screen.value = Math.log(screen.value);
}

function fact() {
    var i, num, f;
    if (screen.value == 0) {
        f = 0;
    } else {
        f = 1;
    }
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;

    screen.value = f;
}


function divide() {
    screen.value = 1 / screen.value;
}

function powx() {
    screen.value = 10 ** screen.value;
}

function negpos() {

    if (screen.value == 0) {
        screen.value = '-';
    } else {
        screen.value = screen.value * -1;
    }
}


function e() {
    if (screen.value == 0) {
        screen.value = Math.E;
    } else {
        screen.value = screen.value * Math.E;
    }
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function cot() {
    screen.value = Math.cot(screen.value);
}


/**
 * handle all type of memory opeartionsdfsdfsdfsdfsdfsdfsdf 
 *
 * @param   {string}  opration  take which opeartion to perform
 *
 * @return  {int}            return result of an expersion
 */
function memory(opration) {
    var memory = document.getElementById("memory");
    screen.value = eval(screen.value);
    if (isNaN(screen.value) != false) {
        screen.value = "Math Error";
    } else {
        switch (opration) {
            case '+':
                screen.value = parseInt(memory.value) + parseInt(screen.value);
                break;
            case '-':
                screen.value = parseInt(memory.value) - parseInt(screen.value);
                break;

        }
        memory.value = screen.value;
    }

}

/**
 * convert normal number to expontaiol
 *
 * @return  {exponation}  returned exponation number
 */
function fe() {
    var num = parseInt(screen.value);
    screen.value = num.toExponential();

}


function change() {

    var state = document.getElementById('snd');

    // console.log( document.getElementsByClassName("ndd"));
    switch (state.value) {
        case '0':
            document.getElementById('dd1').style.display = "none";
            document.getElementById('dd2').style.display = "";
            state.value = "1";
            // document.getElementsByClassName("ndd").innerText = "1<sup>st</sup>";
            break;

        case '1':
            document.getElementById('dd1').style.display = "";
            document.getElementById('dd2').style.display = "none";
            //    document.getElementsByClassName("ndd").innerText = "2<sup>nd</sup>";
            state.value = "0";
            break;
    }
}