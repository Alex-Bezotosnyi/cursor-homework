export function deleteDuplicateLetter(str) {
    str = str.toLowerCase().split("");
    let result = str.filter(function (value, i, str) {
            return str.lastIndexOf(value) === str.indexOf(value);
        }
    );
    return result.join("");
}