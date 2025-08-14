function caesarCipher(text, shift){
    return text.split('').map(char => {
        if(char.match(/[a-z]/)){
            const code = char.charAtCodeAt(0);

            const base = code >= 65 && code <= 90 ? 65 : 97;

            return String.fromCharCode(((code - base + shift) % 26) + base);
        }

        return char;
    }).join('');
}