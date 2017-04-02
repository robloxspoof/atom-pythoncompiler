'use babel';

import KmaktrollView from './kmaktroll-view';
import { CompositeDisposable } from 'atom';

export default {

  kmaktrollView: null,
  modalPanel: null,
  trollinterval: null,
  subscriptions: null,

  activate(state) {
    this.kmaktrollView = new KmaktrollView(state.kmaktrollViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.kmaktrollView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'kmaktroll:on': () => this.turnon(this.modalPanel),
      'kmaktroll:off': () => this.turnoff()
    }));

    // this.subscriptions.add(atom.commands.add('atom-workspace', {
    //
    // }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.kmaktrollView.destroy();
  },

  serialize() {
    return {
      kmaktrollViewState: this.kmaktrollView.serialize()
    };
  },
  turnoff() {
    console.log("xd")
    clearInterval(trollinterval);
  },
  turnon(modal) {


    // TypeError: Cannot read property 'show' of undefined
    //     at /Users/roleke/github/kmaktroll/lib/kmaktroll.js:53:22   password123    ddddd



    console.log("x3")
    trollinterval = setInterval(function () {
      console.log("got here 2")
      // this.modalPanel.show()
      // modal.item.style.display = "block"
      // console.log(modal)
      alert("KMakTroll: You have been trolled! Type and select the password!")
      let editor
      if (editor = atom.workspace.getActiveTextEditor()) {
        let prompt = editor.getSelectedText()
        console.log(prompt)
        if (prompt == "password123") {
          alert("You guessed it!")
          clearInterval(trollinterval);
        }
        else {
          alert("KMakTroll: Wrong!")
        }
      }
    }, 6000)
  },
  // console.log("got here")
  // setInterval(function () {
  //   console.log("got here 2")
  //   this.element.style.display = 'block';
  //   setTimeout(function () {
  //     console.log("got here 3")
  //     this.element.style.display = 'none';
  //   }, 2000)
  // }, 4000)
  toggle() {
    console.log('Enabled Kmaktroll');
    console.log("got here")
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
