/**
 * @param {number[]} nums
 * @return {number}
 */
// 利用动态规划，f(i)=max(f(i-1)+nums[i],nums[i])
var maxSubArray = function(nums) {
  let enb = 0, ans = nums[0]
  nums.forEach((x) => {
    // 计算以x为最后一项的数组的结果
    enb = Math.max(x, enb+x)
    // 更新结果
    ans = Math.max(ans, enb)
  })
  return ans
};

var maxSubArray = function(nums) {
  let len = nums.length
  let ans = -Infinity
  let dp = new Array(len+1).fill(0)
  for (let i = len-1; i>=0; i--) {
      dp[i] = dp[i+1] >= 0 ? nums[i] + dp[i+1] : nums[i]
      ans = Math.max(ans, dp[i])
  }
  return ans
};