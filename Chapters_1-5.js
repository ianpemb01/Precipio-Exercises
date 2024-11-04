// Exercises
// Calculate the time complexities for each of the exercise code snippets.
// Chapter 1
// 1.
function someFunction(n) {
  for (var i = 0; i < n * 1000; i++) {
    for (var j = 0; j < n * 20; j++) {
      console.log(i + j);
    }
  }
}

// Two nested loops mean a curve derived from O(n^2).

// 2.
function someFunction(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      for (var k = 0; k < n; k++) {
        for (var l = 0; l < 10; l++) {
          console.log(i + j + k + l);
        }
      }
    }
  }
}

// There are four nested loops and three run more then 10 ten times, making a curve of O(n^3).

// 3.
function someFunction(n) {
  for (var i = 0; i < 1000; i++) {
    console.log("hi");
  }
}

// This does not include a variable so it is linear O(n).

// 4.
function someFunction(n) {
  for (var i = 0; i < n * 10; i++) {
    console.log(n);
  }
}

// Constants are ignored, this is linear O(n).

// 5.
function someFunction(n) {
  for (var i = 0; i < n; i * 2) {
    console.log(n);
  }
}
// O(log2n)

// 6.
function someFunction(n) {
  while (true) {
    console.log(n);
  }
}

// Infinite loop.

// Chapter 3 Exercises

// 1. Given three numbers x, y, and p, compute (xˆy) % p. (This is modular exponentiation.)
function modularExponentiation(base, exponent, modulus) {
  if (modulus == 1) return 0;

  var value = 1;

  for (var i = 0; i < exponent; i++) {
    value = (value * base) % modulus;
  }
  return value;
}

// Time Complexity: O(n)

// 2. Print all primes less than n.
function allPrimesLessThanN(n) {
  for (var i = 0; i < n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  // This is checked so that we can skip
  // middle five numbers in below loop
  if (n % 2 == 0 || n % 3 == 0) return false;

  for (var i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }

  return true;
}

allPrimesLessThanN(15);

// prints 2, 3, 5, 7, 11, 13

// Time Complexity: O(nsqrt(n))

// 3. Check for a set of prime factors.
function arrayNUglyNumbers(n) {
  var counter = 0,
    currentNumber = 1,
    uglyNumbers = [];
  while (counter != n) {
    if (isUgly(currentNumber)) {
      counter++;
      uglyNumbers.push(currentNumber);
    }
    currentNumber++;
  }

  return uglyNumbers;
}

// Time Complexity for maxDivide(number, divisor):
// O(logdivisor(number))

// Time Complexity for isUgly: O(log2(n))

// Time Complexity for arrayNUglyNumbers: O(n(log2(n)))

function findSum(arr, weight) {
  for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
    for (var j = i + 1; j < arrLength; j++) {
      if (arr[i] + arr[j] == weight) {
        return [i, j];
      }
    }
  }
  return -1;
}

// Chapter 5 exercises

// 1. Problem: Given the array arr, find and return two indices of the array that add up to weight or return -1 if there is no combination that adds up to weight.

function findSum(arr, weight) {
  for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
    for (var j = i + 1; j < arrLength; j++) {
      if (arr[i] + arr[j] == weight) {
        return [i, j];
      }
    }
  }
  return -1;
}

// Time Complexity: O(n2)

// Space Complexity: O(1)

// 2.Let's think about how to do this in linear time of O(n).

// What if any previously seen array elements were stored and could be checked easily?

function findSumBetter(arr, weight) {
  var hashtable = {};

  for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
    var currentElement = arr[i],
      difference = weight - currentElement;

    // check the right one already exists
    if (hashtable[currentElement] != undefined) {
      return [i, hashtable[weight - currentElement]];
    } else {
      // store index
      hashtable[difference] = i;
    }
  }
  return -1;
}

// Time Complexity: O(n)

// Space Complexity: O(n)

// 3.

function arraySlice(array, beginIndex, endIndex) {
  // If no parameters passed, return the array
  if (!beginIndex && !endIndex) {
    return array;
  }

  // If only beginning index is found, set endIndex to size
  endIndex = array.length;

  var partArray = [];

  // If both begin and end index specified return the part of the array
  for (var i = beginIndex; i < endIndex; i++) {
    partArray.push(array[i]);
  }

  return partArray;
}
arraySlice([1, 2, 3, 4], 1, 2); // [2]
arraySlice([1, 2, 3, 4], 2, 4); // [3,4]

