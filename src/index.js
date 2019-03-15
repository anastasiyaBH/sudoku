module.exports = function solveSudoku(matrix) {

  solve(matrix);
  return matrix;


function solve(matrix) {

  let row = 0, column = 0;

  if (isFillMatrix()) {
    return true;
  }

  for (let i = 8; i >=0; i--) {
    for (let j = 8; j >=0 ; j--) {
      if (matrix[i][j] === 0) {
        row = i;
        column = j;
      }
    }
  }

  for (let guess = 1; guess <= 9; guess++) { 
    if ( isOkForRow(guess, row) &&
          isOkForColumn(guess, column) &&
          isOkForGrid(guess, row, column) ) {

          matrix[row][column] = guess;
          if (solve(matrix)) {                
            return true;
          } 
          matrix[row][column] = 0;
    }
  }
  return false;
}    

function isFillMatrix() {
  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      if (matrix[i][j] === 0) {
        return false;
      }
    }
  }
  return true;
}

function isOkForRow(num, row) {
  for (let j = 0; j < 9; ++j) {
    if (matrix[row][j] === num) {
      return false;
    }
  }
  return true;
}

function isOkForColumn(num, column) {
  for (let i = 0; i < 9; ++i) {
    if (matrix[i][column] === num) {
      return false;
    }
  }
  return true;
}

function isOkForGrid(num, row, column) {
  let startRow = 0, startColumn = 0;

  if (row >= 3 && row <= 5) {
    startRow = 3;
  } else if (row >= 6 && row <= 8) {
    startRow = 6;
  }

  if (column >= 3 && column <= 5) {
    startColumn = 3;
  } else if (column >= 6 && column <= 8) {
    startColumn = 6;
  }

  for (let x = startRow + 2; x >= startRow; --x) {
    for (let y = startColumn + 2; y >= startColumn; --y) {
      if (matrix[x][y] === num) {
        return false;
      }
    }
  }
  return true;
}

}
