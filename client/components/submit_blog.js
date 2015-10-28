AutoForm.hooks({
  'name': {
    onSuccess: function (operation, result, template) {
      IonModal.close();
      IonKeyboard.close();
      Router.go('blog.item', {_id: result});
    }
  }
});