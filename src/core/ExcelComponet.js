import { DomListener } from "@core/DomListener";

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name;
    this.prepare();
    this.emitter = options.emitter;
    this.unsubscribers = [];
  }
  //Настроюємо наш компонент до init
  prepare() {}
  //Повертаэмо шаблон компонента
  toHTML() {
    return "";
  }
  //Ініціалізуємо компонент
  //додаємо слухачів
  init() {
    this.initDOMListeners();
  }
  //yvedomlajem slyshatelej pro sobytije event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }
  //Podpysyjemsja na podijy event
  $on(event, fn) {
    const unsab = this.emitter.subscribe(event, fn);
    this.unsubscribers.push(unsab);
  }
  //Видаляємо компонент
  //Чистимо слухачів
  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach((unsab) => unsab());
  }
}
