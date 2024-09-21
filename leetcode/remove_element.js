const arr = [0,1,2,2,3,0,4,2];
const val = 2;

var removeElement = function(nums, val) {
  let k = 0;
  let i = 0;
  while (i < nums.length - 1 - k) {
    if (nums[i] === val) {
      const elementToSwap = nums[nums.length - 1 - k];
      nums[nums.length - 1 - k] = nums[i];
      nums[i] = elementToSwap;
      k++;
    } else {
      i++;
    }
  }

  return k;
};
const res = removeElement(arr, val);
console.log('k: ' + res);
console.log('nums: ' + arr);
