/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   
    // Handle edge case where the array is empty
    if (nums.length === 0) {
        return 0;
    }
    
    // Initialize the index for the last unique element
    let k = 0;
    
    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k]) {
            k++;
            nums[k] = nums[i];
        }
    }
    
    // The number of unique elements is k + 1
    return k + 1;


};