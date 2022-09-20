document.addEventListener("keydown", function (ev) {
    switch (ev.code) {
        case "KeyC":
            document.getElementById("keyC").play();
            break;
        case "KeyU":
            document.getElementById("keyU").play();
            break;
        case "KeyR":
            document.getElementById("keyR").play();
            break;
        case "KeyS":
            document.getElementById("keyS").play();
            break;
        case "KeyO":
            document.getElementById("keyO").play();
            break;
        default:
            alert("Press any key of: C, U, R, S or O")
    }
});

class Melody {
    constructor(el) {
        this._el = el;
        el.onclick = this.onClick.bind(this);
    }

    keyC() {
        document.getElementById("keyC").play();
    }

    keyU() {
        document.getElementById("keyU").play();
    }

    keyR() {
        document.getElementById("keyR").play();
    }

    keyS() {
        document.getElementById("keyS").play();
    }

    keyO() {
        document.getElementById("keyO").play();
    }

    keyR2() {
        document.getElementById("keyR").play();
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    }
}

new Melody(melody);