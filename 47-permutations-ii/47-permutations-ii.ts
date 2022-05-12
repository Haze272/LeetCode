function permuteUnique(nums: number[]): number[][] {
    let map: {[key: number]: number} = {};
    for(let num of nums) {
        map[num] = map[num] || 0;
        map[num]++
    }
    let result: number[][] = [];
    let perm: number[] = [];
    
    function helper() {
        if(perm.length == nums.length) {
            result.push([...perm]);
            return;
        }
        for(let num in map) {
            if(map[num] > 0) {
                perm.push(+num);
                map[num]--;
                helper();
                perm.pop();
                map[num]++;
            }
        }
    }
    
    helper();
    return result;
};