function isValid(s: string): boolean {
    let stack: string[] = [];
    
    for (let i: number = 0; i < s.length; i++) {
        if (s[i] == "{" || s[i] == "(" || s[i] == "[") {
            stack.push(s[i]);
        }
        else if (stack.slice(-1) + s[i] == "{}" || stack.slice(-1) + s[i] == "()" || stack.slice(-1) + s[i] == "[]") {
            stack.pop();
        }
        else {
            return false;
        }
    }
    
    return stack.length == 0;
}



// [()]