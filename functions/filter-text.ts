
//this function extract all the vowels in the first and then add the other constanct after the vowels

function filterVowels(text) {
    const vowels: any = 'aeiou';
    let constanct: any = [];
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