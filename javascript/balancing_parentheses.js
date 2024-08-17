function balancingParentheses(string) {
  let openings = 0;
  let missing = 0;

  for (let i = 0; i < string.length; ++i) {
    if (string[i] === "(") {
      ++openings;
      continue;
    }

    if (openings > 0) {
      --openings;
    } else {
      ++missing;
    }
  }
  return openings + missing;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses("(()())"));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses("()))"));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(")"));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// Declare constant "count" equal to 0
// Check the first character in the string: if it's an open, add 1 to count; if close, subtract 1 from count
// recurse using the string, minus its first letter
// return the absolute value of count
// And a written explanation of your solution
