export function replaceBadWords(string) {
    let badWords = ["fuck", "shit"];
    badWords.concat(badWords)
        .forEach((el) => (string = string
            .replaceAll(el, "*"
                .repeat(el.length)))
        );
    return string;
}