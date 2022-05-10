function twoSum(nums: number[], target: number): number[] {
    let map = new Map();
    
    for (let i: number = 0; i < nums.length; i++) {
        if (map.has(nums[i])) return [map.get(nums[i]), i];
        
        map.set(target-nums[i], i);
    }
};