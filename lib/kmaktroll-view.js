'use babel';

export default class KmaktrollView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('kmaktroll');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The Kmaktroll package have been trolling since 2017 ;)';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
