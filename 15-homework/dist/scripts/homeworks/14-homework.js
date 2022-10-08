"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _marked = /*#__PURE__*/regeneratorRuntime.mark(createIdGenerator),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(quantitySize);

function createIdGenerator() {
    var result;
    return regeneratorRuntime.wrap(function createIdGenerator$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    result = 1;

                case 1:
                    if (!true) {
                        _context.next = 6;
                        break;
                    }

                    _context.next = 4;
                    return result++;

                case 4:
                    _context.next = 1;
                    break;

                case 6:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked, this);
}

var idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

// Advanced
var mainText = document.querySelector(".main__main");
var changer = window.getComputedStyle(mainText);
var biggerQuantity = document.querySelector("#bigger");
var smallerQuantity = document.querySelector("#smaller");
var quantity = parseInt(changer.fontSize);
var changeQuantity = quantitySize(quantity);

function quantitySize(counter) {
    var el;
    return regeneratorRuntime.wrap(function quantitySize$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    if (!true) {
                        _context2.next = 14;
                        break;
                    }

                    _context2.next = 3;
                    return counter;

                case 3:
                    el = _context2.sent;

                    if (!(el === "+")) {
                        _context2.next = 9;
                        break;
                    }

                    _context2.next = 7;
                    return counter = counter + 2;

                case 7:
                    _context2.next = 12;
                    break;

                case 9:
                    if (!(el === "-")) {
                        _context2.next = 12;
                        break;
                    }

                    _context2.next = 12;
                    return counter = counter - 2;

                case 12:
                    _context2.next = 0;
                    break;

                case 14:
                case "end":
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}

var changeColor = document.querySelector(".cursor__logo");
biggerQuantity.addEventListener("click", function (event) {
    mainText.style.fontSize = changeQuantity.next("+").value + "px";
    changeColor.style.filter = "drop-shadow(4px 4px " + changeQuantity.next("+").value + "px black)";
});

smallerQuantity.addEventListener("click", function (event) {
    mainText.style.fontSize = changeQuantity.next("-").value + "px";
    changeColor.style.filter = "drop-shadow(4px 4px " + changeQuantity.next("-").value + "px black)";
});

exports.default = createIdGenerator;