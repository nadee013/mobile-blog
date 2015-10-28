Template.layout.rendered = function () {
  Session.set('currentTab', 'trending');
};

Template.layout.events({
  'click [data-action=share-product]': function (event, template) {
    IonActionSheet.show({
      titleText: 'Share Product',
      buttons: [
        { text: '<i class="icon ion-social-twitter"></i> Tweet' },
        { text: '<i class="icon ion-ios-email"></i> Email' },
      ],
      cancelText: 'Cancel',
      buttonClicked: function(index) {
        if (index === 0) {
          console.log('Tweet!');
          IonPopup.alert({title: 'Share', subTitle: 'Share in Twitter', template: 'Tweeted'});
        }
        if (index === 1) {
          console.log('Email!');
          IonPopup.alert({title: 'Share', subTitle: 'Share in email', template: "Emailed"});
        }
        return true;
      }
    });
  }
});
