export class TablsSelection {
  static className = "selected";
  constructor() {
    this.group = [];
    this.current = null;
  }

  // $el instanceof DOM === true
  select($el) {
    this.clear();
    this.group.push($el);
    this.current = $el;
    $el.focus().addClass(TablsSelection.className);
  }
  clear() {
    this.group.forEach((el) => el.removeClass(TablsSelection.className));
    this.group = [];
  }

  selectedGroup($group = []) {
    this.clear();
    this.group = $group;
    this.group.forEach((el) => el.addClass(TablsSelection.className));
  }
}
