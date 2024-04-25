function smallestMissingPositiveInteger(nums) {

  // Implement the function smallest_missing_positive_integer

}

module.exports = smallestMissingPositiveInteger;

function smallestMissingPositiveInteger(nums) {
  const n = nums.length;

  for (let i = 0; i < n; ++i) {
      // Swap elements to their correct positions if they are positive and
      // within the array index bounds, and if the target position doesn't already have the correct number.
      while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
          let correctPos = nums[i] - 1;
          [nums[i], nums[correctPos]] = [nums[correctPos], nums[i]];  // Swapping using destructuring
      }
  }

  // After reordering, find the first index that does not have the correct number
  // (i.e., number at index i should be i + 1)
  for (let i = 0; i < n; ++i) {
      if (nums[i] !== i + 1) {
          return i + 1;
      }
  }

  // If all numbers from 1 to n are present, then the smallest missing positive is n + 1
  return n + 1;
}

module.exports = smallestMissingPositiveInteger;
