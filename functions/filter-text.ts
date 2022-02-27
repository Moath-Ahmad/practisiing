
function filterVowels(text) {
    console.log(text);
    const vowels: any = 'aeiou';
    let constanct: any = [];

    console.log(text.length);
    for (let i = 0; i < text.length - 1; i++) {
        if (vowels.includes(text[i])) {
            console.log(text[i])
        } else {
            constanct += text[i] + '\n';
        }
    };
    console.log(constanct.trim())
}
filterVowels('javascriptloops');