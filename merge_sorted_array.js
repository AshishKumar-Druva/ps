/**
 * Problem *
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the 
number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, 
nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set 
to 0 and should be ignored. nums2 has a length of n.
* Input -> Output * 
    nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 -> [1,2,2,3,5,6]
    nums1 = [1], m = 1, nums2 = [], n = 0 -> [1]
    nums1 = [0], m = 0, nums2 = [1], n = 1 -> [1]
*/

/**
 Solution explanation

 Since the arrays are sorted, I am using binary search to find the insertion index of the nums2 value in nums1.
 For that, I have created a helper function findInsertionIndex that takes the nums2 value and nums1 slice and returns the 
 insertion index for the actual nums1 array.
 */
var merge = function (nums1, m, nums2, n) {
  let validNums1 = nums1.slice(0, m);
  let startIndex = 0;
  for (let i = 0; i < n; i++) {
    const insertionIndex = findInsertionIndex(nums2[i], validNums1, startIndex);
    nums1.splice(insertionIndex, 0, nums2[i]);
    nums1.pop();
    validNums1 = nums1.slice(insertionIndex, m + i + 1);
    startIndex = insertionIndex;
  }
  function findInsertionIndex(nums2Val, nums1Slice, nums1SliceStartIndex) {
    const halfIndex = parseInt(nums1Slice.length / 2);
    if (halfIndex === 0) {
      return nums1Slice[0] <= nums2Val
        ? 1 + nums1SliceStartIndex
        : 0 + nums1SliceStartIndex;
    }
    if (nums1Slice[halfIndex] <= nums2Val) {
      return findInsertionIndex(
        nums2Val,
        nums1Slice.slice(halfIndex, nums1Slice.length),
        nums1SliceStartIndex + halfIndex
      );
    } else {
      return findInsertionIndex(
        nums2Val,
        nums1Slice.slice(0, halfIndex),
        nums1SliceStartIndex
      );
    }
  }
};
