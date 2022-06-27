function getRow(grid, rowIndex) {
    let rowArray = [];
    let row = grid[rowIndex];
    rowArray += row;
    return rowArray;
  }
  
  function getColumn(grid, columnIndex) {
    let columnArray = [];
    for (let i = 0; i < grid.length; i++) {
      let column = grid[i][columnIndex];
      columnArray += column;
      }
    return columnArray;
  }
  
  function getSection(grid, xSect, ySect) {
    let sectionArray = [];
    // re-assigning xSect
    if (xSect === 0) {
      xSect = 0;
    }
    else if (xSect === 1) {
      xSect = 3;
    }
    else if (xSect === 2) {
      xSect = 6;
    }
    else {
      return "invalid xSect";
    }
    //re-assigning ySect
    if (ySect === 0) {
      ySect = 0;
    }
    else if (ySect === 1) {
      ySect = 3;
    }
    else if (ySect === 2) {
      ySect = 6;
    }
    else {
      return "invalid ySect";
    }
    // row loop for grid
    for (let i = xSect; i < xSect + 3; i++) {
      let row = grid[i];
      // column loop for grid
      for (let k = ySect; k < ySect + 3; k++) {
        sectionArray += row[k];
      }
    }
    return sectionArray;
  }
  
  function includes1to9(array) {
    let returnVal = true;
    for (let i = 1; i <= 9; i++) {
      if (array.includes(i.toString())) {}
      else {
        return false;
      }
    }
    return returnVal;
  }
  
  function sudokuIsValid(grid) {
    let returnVal = true;
    for (let i = 0; i < grid.length; i++) {
      let rowIndex = i;
      if (includes1to9(getRow(grid, rowIndex)) === true) {}
      else {
        return false;
      }
    }
    for (let i = 0; i < grid.length; i++) {
      let columnIndex = i;
      if (includes1to9(getColumn(grid, columnIndex)) === true) {}
      else {
        return false;
      }
    }
    for (let i = 0; i <= 2; i++) {
      let xSect = i;
      for (let k = 0; k <= 2; k++) {
        let ySect = k;
        if (includes1to9(getSection(grid, xSect, ySect)) === true) {}
        else {
          return false;
        }
      }
    }
    return returnVal;
  }