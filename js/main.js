let numberString1 = ''
let dot = 0 
let number1 = 0, number2 = 0, plus=0, minus=0, multi=0, slash=0
let number
function numberScreen(numberString) {
    let i, nameId, nameIdDot, dotInput = 0
    for (let i = 1; i < 7; i++) {
        nameId = 'number' + i
        document.getElementById(nameId).innerText = ""
        if (nameId == 'number1') {document.getElementById('number1').style.right = '47px'}
        if (nameId == 'number2') { document.getElementById('number2').style.right = '117px'}
        if (nameId == 'number3') { document.getElementById('number3').style.right = '187px'}
        if (nameId == 'number4') { document.getElementById('number4').style.right = '257px'}
        if (nameId == 'number5') { document.getElementById('number5').style.right = '327px'}
        if (nameId == 'number6') {document.getElementById('number6').style.right = '397px'}
        nameId = 'dot' + i
        document.getElementById(nameId).innerText = ""
    }
    if (numberString.length > 0) {
        if (numberString.indexOf('.') == (-1)) {
            dot=0
        } else {
            dot=1
        }
        if (numberString.length > (6 + dot) && (Number(numberString) < 1000000) && Number(numberString) > 0.00001) {
            console.log(numberString)
            console.log(Number(numberString))
            numberString = numberString.substring(0, (6 + dot))
        } else {
            if ((Number(numberString) >= 1000000) || ((numberString.length > (6 + dot)) && (Number(numberString) < 0.00001))) {
                numberString = 'ERROR'
                dot=0
            }
        }
        
        for (let i = 0; i <= numberString.length - 1; i++) {
            nameId = 'number' + (numberString.length - dot - i + dotInput)
            if (numberString[i] == '1') {
                if (nameId == 'number1') {document.getElementById('number1').style.right = '40px'}
                if (nameId == 'number2') { document.getElementById('number2').style.right = '110px'}
                if (nameId == 'number3') { document.getElementById('number3').style.right = '180px'}
                if (nameId == 'number4') { document.getElementById('number4').style.right = '250px'}
                if (nameId == 'number5') { document.getElementById('number5').style.right = '320px'}
                if (nameId == 'number6') {document.getElementById('number6').style.right = '390px'}
            }
            if (numberString[i] !== '.') {
                document.getElementById(nameId).innerText = numberString[i]
            } else {
                nameIdDot = 'dot' + (numberString.length - numberString.indexOf('.'))
                document.getElementById(nameIdDot).innerText = numberString[i]
                dotInput = 1
            }
        }
    }
}


function buttonClick(number) {
    if (numberString1.indexOf('.')==(-1)) {
        dot=0
    } else {
        dot=1
    }
    if (numberString1.length < (6 + dot)) {
        if (number !== '.') { numberString1 += number }
        if ((number == '.') && (numberString1.indexOf('.') == (-1))) {
            numberString1 += number
        }
        numberScreen(numberString1)
    } 
}


function buttonClickClean() {
    numberString1 = ''
    numberScreen(numberString1)
}

function buttonClickBack() {
    let str
    numberString1 = numberString1.substring(0, numberString1.length - 1)
    numberScreen(numberString1)
}
function buttonClickPlus() {
    if (plus == 0) {
        number1 = Number(numberString1)
        numberString1 = ""
        plus=1
        numberScreen(numberString1)
    } else {
        plus = 2
        buttonClickEqual()
    }
    
}
function buttonClickMinus() {
    if (minus == 0) {
        number1 = Number(numberString1)
        numberString1 = ""
        minus=1
        numberScreen(numberString1)
    } else {
        minus = 2
        buttonClickEqual()
    }
}

function buttonClickSlash() {
    if (slash == 0) {
        number1 = Number(numberString1)
        numberString1 = ""
        slash=1
        numberScreen(numberString1)
    } else {
        slash = 2
        buttonClickEqual()
    }
}

function buttonClickMulti() {
    if (multi == 0) {
        number1 = Number(numberString1)
        numberString1 = ""
        multi=1
        numberScreen(numberString1)
    } else {
        multi = 2
        buttonClickEqual()
    }
}

function zeroing() {
    numberScreen(number)
    number1 = ""
    number2 = ""
    numberString1 = ""
}
function zeroing2() {
    numberScreen(number)
    number2 = ""
    numberString1 = ""
}
function buttonClickEqual() {
    if (number1 !== "") {
        number2 = Number(numberString1)
        if (plus == 1) {
            number = String(number1 + number2)
            zeroing()
            plus = 0
        }
        if (plus == 2) {
            number = String(number1 + number2)
            number1 = number1 + number2
            zeroing2()
            plus = 1
        }
        if (minus == 1) {
            number = String(number1 - number2)
            zeroing()
            minus = 0 
        }
        if (minus == 2) {
            number = String(number1 - number2)
            number1 = number1 - number2
            zeroing2()
            minus = 1
        }
        if (slash == 1) {
            number = String(number1 / number2)
            zeroing()
            slash = 0 
        }
        if (slash == 2) {
            number = String(number1 / number2)
            number1 = number1 / number2
            zeroing2()
            slash = 1
        }
        if (multi == 1) {
            number = String(number1 * number2)
            zeroing()
            multi = 0 
        }
        if (multi == 2) {
            number = String(number1 * number2)
            number1 = number1 * number2
            zeroing2()
            multi = 1
        }
    }
}
