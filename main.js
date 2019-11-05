(function ff() {
    let wrapper = document.createElement('div')
    wrapper.className = "wrapper"
    let textarea = document.createElement('textarea')
    textarea.id = "textarea";
    textarea.maxLength = 0;
    let keyboard = document.createElement('div')
    keyboard.className = "keyboard"
    document.body.appendChild(wrapper);
    wrapper.appendChild(textarea)
    wrapper.appendChild(keyboard)
    let row = [[["key", "Backquote", "ё", "Ё", "`", "~"],
    ["key", "Digit1", "1", "!", "1", "!"],
    ["key", "Digit2", "2", "''", "2", "@"],
    ["key", "Digit3", "3", "№", "3", "#"],
    ["key", "Digit4", "4", ";", "4", "$"],
    ["key", "Digit5", "5", "%", "5", "%"],
    ["key", "Digit6", "6", ":", "6", "^"],
    ["key", "Digit7", "7", "?", "7", "&"],
    ["key", "Digit8", "8", "*", "8", "*"],
    ["key", "Digit9", "9", "(", "9", "("],
    ["key", "Digit0", "0", ")", "0", ")"],
    ["key", "Minus", "-", "_", "-", "_"],
    ["key", "Equal", "=", "+", "=", "+"],
    ["key backspace", "Backspace", "Backspace", "Backspace", "Backspace", "Backspace"]],
    [["key tab", "Tab", "Tab", "Tab", "Tab", "Tab"],
    ["key", "KeyQ", "й", "Й", "q", "Q"],
    ["key", "KeyW", "ц", "Ц", "w", "W"],
    ["key", "KeyE", "у", "У", "e", "E"],
    ["key", "KeyR", "к", "К", "r", "R"],
    ["key", "KeyT", "е", "Е", "t", "T"],
    ["key", "KeyY", "н", "Н", "y", "Y"],
    ["key", "KeyU", "г", "Г", "u", "U"],
    ["key", "KeyI", "ш", "Ш", "i", "I"],
    ["key", "KeyO", "щ", "Щ", "o", "O"],
    ["key", "KeyP", "з", "З", "p", "P"],
    ["key", "BracketLeft", "х", "Х", "[", "{"],
    ["key", "BracketRight", "ъ", "Ъ", "]", "}"],
    ["key", "Backslash", "\\", "/", "\\", "|"],
    ["key del", "Delete", "DEL", "DEL", "DEL", "DEL"]],
    [["key capslock", "CapsLock", "CapsLock", "CapsLock", "CapsLock", "CapsLock"],
    ["key", "KeyA", "ф", "Ф", "a", "A"],
    ["key", "KeyS", "ы", "Ы", "s", "S"],
    ["key", "KeyD", "в", "В", "d", "D"],
    ["key", "KeyF", "а", "А", "f", "F"],
    ["key", "KeyG", "п", "П", "g", "G"],
    ["key", "KeyH", "р", "Р", "h", "H"],
    ["key", "KeyJ", "о", "О", "j", "J"],
    ["key", "KeyK", "л", "Л", "k", "K"],
    ["key", "KeyL", "д", "Д", "l", "L"],
    ["key", "Semicolon", "ж", "Ж", ";", ":"],
    ["key", "Quote", "э", "Э", "'", "\" "],
    ["key enter", "Enter", "ENTER", "ENTER", "ENTER", "ENTER"]],
    [["key shift", "ShiftLeft", "Shift", "Shift", "Shift", "Shift"],
    ["key", "KeyZ", "я", "Я", "z", "Z"],
    ["key", "KeyX", "ч", "Ч", "x", "X"],
    ["key", "KeyC", "с", "С", "c", "C"],
    ["key", "KeyV", "м", "М", "v", "V"],
    ["key", "KeyB", "и", "И", "b", "B"],
    ["key", "KeyN", "т", "Т", "n", "N"],
    ["key", "KeyM", "ь", "Ь", "m", "M"],
    ["key", "Comma", "б", "Б", ".", "<"],
    ["key", "Period", "ю", "Ю", ",", ">"],
    ["key", "Slash", ".", ",", "/", "?"],
    ["key arrow", "ArrowUp", "▲", "▲", "▲", "▲"],
    ["key shift-right", "ShiftRight", "Shift", "Shift", "Shift", "Shift"]],
    [["key ctrl", "ControlLeft", "Ctrl", "Ctrl", "Ctrl", "Ctrl"],
    ["key win", "MetaLeft", "Win", "Win", "Win", "Win"],
    ["key alt", "AltLeft", "Alt", "Alt", "Alt", "Alt"],
    ["key space", "Space", " ", " ", " ", " "],
    ["key alt", "AltRight", "Alt", "Alt", "Alt", "Alt"],
    ["key arrow", "ArrowLeft", "◄", "◄", "◄", "◄"],
    ["key arrow", "ArrowDown", "▼", "▼", "▼", "▼"],
    ["key arrow", "ArrowRight", "►", "►", "►", "►"],
    ["key ctrl", "ControlRight", "Ctrl", "Ctrl", "Ctrl", "Ctrl"]]]
    for (let i = 0; i < row.length; i++) {
        let divRow = document.createElement('div');
        divRow.className = "row";
        keyboard.appendChild(divRow);
        for (let j = 0; j < row[i].length; j++) {
            let divKey = document.createElement('div');
            let spanOn = document.createElement('span');
            let spanOff = document.createElement('span');
            let spanRu = document.createElement('span');
            let spanRuUppercase = document.createElement('span');
            let spanEng = document.createElement('span');
            let spanEngUppercase = document.createElement('span');
            divKey.className = row[i][j][0];
            spanOn.className = row[i][j][1] + " on";
            spanOff.className = row[i][j][1] + " off";
            spanRu.className = "case down"
            spanRu.innerHTML = row[i][j][2]
            spanRuUppercase.className = "case up"
            spanRuUppercase.innerHTML = row[i][j][3]
            spanEng.className = "case down"
            spanEng.innerHTML = row[i][j][4]
            spanEngUppercase.className = "case up"
            spanEngUppercase.innerHTML = row[i][j][5]
            divRow.appendChild(divKey)
            divKey.appendChild(spanOn)
            divKey.appendChild(spanOff)
            if (localStorage.eng == 1) {
                spanOff.appendChild(spanRu)
                spanOff.appendChild(spanRuUppercase)
                spanOn.appendChild(spanEng)
                spanOn.appendChild(spanEngUppercase)
            }
            else {
                spanOn.appendChild(spanRu)
                spanOn.appendChild(spanRuUppercase)
                spanOff.appendChild(spanEng)
                spanOff.appendChild(spanEngUppercase)
            }

            let elemsDown = document.getElementsByClassName('down');
            let elemsUp = document.getElementsByClassName('up');
            divKey.addEventListener("click", (e) => {
                divKey.classList.add("active")
                setTimeout(function () {
                    divKey.classList.remove("active")
                }, 150);
                if (e.target.innerText === "Backspace") {
                    textarea.value = textarea.value.slice(0, -1)
                }
                else if (e.target.innerText === "CapsLock" || e.target.innerText === 'Shift') {
                    for (let i = 0; i < elemsDown.length; i++) {
                        elemsDown[i].classList.toggle("displayNone")
                        elemsUp[i].classList.toggle("displayInherit")
                    }
                }
                else if (e.target.innerText !== "Tab"
                    && e.target.innerText !== "Ctrl"
                    && e.target.innerText !== "Win"
                    && e.target.innerText !== "Alt"
                    && e.target.innerText !== "ENTER"
                    && e.target.innerText !== "DEL"
                    && e.target.innerText !== "") {
                    textarea.value += e.target.innerText
                }
                else if (e.target.innerText === "") {
                    textarea.value += " "
                }
            })

            document.addEventListener('keydown', (e) => {
                if (e.code === divKey.firstChild.classList[0]) {
                    divKey.classList.add("active")

                    if (e.ctrlKey && e.code === 'ShiftLeft') {
                        let elemsOff = document.getElementsByClassName('off');
                        let elemsOn = document.getElementsByClassName('on');
                        if (localStorage.eng == 1) {
                            localStorage.setItem('eng', 0)
                        }
                        else {
                            localStorage.setItem('eng', 1)
                        }
                        for (let i = 0; i < elemsOn.length; i++) {
                            elemsOn[i].classList.toggle("displayNone")
                            elemsOff[i].classList.toggle("displayInherit")
                        }
                    }
                    else if (e.code === 'CapsLock') {
                        for (let i = 0; i < elemsDown.length; i++) {
                            elemsDown[i].classList.toggle("displayNone")
                            elemsUp[i].classList.toggle("displayInherit")
                        }
                    }
                    else if (e.code === 'ShiftLeft') {
                        for (let i = 0; i < elemsDown.length; i++) {
                            elemsDown[i].classList.add("displayNone")
                            elemsUp[i].classList.add("displayInherit")
                        }
                    }
                    else if (divKey.innerText === "") {
                        textarea.value += " "
                    }
                    else if (e.keyCode === 9) { e.preventDefault();
                        e.stopPropagation(); }
                    else if (divKey.innerText !== "Tab"
                        && divKey.innerText !== "Shift"
                        && divKey.innerText !== "Ctrl"
                        && divKey.innerText !== "Win"
                        && divKey.innerText !== "Alt"
                        && divKey.innerText !== "ENTER"
                        && divKey.innerText !== "DEL"
                        && divKey.innerText !== ""
                    ) {
                        if (divKey.innerText === "Backspace" && document.activeElement.localName !== "textarea") {
                            textarea.value = textarea.value.slice(0, -1)
                        }
                        else if (divKey.innerText !== "Backspace") {
                            textarea.value += divKey.innerText
                        }
                    }
                }
            })
            document.addEventListener('keyup', (e) => {
                if (e.code === divKey.firstChild.classList[0]) {
                    divKey.classList.remove("active")
                    if (e.code === 'ShiftLeft') {
                        for (let i = 0; i < elemsDown.length; i++) {
                            elemsDown[i].classList.remove("displayNone")
                            elemsUp[i].classList.remove("displayInherit")
                        }
                    }
                }

            })
        }

    }
})()

