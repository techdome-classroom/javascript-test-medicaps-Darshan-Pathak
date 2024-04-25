


function longestSubstring(s) {
    let windowStart = 0;
    let maxLength = 0;
    let charIndexMap = new Map();

    
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const currentChar = s[windowEnd];

        
        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= windowStart) {
            
            windowStart = charIndexMap.get(currentChar) + 1;
        }

        
        charIndexMap.set(currentChar, windowEnd);

        // Calculate the new length of the substring
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}

module.exports = { longestSubstring };