// Time Complexity: O(n)

// Space Complexity: O(n)

// 4. Find the Median of two Sorted Arrays of the Same Size

function medianOfArray(array) {
  var length = array.length;
  // Odd
  if (length % 2 == 1) {
    return array[Math.floor(length / 2)];
  } else {
    // Even
    return (array[length / 2] + array[length / 2 - 1]) / 2;
  }
}
// arr2 is the bigger array
function medianOfTwoSortedArray(arr1, arr2, pos) {
  if (pos <= 0) {
    return -1;
  }
  if (pos == 1) {
    return (arr1[0] + arr2[0]) / 2;
  }
  if (pos == 2) {
    return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2;
  }

  var median1 = medianOfArray(arr1),
    median2 = medianOfArray(arr2);

  if (median1 == median2) {
    return median1;
  }

  var evenOffset = pos % 2 == 0 ? 1 : 0,
    offsetMinus = Math.floor(pos / 2) - evenOffset,
    offsetPlus = Math.floor(pos / 2) + evenOffset;

  if (median1 < median2) {
    return medianOfTwoSortedArray(
      arr1.slice(offsetMinus),
      arr2.slice(offsetMinus),
      offsetPlus
    );
  } else {
    return medianOfTwoSortedArray(
      arr2.slice(offsetMinus),
      arr1.slice(offsetMinus),
      offsetPlus
    );
  }
}

medianOfTwoSortedArray([1, 2, 3], [4, 5, 6], 3); // 3.5
medianOfTwoSortedArray([11, 23, 24], [32, 33, 450], 3); // 28
medianOfTwoSortedArray([1, 2, 3], [2, 3, 5], 3); // 2.5

//    Time Complexity: O(log2(n))

// 6. Find Common Elements in K-Sorted Arrays

function commonElements(kArray) {
  var hashmap = {},
    last,
    answer = [];

  for (var i = 0, kArrayLength = kArray.length; i < kArrayLength; i++) {
    var currentArray = kArray[i];
    last = null;
    for (
      var j = 0, currentArrayLen = currentArray.length;
      j < currentArrayLen;
      j++
    ) {
      var currentElement = currentArray[j];
      if (last != currentElement) {
        if (!hashmap[currentElement]) {
          hashmap[currentElement] = 1;
        } else {
          hashmap[currentElement]++;
        }
      }
      last = currentElement;
    }
  }

  // Iterate through hashmap
  for (var prop in hashmap) {
    if (hashmap[prop] == kArray.length) {
      answer.push(parseInt(prop));
    }
  }
  return answer;
}

commonElements([
  [1, 2, 3],
  [1, 2, 3, 4],
  [1, 2],
]); // [ 1, 2 ]

//    Time Complexity: O(kn)

//    Space Complexity: O(n)

// 7. Let's create an example problem with a matrix. Given a matrix, print the elements in a spiral order, like in F
var M = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];
function spiralPrint(M) {
  var topRow = 0,
    leftCol = 0,
    btmRow = M.length - 1,
    rightCol = M[0].length - 1;

  while (topRow < btmRow && leftCol < rightCol) {
    for (var col = 0; col <= rightCol; col++) {
      console.log(M[topRow][col]);
    }
    topRow++;
    for (var row = topRow; row <= btmRow; row++) {
      console.log(M[row][rightCol]);
    }
    rightCol--;
    if (topRow <= btmRow) {
      for (var col = rightCol; col >= 0; col--) {
        console.log(M[btmRow][col]);
      }
      btmRow--;
    }
    if (leftCol <= rightCol) {
      for (var row = btmRow; row > topRow; row--) {
        console.log(M[row][leftCol]);
      }
      leftCol++;
    }
  }
}
spiralPrint(M);
//    Time Complexity: O(mn)

//    Space Complexity: O(1)

// 8. Tic-Tac-Toe Check

function checkRow(rowArr, letter) {
  for (var i = 0; i < 3; i++) {
    if (rowArr[i] != letter) {
      return false;
    }
  }
  return true;
}

function checkColumn(gameBoardMatrix, columnIndex, letter) {
  for (var i = 0; i < 3; i++) {
    if (gameBoardMatrix[i][columnIndex] != letter) {
      return false;
    }
  }
  return true;
}

