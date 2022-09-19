document.addEventListener("keydown", function (event) {
    switch (event.code) {
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
})
