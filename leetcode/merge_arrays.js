// https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = m + n - 1;
  let nums1Index = m - 1;
  let nums2Index = n - 1;

  while (nums1Index >= 0 && nums2Index >= 0) {
    if (nums1[nums1Index] > nums2[nums2Index]) {
      nums1[i] = nums1[nums1Index];
      nums1Index--;
    } else {
      nums1[i] = nums2[nums2Index];
      nums2Index--;
    }
    i--;
  }

  while (nums2Index >= 0) {
    nums1[i] = nums2[nums2Index];
    nums2Index--;
    i--;
  }
};


// const arr1 = [1,2,3,0,0,0];
// const arr2 = [2,5,6];
// const m = 3;
// const n = 3;

// merge(arr1, m, arr2, n);

const arr1 = [2,0];
const arr2 = [1];
const m = 1;
const n = 1;

merge(arr1, m, arr2, n);

console.log(arr1);