function ticTacToeWinner(gameBoardMatrix, letter) {
  // Check rows
  var rowWin =
    checkRow(gameBoardMatrix[0], letter) ||
    checkRow(gameBoardMatrix[1], letter) ||
    checkRow(gameBoardMatrix[2], letter);

  var colWin =
    checkColumn(gameBoardMatrix, 0, letter) ||
    checkColumn(gameBoardMatrix, 1, letter) ||
    checkColumn(gameBoardMatrix, 2, letter);

  var diagonalWinLeftToRight =
    gameBoardMatrix[0][0] == letter &&
    gameBoardMatrix[1][1] == letter &&
    gameBoardMatrix[2][2] == letter;
  var diagonalWinRightToLeft =
    gameBoardMatrix[0][2] == letter &&
    gameBoardMatrix[1][1] == letter &&
    gameBoardMatrix[2][0] == letter;

  return (
    rowWin || colWin || diagonalWinLeftToRight || diagonalWinRightToLeft
  );
}

var board = [
  ["O", "-", "X"],
  ["-", "O", "-"],
  ["-", "X", "O"],
];
ticTacToeWinner(board, "X"); // false
ticTacToeWinner(board, "O"); // true

// 9. Path Finding

var board = `%e%%%%%%%%%\n
   %...%.%...%\n
   %.%.%.%.%%%\n
   %.%.......%\n
   %.%%%%.%%.%\n
   %.%.....%.%\n
   %%%%%%%%%x%`;

function generateColumnArr(arr) {
  return arr.split("");
}
var mazeMatrix = rows.map(generateColumnArr);

function findChar(char, mazeMatrix) {
  var row = mazeMatrix.length,
    column = mazeMatrix[0].length;

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < column; j++) {
      if (mazeMatrix[i][j] == char) {
        return [i, j];
      }
    }
  }
}

function findChar(char, mazeMatrix) {
  var row = mazeMatrix.length,
    column = mazeMatrix[0].length;

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < column; j++) {
      if (mazeMatrix[i][j] == char) {
        return [i, j];
      }
    }
  }
}

function mazePathFinder(mazeMatrix) {
  var row = mazeMatrix.length,
    column = mazeMatrix[0].length,
    startPos = findChar("e", mazeMatrix),
    endPos = findChar("x", mazeMatrix);
  path(startPos[0], startPos[1]);
  function path(x, y) {
    if (x > row - 1 || y > column - 1 || x < 0 || y < 0) {
      return false;
    }
    // Found
    if (x == endPos[0] && y == endPos[1]) {
      return true;
    }
    if (mazeMatrix[x][y] == "%" || mazeMatrix[x][y] == "+") {
      return false;
    }
    // Mark the current spot
    mazeMatrix[x][y] = "+";
    printMatrix(mazeMatrix);
    if (
      path(x, y - 1) ||
      path(x + 1, y) ||
      path(x, y + 1) ||
      path(x - 1, y)
    ) {
      return true;
    }
    mazeMatrix[x][y] = ".";
    return false;
  }
}

// Time Complexity: O(mn)

// Space Complexity: O(1)

// 9.Matrix Rotation
// Rotate a matrix to the left by 90 degrees.

var matrix = [
  [1, 0, 1],
  [0, 0, 1],
  [1, 1, 1],
];

function rotateMatrix90Left(mat) {
  var N = mat.length;

  // Consider all squares one by one
  for (var x = 0; x < N / 2; x++) {
    // Consider elements in group of 4 in
    // current square
    for (var y = x; y < N - x - 1; y++) {
      // store current cell in temp variable
      var temp = mat[x][y];

      // move values from right to top
      mat[x][y] = mat[y][N - 1 - x];

      // move values from bottom to right
      mat[y][N - 1 - x] = mat[N - 1 - x][N - 1 - y];

      // move values from left to bottom
      mat[N - 1 - x][N - 1 - y] = mat[N - 1 - y][x];

      // assign temp to left
      mat[N - 1 - y][x] = temp;
    }
  }
}

rotateMatrix90Left(matrix);
console.log(matrix); // [[1,1,1],[0,0,1],[1,0,1]]

// Time Complexity: O(mn)

// Space Complexity: O(1)
