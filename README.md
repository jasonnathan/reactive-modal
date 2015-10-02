meteor-reactive-modal
=====================

This is an enhanced fork of pahans:reactive-modal due to lack of maintenance on the original repository.

Key Differences
===============
 * Ability to reuse shareDialogInfo objects
 * Fixed closure on button reactivity
 * More reactive parts
 * hideCloseButton option
 * Pass-though of options object on modal initialisation

How to Use
=========

#### Install from atmosphere
```js
meteor add jchristman:reactive-modal
```
###Init your bootstrap modal 
a meteor template is the body of your modal

```html
<template name="appShareDialog">
<p>OK to go ahead and share {{app}}?</p>
</template>
```

```js
Meteor.startup(function(){
  var shareDialogInfo = {
    template: Template.appShareDialog,
    title: "Share the app",
    doc: {}, // optional data context.
    modalDialogClass: "share-modal-dialog", // optional
    modalBodyClass: "share-modal-body", // optional
    modalFooterClass: "share-modal-footer", // optional
    removeOnHide: true, // optional. If this is true, modal will be removed from DOM upon hiding
    hideCloseButton=true, // optional. If this true, the modal header will not show the &times; close button
    modalOptions: { // optional. Pass - through of the Boostrap Modal options object, applied on initialisation
      keyboard: false,
      backdrop: 'static',
      show: false
      }, 
    buttons: {
      "cancel": {
        class: 'btn-danger',
        label: 'Cancel'
      },
      "ok": {
        closeModalOnClick: false, // if this is false, dialog doesnt close automatically on click
        class: 'btn-info',
        label: 'Ok',
        iconClass: 'glyphicon glyphicon-ok' //optional. Defines a icon before the button label. 
      }

    },
    doc: {  // Provide data context for Template.appShareDialog
      app: "My Application"
    }
  }

  var rd = ReactiveModal.initDialog(shareDialogInfo);

});
```

###button event handling
```js
rd.buttons.ok.on('click', function(button){
  // what needs to be done after click ok.
});
```

###Displaying Modal
you can use show/hide methods to show/hide modal
```js
rd.show();
```

```js
rd.hide();
```

### capture modal html element
```javascript
  //modalTarget contains the html
  $(rd.modalTarget).find('[name=inputFooBar]').val()
```

### Modal template data context

Provide a `doc` property on the info options object to provide a data context for your dialog template

### Convenience functions

For any button, you can call the following functions:
 * .disable()
 * .enable()
 * .closeOnClick()
 * .noCloseOnClick()
 * .setLabel()

For example, the following code would change the label of the button and make it so that clicking 'ok' a second time would close the modal.
```js
rd.buttons.ok.on('click', function(button){
  rd.buttons.setLabel('Are you sure?');
  rd.buttons.ok.closeOnClick();
});
```

### License
MIT
