

function smallestMissingPositiveInteger(nums) {
  const n = nums.length;

  for (let i = 0; i < n; ++i) {
      
      while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
          let correctPos = nums[i] - 1;
          [nums[i], nums[correctPos]] = [nums[correctPos], nums[i]];  
      }
  }

  
  for (let i = 0; i < n; ++i) {
      if (nums[i] !== i + 1) {
          return i + 1;
      }
  }

  // If all numbers from 1 to n are present, then the smallest missing positive is n + 1
  return n + 1;
}

module.exports = smallestMissingPositiveInteger;
