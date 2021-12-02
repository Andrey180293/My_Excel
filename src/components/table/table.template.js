const CODES = {
  A: 65,
  Z: 90,
};
function toCell(col) {
  return `<div class="cell" contenteditable="true" data-col='${col}' ></div>`;
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

  const cells = new Array(colsCount)
    .fill("")
    .map((el, i) => toCell(i))
    .join("");
  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(cells, i + 1));
  }

  return rows.join("");
}
