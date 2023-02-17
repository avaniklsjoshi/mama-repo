export default function LongestPalindrome() {
  const longestPalindrome = function (s: string) {
    const seen = new Set();
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      if (!seen.has(s[i])) {
        seen.add(s[i]);
      } else {
        seen.delete(s[i]);
        count += 2;
      }
    }
    return count + (seen.size > 0 ? 1 : 0);
  };

  interface testObjectType {
    [key: number]: number;
  }
  const majorityElement = function (nums: number[]) {
    // Solution 1
    const map: testObjectType = {};
    const maxVal = nums.length / 2;
    for (let i = 0; i < nums.length; i++) {
      map[nums[i]] = map[nums[i]] + 1 || 1; //imp
      if (map[nums[i]] > maxVal) return nums[i];
    }

    // Solution 2
    if (nums.length == 1) return nums[0];
    const numbers: testObjectType = {};
    for (let i = 0; i < nums.length; i++) {
      if (!numbers[nums[i]]) {
        // below if else can be removed with line 24,  map[nums[i]] = map[nums[i]] + 1 || 1;
        numbers[nums[i]] = 1;
      } else {
        numbers[nums[i]] += 1;
        if (numbers[nums[i]] > maxVal) {
          return nums[i];
        }
      }
    }
  };
  return (
    <>
      <div>Longest Palindrome: {longestPalindrome("abccccdd")}</div>
      <div>Majority Element: {majorityElement([3, 2, 3])}</div>
    </>
  );
}
