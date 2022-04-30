Array.prototype.arrFizzBuzz = function () {
  let strArr = []
  for (item in this) {
    if (item % 3 == 0 && item % 5 == 0) {
      strArr.push('fizzbuzz')
    } else if (item % 5 == 0) {
      strArr.push('buzz')
    } else if (item % 3 == 0) {
      strArr.push('fizz')
    } else {
      strArr.push(item)
    }
  }
  return strArr
}

let arr = [1, 5, 15, 12]

console.log(arr.arrFizzBuzz())
