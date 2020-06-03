/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var cur = 0;
    var left = 0;
    var right = nums.length - 1;
    while(cur <= right){
        if(nums[cur] === 0){
            [nums[cur], nums[left]] = [nums[left], nums[cur]];
            cur++;
            left++;
        } else if(nums[cur] === 2){
            [nums[cur], nums[right]] = [nums[right], nums[cur]];
            right--;
        } else{
            cur++;
        }
    }
    return nums;
    
};