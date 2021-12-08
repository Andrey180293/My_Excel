const CODES = {
  A: 65,
  Z: 90,
};
function toCell(row) {
  return function (_, col) {
    return `<div class="cell" contenteditable="true" data-col='${col}' data-id="${row}:${col}" data-type="cell" ></div>`;
  };
}
function toColumn(col, idx) {
  return `
    <div class="column" data-type='resizable' data-col='${idx}'>${col}
    <div class="col-resize" data-resize='col' ></div></div>
    `;
}
function createRow(content, index = "") {
  const resizer =
    index > 0 ? '<div class="row-resize" data-resize="row" ></div>' : "";
  return `
    <div class="row" data-type='resizable'>
    <div class="row-info" >${index}
    ${resizer}
    </div>
    <div class="row-data">${content}</div>
    </div>
    `;
}
function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}
export function createTable(rowsCount = 55) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  const colls = new Array(colsCount)
    .fill("")
    .map(toChar)
    .map((char, idx) => toColumn(char, idx))
    .join("");
  rows.push(createRow(colls));

  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount).fill("").map(toCell(row)).join("");
    rows.push(createRow(cells, row + 1));
  }

  return rows.join("");
}
