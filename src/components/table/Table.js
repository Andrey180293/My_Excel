import { ExcelComponent } from "@core/ExcelComponet";
import { createTable } from "./table.template";
export class Table extends ExcelComponent {
  static className = "excel__table";

  toHTML() {
    return createTable();
  }
}
