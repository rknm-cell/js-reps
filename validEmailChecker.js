function validEmailChecker(email){
    const atSymbol = email.indexOf('@');
    const dotSymbol = email.lastIndexOf('.');

    const hasAt = atSymbol > 0;
    const hasDot = dotSymbol > atSymbol + 1
    const dotNotAtEnd = dotSymbol < email.length - 1;

    return hasAt && hasDot && dotNotAtEnd;

}
console.log(validEmailChecker('hello@gmail.com'))
console.log(validEmailChecker('hello'))
console.log(validEmailChecker('@.com'))