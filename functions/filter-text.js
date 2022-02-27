function filterVowels(text) {
    console.log(text);
    var vowels = 'aeiou';
    var constanct = [];
    console.log(text.length);
    for (var i = 0; i < text.length - 1; i++) {
        if (vowels.includes(text[i])) {
            console.log(text[i]);
        }
        else {
            constanct += text[i] + '\n';
        }
    }
    ;
    console.log(constanct.trim());
}
filterVowels('javascriptloops');
