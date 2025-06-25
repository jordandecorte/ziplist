// Function using a loop
function zipList(list1, list2) {
  const result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}

// Function using array methods (functional approach)
function zipListTheFunctionalWay(list1, list2) {
  return list1.flatMap((item, i) => [item, list2[i]]);
}

// Test output
console.log(zipList(['a', 'b', 'c'], [1, 2, 3])); // ['a', 1, 'b', 2, 'c', 3]
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3])); // ['a', 1, 'b', 2, 'c', 3]
