const screenNumber = document.getElementById('screen-numbers')
let screenOperation = document.getElementById('screen-operation')

const buttons = document.getElementById("buttons").childNodes
let punto = false

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        if (buttons[i].innerHTML >= 0 && buttons[i].innerHTML <= 9) {
            if (screenNumber.innerHTML === '0') {
                screenNumber.innerHTML = buttons[i].innerHTML
            } else {
                screenNumber.innerHTML += buttons[i].innerHTML
            }
        }

        if (buttons[i].innerHTML === '.') {
            if (punto === false) {
                screenNumber.innerHTML += '.';
                punto = true
            }
        }

        if (buttons[i].innerHTML === '⁺/-') {
            if (screenNumber.innerHTML !== '0') {
                screenNumber.innerHTML = Number(screenNumber.innerHTML) * -1;
            }
        }

        if (buttons[i].innerHTML === '+') {
            operation = 'sum'
            punto = false
            if (screenNumber.innerHTML !== '0') {
                firstData = screenNumber.innerHTML
                screenOperation.innerHTML = firstData + ' + '
                screenNumber.innerHTML = '0'
            }
        }

        if (buttons[i].innerHTML === '-') {
            operation = 'subtraction'
            punto = false
            if (screenNumber.innerHTML !== '0') {
                firstData = screenNumber.innerHTML
                screenOperation.innerHTML = firstData + ' - '
                screenNumber.innerHTML = '0'
            }
        }

        if (buttons[i].innerHTML === 'x') {
            operation = 'multiplication'
            punto = false
            if (screenNumber.innerHTML !== '0') {
                firstData = screenNumber.innerHTML
                screenOperation.innerHTML = firstData + ' x '
                screenNumber.innerHTML = '0'
            }
        }

        if (buttons[i].innerHTML === '÷') {
            operation = 'division'
            punto = false
            if (screenNumber.innerHTML !== '0') {
                firstData = screenNumber.innerHTML
                screenOperation.innerHTML = firstData + ' ÷ '
                screenNumber.innerHTML = '0'
            }
        }

        if (buttons[i].innerHTML === '√') {
            punto = false
            if (screenNumber.innerHTML !== '0') {
                firstData = screenNumber.innerHTML
                screenOperation.innerHTML = 'sqr(' + firstData + ')'
                screenNumber.innerHTML = Math.sqrt(firstData)
            }
        }

        if (buttons[i].innerHTML === 'x²') {
            punto = false
            if (screenNumber.innerHTML !== '0') {
                firstData = screenNumber.innerHTML
                screenOperation.innerHTML = 'sqr(' + firstData + ')'
                screenNumber.innerHTML = Number(firstData) * Number(firstData)
            }
        }

        if (buttons[i].innerHTML === '¹/ₓ') {
            punto = false
            if (screenNumber.innerHTML !== '0') {
                firstData = screenNumber.innerHTML
                screenOperation.innerHTML = '1/(' + firstData + ')'
                screenNumber.innerHTML = Number(1) / Number(firstData)
            }
        }

        if (buttons[i].innerHTML === 'C') {
            punto = false
            screenNumber.innerHTML = '0'
            screenOperation.innerHTML = ''
        }

        if (buttons[i].innerHTML === '=') {
            punto = false
            secondData = screenNumber.innerHTML

            if (operation === 'sum') {
                screenNumber.innerHTML = ((Number(firstData) + Number(secondData))*100)/100
            }

            if (operation === 'subtraction') {
                screenNumber.innerHTML = ((Number(firstData) - Number(secondData))*100)/100
            }

            if (operation === 'multiplication') {
                screenNumber.innerHTML = ((Number(firstData) * Number(secondData))*100)/100
            }

            if (operation === 'division') {
                screenNumber.innerHTML = ((Number(firstData) / Number(secondData))*100)/100
            }

            screenOperation.innerHTML = screenOperation.innerHTML + secondData + ' ='
            firstData = 0
            secondData = 0
        }
    })
}

let operation = ''

let firstData = 0
let secondData = 0

let keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

document.addEventListener("keydown", function (event) {
    for (let i = 0; i < keys.length; i++) {
        if (event.key === keys[i]) {
            if (screenNumber.innerHTML === '0') {
                screenNumber.innerHTML = event.key
            } else {
                screenNumber.innerHTML += event.key
            }
        }
    }

    if (event.key === '+') {
        operation = 'sum'
        if (screenNumber.innerHTML !== '0') {
            firstData = screenNumber.innerHTML
            screenOperation.innerHTML = firstData + ' + '
            screenNumber.innerHTML = '0'
        }
    } else if (event.key === '-') {
        operation = 'subtraction'
        if (screenNumber.innerHTML !== '0') {
            firstData = screenNumber.innerHTML
            screenOperation.innerHTML = firstData + ' - '
            screenNumber.innerHTML = '0'
        }
    } else if (event.key === '*') {
        operation = 'multiplication'
        if (screenNumber.innerHTML !== '0') {
            firstData = screenNumber.innerHTML
            screenOperation.innerHTML = firstData + ' x '
            screenNumber.innerHTML = '0'
        }
    } else if (event.key === '/') {
        operation = 'division'
        if (screenNumber.innerHTML !== '0') {
            firstData = screenNumber.innerHTML
            screenOperation.innerHTML = firstData + ' ÷ '
            screenNumber.innerHTML = '0'
        }
    }

    if (event.key === 'Escape') {
        screenNumber.innerHTML = '0'
        screenOperation.innerHTML = ''
    }

    if (event.key === 'Enter') {
        secondData = screenNumber.innerHTML

        if (operation === 'sum') {
            screenNumber.innerHTML = Number(firstData) + Number(secondData)
        } else if (operation === 'subtraction') {
            screenNumber.innerHTML = Number(firstData) - Number(secondData)
        } else if (operation === 'multiplication') {
            screenNumber.innerHTML = Number(firstData) * Number(secondData)
        } else if (operation === 'division') {
            screenNumber.innerHTML = Number(firstData) / Number(secondData)
        }
        screenOperation.innerHTML = screenOperation.innerHTML + secondData + ' ='
        firstData = 0
        secondData = 0
    }
});