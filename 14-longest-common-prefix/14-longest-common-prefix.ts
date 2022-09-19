function longestCommonPrefix(strs: string[]): string {
    if (strs.length == 0) return "";
    else if(strs.length == 1) return strs[0];
    let prefix: string = "";
    
    let buff = strs[0];
    for (let i: number = 1; i < strs.length; i++) {
        prefix = "";
        let maxStr: number = buff.length >= strs[i].length ? buff.length : strs[i].length;
        for (let j: number = 0; j < maxStr; j++) {
	        if (buff[j] == strs[i][j]) {
		        prefix += buff[j];
	        } else {
		        break;
	        }
        }
        buff = prefix;
        
    }
    
    return prefix;
};