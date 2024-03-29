var minimumDeleteSum = function(s1, s2) {
  let m = s1.length
  let n = s2.length
  let dp = new Array(m+1).fill([]).map(() => new Array(n+1))
  dp[0][0] = 0
  for (let i = 1; i<=m; i++) {
    dp[i][0] = dp[i-1][0] + s1[i-1].charCodeAt()
  }
  for (let i = 1; i<=n; i++) {
    dp[0][i] = dp[0][i-1] + s2[i-1].charCodeAt()
  }
  for (let i = 1; i<=m; i++) {
    for (let j = 1; j<=n; j++) {
      if (s1[i-1] === s2[j-1]) {
        dp[i][j] = dp[i-1][j-1]
      } else {
        dp[i][j] = Math.min(dp[i-1][j]+s1[i-1].charCodeAt(), dp[i][j-1]+s2[j-1].charCodeAt())
      }
    }
  }
  return dp[m][n]
};
