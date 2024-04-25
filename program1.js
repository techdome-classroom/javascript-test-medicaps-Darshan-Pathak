function longestSubstring(s) {
    // Implementation of longestSubstring function
}

module.exports = { longestSubstring };


function longestSubstring(s) {
    let windowStart = 0;
    let maxLength = 0;
    let charIndexMap = new Map();

    // Slide the windowEnd over the string from left to right
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const currentChar = s[windowEnd];

        // If the character is already in the map and the index is within the current window
        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= windowStart) {
            // Move the start of the window right past the last occurrence of currentChar
            windowStart = charIndexMap.get(currentChar) + 1;
        }

        // Place the current character and its index into the map
        charIndexMap.set(currentChar, windowEnd);

        // Calculate the new length of the substring
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}

module.exports = { longestSubstring };
