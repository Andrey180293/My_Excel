import { $ } from "../../core/dom";

export function resizeHandler(event, $root) {
  let $resizer = $(event.target);
  let $parent = $resizer.closest('[data-type="resizable"]');
  let coords = $parent.getCoords();
  let type = $resizer.data.resize;
  let cells = $root.findAll(`[data-col="${$parent.data.col}"]`);
  let valueCol = null;
  let valueRow = null;
  document.onmousemove = (e) => {
    if (type === "col") {
      const delta = e.clientX - coords.right;
      valueRow = coords.width + delta;
      $resizer.css({
        right:
          valueRow > 40
            ? -delta + "px"
            : coords.right - coords.left - 40 + "px",
      });
    } else {
      let delta = e.clientY - coords.bottom;
      valueCol = coords.height + delta;

      $resizer.css({
        bottom: valueCol > 20 ? -delta + "px" : coords.height - 20 + "px",
      });
    }
  };

  document.onmouseup = () => {
    if (valueCol || valueRow) {
      if (type === "col") {
        cells.forEach((element) => {
          console.log(valueRow);
          element.style.width = valueRow > 20 ? valueRow + "px" : "20px";
        });
        $resizer.css({ right: 0 });
      } else {
        $parent.css({ height: valueCol > 20 ? valueCol + "px" : "20px" });

        $resizer.css({ bottom: 0 });
      }
    }
    document.onmousemove = null;

    document.onmouseup = null;
  };
}
