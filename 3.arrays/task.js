//Задание 1
function compareArrays(arr1, arr2) {
  let result = (arr1.length === arr2.length && arr1.every((item, idx) => item === arr2[idx]));
    return result;
}

//Задание 2
function advancedFilter(arr) {
  let resultArr = arr.filter((plus) => plus > 0)
    .filter ((multiplicity) => multiplicity % 3 === 0)
    .map ((multiplication) => multiplication * 10)
   return resultArr; // array
}