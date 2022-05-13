function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    
    let x1: number = 0;
    let div: number = x;
    while (div > 0) {
        const quotient: number = Math.floor(div / 10);
        const reminder: number = div - quotient * 10;
        div = quotient;
        x1 = x1 * 10 + reminder;
    }
    
    return x === x1;
    
};